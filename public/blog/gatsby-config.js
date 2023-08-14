/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `UAB CS Clubs Set of Resources`,
    description: `A set of resources for UAB CS Students, prepared by UAB ACM and UAB WIT`,
    author: `@Michaelgathara`,
    siteUrl: `https://uabcsclubs.org/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UAB CS Clubs`,
        short_name: `UAB CS Clubs`,
        start_url: `/`,
        background_color: `#FFF`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/content/blogs`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-highlight-code`,
    //         options: {
    //           terminal: "ubuntu",
    //           theme: "blackboard",
    //         }
    //       }
    //     ]
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: `gatsby-remark-highlight-code`,
    //         options: {
    //           terminal: "ubuntu",
    //           theme: "blackboard",
    //         }
    //       },
    //     ],
    //   },
    // },
  ],
}
