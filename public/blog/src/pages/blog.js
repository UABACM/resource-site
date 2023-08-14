import React from "react"
import { Link, graphql } from "gatsby"

const BlogPage = ({ data }) => (
  <div>
    <h1>Our Resources</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h2>{post.node.frontmatter.title}</h2>
        {/* <small>Posted on {post.node.frontmatter.date}</small> */}
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            desc
          }
        }
      }
    }
  }
`

export default BlogPage
