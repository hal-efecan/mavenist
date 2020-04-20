import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import { CartContext } from '../context/cartContext'

const Product_page = (props) => {

    const cart_context = useContext(CartContext)
    const { frontmatter, html } = props.data.markdownRemark
    const { name, sku, price,
      image1: { childImageSharp: { fixed: fixed1 }}, 
      image2: { childImageSharp: { fixed: fixed2 }} } = frontmatter
    
    const product = {
      id: sku,
      price
    }

    function clickHandler() {
      cart_context.add(product)
    }
    
    return (
        <Layout>
            <h1 style={{ textAlign: "center" }}>{name}</h1>
            <div style={{ display: "flex", width: "80%", margin: "0 auto" }}>
              <div>
                <Img fixed={fixed1} />
                <Img fixed={fixed2} />
              </div>

              <div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              <button onClick={clickHandler}>Add To Cart</button>
              </div>
            </div>

        </Layout>
    )
}

export default Product_page

export const query = graphql`
query (
  $slug: String!
) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    html
    fields {
      slug
    }
    frontmatter {
      sku
      type
      price
      name
      image1 {
        childImageSharp {
          fixed {
            originalName
            aspectRatio
            base64
            height
            src
            srcSetWebp
            srcSet
            srcWebp
            tracedSVG
            width
          }
        }
      }
      image2 {
        childImageSharp {
          fixed {
            originalName
            aspectRatio
            base64
            height
            src
            srcSetWebp
            srcSet
            srcWebp
            tracedSVG
            width
          }
        }
      }
    }
  }
}
`