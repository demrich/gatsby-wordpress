const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
      // First, query all the pages on your WordPress
      graphql(
        `
          {
            allWordpressPage {
              edges {
                node {
                  id
                  slug
                  status
                  template
                }
              }
            }
          }
        `
      )
        .then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          // Create those pages with the wp_page.jsx template.
          const pageTemplate = path.resolve(`./src/templates/page.js`)
          _.each(result.data.allWordpressPage.edges, edge => {
            createPage({
              path: `${edge.node.slug}/`,
              component: slash(pageTemplate),
              context: {
                id: edge.node.id
              }
            })
          })
        })
        /////////////
      
      resolve();
})
}; 

exports.modifyWebpackConfig = ({ config, stage }) => {
    if (stage === 'build-javascript') {
      config.plugin('Lodash', webpackLodashPlugin, null)
    }
  }