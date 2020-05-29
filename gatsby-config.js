require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `The Mavenist`,
    description: `Digital fashion & lifestyle destination - Find the latest news on pop culture, sneakers, style.`,
    siteUrl: `https://themavenist.com`,
    image: `/themavenist-1200x630.png`,
    siteLanguage: `en-GB`,
    siteLocale: `en_gb`,
    social: {
      twitter: `@themavenist`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {

                  const {
                      node: {
                          frontmatter: { image }
                      }
                  } = edge;

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  enclosure: image && {
                    url: site.siteMetadata.siteUrl + image.publicURL,
                },
                  custom_elements: [{ "content:encoded": edge.node.html }, {img: site.siteMetadata.siteUrl + image.publicURL }] // "content:encoded"
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {type: {eq: "post"}} },
                ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                      path
                      image {
                        id
                        publicURL
                      }
                    }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: `The Mavenist RSS Feed`,
            // match: "^/blog/",
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Sku'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog/`,
        name: `blog`,
      },
    },
          {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/products/`,
          name: `products`,
        },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-instagram-embed',
            options: {
              maxWidth: 320,
              maxHeight: 320,
            },
          },
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-robots-txt',
    // `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // output: `/some-other-sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/marshall`, `/parkgate`, `/review/`, `/shop/`, `/success/`, `/cancelled/`],
      //   query: `
      // query: `
      // {
      //   allSitePage 
      //     {
      //      nodes {
      //        path
      //      }
      //    }
      //   }`
      //     {
      //       wp {
      //         generalSettings {
      //           siteUrl
      //         }
      //       }
  
      //       allSitePage {
      //         nodes {
      //           path
      //         }
      //       }
      //   }`,
      //   resolveSiteUrl: ({site, allSitePage}) => {
      //     //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
      //     return site.wp.generalSettings.siteUrl
      //   },
      //   serialize: ({ site, allSitePage }) =>
      //     allSitePage.nodes.map(node => {
      //       return {
      //         url: `${site.wp.generalSettings.siteUrl}${node.path}`,
      //         changefreq: `daily`,
      //         priority: 0.7,
      //       }
      //     })
      }
    },
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
    // {
    //   resolve: `gatsby-plugin-html-comments`,
    //   options: {
    //     files: ['./public/**/*.html', './public/*.html'],
    //     comment: [
    //       {
    //         regexp: /<custom-tag>(.*?)<\/custom-tag>/g,
    //         comment: `<!-- Digital window verification 001 -->`,
    //         },
    //     ]
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}