require("dotenv").config()

console.log(`~~~~~~~~~~~~~~~~~`, process.env.NODE_ENV)
console.log(`@@@@@@@@@@@@@@@@@@@`, process.env.GOOGLE_ANALYTICS)
console.log(`@@@@@@@@@@@@@@@@@@@`, process.env.GATSBY_DISQUS_NAME)

module.exports = {
  siteMetadata: {
    title: `The Mavenist`,
    template: `Find the latest news on pop culture, sneakers, style.`,
    description: `Digital fashion & lifestyle destination. Find the latest news on fashion, entertainment, lifestyle, culture and reviews.`,
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
      resolve: `gatsby-plugin-feed-mdx`,
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
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                const { node: { frontmatter: { image }} } = edge;

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + `/${edge.node.fields.slug}`,
                  guid: site.siteMetadata.siteUrl + `/${edge.node.fields.slug}`,
                  enclosure: image && {
                    url: `https://www.themavenist.com` + image.publicURL,
                },
                custom_namespaces: {
                  'xmlns:media': "http://search.yahoo.com/mrss/"
                },
                  custom_elements: [{ "content:encoded": edge.node.html }], 
                })
              })
            },
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {type: {eq: "post"}} },
                ) {
                edges {
                  node {
                    parent {
                      ... on File {
                        modifiedTime
                      }
                    }
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
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.GATSBY_DISQUS_NAME,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato`,
          `Courgette`,
          `PT Sans`,
          `Roboto Slab`,
          `Oswald\:700`
        ],
        display: 'swap',
      },
    },
    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    //     objects: ['Sku'],
    //     secretKey: process.env.STRIPE_SECRET_KEY,
    //     downloadFiles: false,
    //   }
    // },
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
          path: `${__dirname}/src/pages/`,
          name: `pages`,
        },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-remark-images`,
    `gatsby-plugin-pinterest`,
    {
      // resolve: `gatsby-transformer-remark`,
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout/layout.js`),
        },
        extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 320,
            },
          },
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
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
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `@pauliescanlon/gatsby-mdx-embed`,
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.themavenist.com',
        sitemap: 'https://www.themavenist.com/sitemap.xml',
        policy: [
          { userAgent: '*', disallow: [ `/marshall`, `/parkgate`, `/shop`, `/review/`, `/fashion/sneakers/`, `/fashion/how-to-lounge-in-a-lockdown/`, `/shop/`, `/product/parkgate/`, `/product/marshall/`, `/marshall/`, `/parkgate/` ]  }
        ],
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/marshall`, `/parkgate`, `/review/`, `/shop/`, `/success/`, `/cancelled/`, `/fashion/sneakers/`, `/fashion/how-to-lounge-in-a-lockdown/`],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
              context {
                slug
                lastmod
              }
            }
          }
        }
          `,
        resolveSiteUrl: ({ site }) => {
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
            allSitePage.nodes.map(node => {
            return {
              url: site.siteMetadata.siteUrl + node.path,
              lastmod: node.context.lastmod ? node.context.lastmod.split('T')[0] : null,
              changefreq: `daily`,
              priority: 0.7,
            } 
          })
      }
    },
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
  ],
}