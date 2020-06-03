// import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import { SkuContext } from './skuContext'

// const SkuProvider = (props) => {

//     const skus = useStaticQuery(query)

//     return (
//         <SkuContext.Provider value={{ skus }}>
//             { props.children }
//         </SkuContext.Provider>
//     )
// }

// export default SkuProvider

// const query = graphql`
// query SkusForProduct {
//     skus: allStripeSku {
//       edges {
//         node {
//           id
//           currency
//           price
//           product {
//             metadata {
//               category
//               path
//             }
//           }
//           attributes {
//             name
//           }
//           image
//         }
//       }
//     }
//   }
//     `