import React from "react"
import { Link, graphql } from "gatsby"
import * as styles from "../components/blog.module.css"
import Navigation from "../components/Navigation"

const links = [
  {
    text: "Main",
    url: "https://uabcsclubs.org/",
  },
]
// https://sites.google.com/view/wituab/

const BlogPage = ({ data }) => (
  <div className={styles.main}>
    <br></br>
    {/* <Navigation /> */}
    <h1 className={styles.name}>The UAB CS Wiki</h1>
    <p className={styles.homeLinkText}>By <Link to="https://uabacm.org" className={styles.homeLink}>UAB ACM</Link> & <Link to="https://sites.google.com/view/wituab/" className={styles.homeLink}>UAB WIT</Link></p>
    <div className={styles.blogs}>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <Link to={post.node.frontmatter.path} id={styles.blogTitle} className={styles.blogTitle}>{post.node.frontmatter.title}</Link>
          {/* <p className={styles.blogDate}>{post.node.frontmatter.date}</p> */}
          {/* <hr /> */}
        </div>
      ))}
    </div>
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
          }
        }
      }
    }
  }
`

export default BlogPage
