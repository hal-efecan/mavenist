import React from 'react'
import Img from 'gatsby-image';

import { graphql, useStaticQuery } from 'gatsby'

const Bags = () => {
    
    const data = useStaticQuery(secondQuery)
    const bagsArray = data.allMdx.edges
    console.log('bags array', bagsArray)

    return (
        <>
            {
              bagsArray.map(bag => {
                const { id } = bag.node
                const { name, image, description, price, url } = bag.node.frontmatter
                console.log(name)
                return (
                    <div 
                    key={id}
                    style={{
                        width: `250px`,
                        textAlign: `center`
                    }}
                    >
                    <Img fluid={image.childImageSharp.fluid} />
                    <a 
                        href={url}
                        target={"__blank"}
                        style={{
                            left: `50%`,
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `black`,
                            borderBottom: `2.5px solid #ffd000`,
                            fontStyle: `italic`,
                            fontFamily: `'Open Sans', sans-serif`,
                            fontSize: `0.85rem`
                        }}>
                        <strong>{name} </strong>
                        - {description} (£{price})
                        </a>
                  </div>
                )
              })
            }
        </>
    )
}

export default Bags

const secondQuery = graphql`
{
  allMdx(filter: {frontmatter: {type: {eq: "Affiliate"}, category: {eq: "Bags"}}}) {
    edges {
      node {
        id
        frontmatter {
          type
          category
          name
          price
          url
          description
          image {
            childImageSharp {
              fluid (maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`