const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

//////////////////
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const productPost = path.resolve(`./src/templates/product-page.js`)

  // blog posts
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                path
                type
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }
  // console.log('result', result.data.allMarkdownRemark)
  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    // console.log('post~~~~~~', post)
    // console.log('post~~~~~~', post.node.frontmatter.path)
    // console.log('slugggg', post.node.fields.slug)
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    if (post.node.frontmatter.type === 'product') {
      createPage({
        path: `/${post.node.fields.slug}`, // ${/*post.node.frontmatter.path*/}
        component: productPost,
        context: {
          slug: post.node.fields.slug,
        }
      });
    } else {
      createPage({
        path: `${post.node.fields.slug}`, // ${/*post.node.frontmatter.path*/}
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
        }
      })
    }
    
  })
}

/////////////////
exports.onCreateNode = ({ node, actions /*, getNode*/ }) => { // getNode added later
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = path.basename(node.fileAbsolutePath, `.md`)
    console.log('slug~~~~~~~~', slug)
    // const value = createFilePath({ node, getNode }) // added later

    createNodeField({
      name: `slug`,
      node,
      value: `/${slug}`
    })
  }
}

/////////////////

// const serialize = ({ query: { site, allMarkdownRemark } }) =>
//   allMarkdownRemark.edges.map(edge => {
//     return {
//       ...edge.node.frontmatter,
//       description: edge.node.excerpt,
//       url: site.siteMetadata.siteUrl + "/" + edge.node.fields.slug,
//       guid: site.siteMetadata.siteUrl + "/" + edge.node.fields.slug,
//       custom_elements: [{ "content:encoded": edge.node.html }],
//     }
//   })