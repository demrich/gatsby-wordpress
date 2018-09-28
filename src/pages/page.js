import React from "react"
import { graphql } from "graphql"

export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    {data.allWordpressPage.edges.map(edge => {
      console.log(edge.node.slug)
      return <li id={edge.node.id} key={edge.node.id}>{edge.node.title}</li>
    })}
  </div>
)


export const query = graphql`
query query {
  allWordpressPage {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
    
`