import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
            <title>UAB CS Wiki</title>
            <meta name="description" content="A wiki of resources for UAB CS students"/>
            <meta property="og:image" content="src/images/logo.png" />
            <link rel="stylesheet" href="src/components/blog.module.css"/>
            <meta name="keywords"
            content="UAB" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
            <meta name="theme-color" content="#000" />
            <meta name="author" content="Michael Gathara" />
            <meta property="og:image" content="https://michaelgathara.com/images/minimal.png"/>
            <link rel="icon" href="https://michaelgathara.com/images/favicon.ico"/>
            
          {/* existing head component */}
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          
          {this.props.postBodyComponents}
          <script type="text/javascript" src="https://michaelgathara.com/assets/index.js"></script>
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
