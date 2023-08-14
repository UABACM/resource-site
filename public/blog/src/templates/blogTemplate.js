// src/templates/blogTemplate.js

import React from "react"
import { Link, graphql } from "gatsby"
import * as styles from "../components/blog.module.css"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import Navigation from "../components/Navigation";


deckDeckGoHighlightElement();

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    // <Navigation></Navigation>
    <div className="blog-post-container">
      <Navigation/>
      <div className="blog-post">
        <h1 className={styles.blogPostTitle} id={styles.blogPostTitle}>{frontmatter.title}</h1>
        <h4 className={styles.blogPostDesc}>{frontmatter.desc}</h4>
        <div className={styles.goingBack}>
          <Link to="https://uabcsclubs.org" className={styles.goBack}><span className={styles.leftArrow}>&lt;</span>  More Posts</Link>
          {/* <Link to="https://michaelgathara.org" className={styles.goNext}>More Posts <span className={styles.leftArrow}>&gt;</span></Link> */}
          <br></br>
          <hr></hr>
        </div>
        <br></br>
        {/* <h2 className={styles.blogPostDate}>{frontmatter.date}</h2> */}
        <div
          className={styles.blogPostContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className={styles.goingBack}>
          <Link to="https://uabcsclubs.org" className={styles.goBack}><span className={styles.leftArrow}>&lt;</span>  More Posts</Link>
          {/* <Link to="https://michaelgathara.org" className={styles.goNext}>More Posts <span className={styles.leftArrow}>&gt;</span></Link> */}
          <br></br>
          <hr></hr>
        </div>
        <br></br><br></br>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        path
        title
        desc
      }
    }
  }
`


