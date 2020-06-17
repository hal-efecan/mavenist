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
        allMdx(
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
              parent {
                ... on File {
                  modifiedTime
                }
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

  // Create blog posts pages.
  const posts = result.data.allMdx.edges
  // console.log('posts ~~~~~~', posts)
  posts.forEach((post, index) => {
    // console.log('post~~~~~~', post)
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    if (post.node.frontmatter.type === 'product') {
      // createPage({
      //   path: `${post.node.fields.slug}`, // ${/*post.node.frontmatter.path*/}
      //   component: productPost,
      //   context: {
      //     slug: post.node.fields.slug,
      //   }
      // });
    } else if (post.node.frontmatter.type === 'post') {
      createPage({
        path: `${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          lastmod: post.node.parent.modifiedTime
        }
      })
    }
    
  })
}

/////////////////
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = path.basename(node.fileAbsolutePath, `.mdx`)
    // console.log('slug~~~~~~~~', slug)

    createNodeField({
      name: `slug`,
      node,
      value: `${slug}`
    })
  }

  // else if (node.internal.type === `MarkdownRemark`) {
  //   const slug = path.basename(node.fileAbsolutePath, `.md`)
  //   console.log('slug~~~~~~~~', slug)

  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value: `/${slug}`
  //   })
  // }

}