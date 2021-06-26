import * as React from 'react'
// Step 1: Import the graphql tag
import {graphql} from 'gatsby'
import Layout from '../components/layout'


const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      { /* Step 3: Use the data in your component*/ }
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}
// Step 2: Export a page query
export const query = graphql `
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage