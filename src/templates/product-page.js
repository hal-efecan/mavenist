// import React, { useContext } from 'react'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import Layout from '../components/layout'
// import { MDXRenderer } from 'gatsby-plugin-mdx'

// import { CartContext } from '../context/cartContext'

// const Product_page = (props) => {

//     const cart_context = useContext(CartContext)
//     const { frontmatter, html, body } = props.data.mdx
//     const { name, sku, price } = frontmatter
//       // image1: { childImageSharp: { fixed: fixed1 }}, 
//       // image2: { childImageSharp: { fixed: fixed2 }} } 
    
//     const product = {
//       id: sku,
//       price
//     }

//     function clickHandler() {
//       cart_context.add(product)
//     }
    
//     return (
//         <Layout>
//             <h1 style={{ textAlign: "center" }}>{name}</h1>
//             <div style={{ display: "flex", width: "80%", margin: "0 auto" }}>
//               {/* <div>
//                 <Img fixed={fixed1} />
//                 <Img fixed={fixed2} />
//               </div> */}

//               <div>
//                 {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
//                 <MDXRenderer>{body}</MDXRenderer>
//               <button onClick={clickHandler}>Add To Cart</button>
//               </div>
//             </div>

//         </Layout>
//     )
// }

// export default Product_page

// export const query = graphql`
// query (
//   $slug: String!
// ) {
//   mdx(fields: {slug: {eq: $slug}}) {
//     id

//     body
//     fields {
//       slug
//     }
//     frontmatter {
//       sku
//       type
//       price
//       name

//         }
//       }
//     }
// `