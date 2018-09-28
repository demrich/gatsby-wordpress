import React, { Component } from "react"

class PageTemplate extends Component {
  render(){
    const pageNode = {
      title: this.props.data.wordpressPage.title,
      content: this.props.data.wordpressPage.content,
      id: this.props.data.wordpressPage.id,
      slug: this.props.data.wordpressPage.slug
    }
    console.log(window.location.pathname)
  return (
 <div>
        <h1>{this.props.data.wordpressPage.title}</h1>
      </div>

  );
}
}
export default PageTemplate

export const pageQuery = graphql`
query WordpressPage($slug: String) {
  wordpressPage(slug: { eq: $slug }) {
    id
    wordpress_id
    slug
    title
    template
    content
  }
  site {
    id
    siteMetadata {
      title
    }
  }
}

`;