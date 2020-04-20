import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import skuListStyle from '../styles/skuList.module.scss'
import productStyles from '../styles/product.module.scss'

import { formatPrice, upperCase } from '../utils/utilityFn'

const Skus = () => {
    
    const data = useStaticQuery(query)
    console.log(data)
    const num1 = data.allMarkdownRemark.edges
    const num2 = data.allStripeSku.edges

    let productsArray = []    

    num2.forEach(item => {
      const {attributes, currency, id, image, price } = item.node
      const { name } = attributes

      num1.forEach(ele => {
        const { slug } = ele.node.fields
        if(item.node.id === ele.node.frontmatter.sku) {
          productsArray.push({
            name,
            id,
            image,
            price,
            currency,
            slug
          })
        }
      })
    })

    // const data = useStaticQuery(query)
    const { pathPrefix } = data.site.siteMetadata
    console.log('pathPrefix', pathPrefix)

    return (
        <div className={skuListStyle.list_container} >
              {
                productsArray.map(item => {
                  const { currency, price, name } = item
                  
                  return (
                    <div className={productStyles.card} key={item.id}>

                      <img className={productStyles.image} src={item.image} width="200px" alt={name} />
                      
                      <div className={productStyles.detail_container}>
                        <h3 className={productStyles.name}>
                        {item.name} {`${upperCase(currency)} ${formatPrice(price)}`}
                        </h3>
                      </div>

                      <div className={productStyles.btn_container}>
                        <Link to={`/product/${item.slug}`}>
                          <button className={productStyles.button} >View Product</button>
                        </Link>
                      </div>

                    </div>
                  )
                })
              }               
        </div>
    )
}

export default Skus

// const query2 = graphql`
// query {
//     site {
//       siteMetadata {
//         pathPrefix
//       }
//     }
//   }
// `

const query = graphql`

query {
  site {
   siteMetadata {
     pathPrefix
   }
 }
 allMarkdownRemark(filter: {frontmatter: {type: {eq: "product"}}}) {
   edges {
     node {
       frontmatter {
         type
         sku
         name
       }
       id
       fields {
         slug
       }
     }
   }
 }
 allStripeSku {
     edges {
       node {
         id
         currency
         price
         product {
           metadata {
             category
             path
           }
         }
         attributes {
           name
         }
         image
       }
     }
   }
}
`