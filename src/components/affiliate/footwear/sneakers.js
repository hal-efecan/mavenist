import React from 'react'
import Img from 'gatsby-image';

import { graphql, useStaticQuery } from 'gatsby'

const Sneakers = () => {
    
    const data = useStaticQuery(secondQuery)
    const sneakersArray = data.allMdx.edges

    return (
        <>

            {
              sneakersArray.map(sneaker => {
                const { id } = sneaker.node
                const { name, image, description, price, url } = sneaker.node.frontmatter

                return (
                  <div 
                  key={id}
                  style={{
                    width: `250px`,
                    textAlign: `center`
                    }}>
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

export default Sneakers

const secondQuery = graphql`
{
  allMdx(filter: {frontmatter: {type: {eq: "Affiliate"}, category: {eq: "Sneakers"}}}) {
    edges {
      node {
        id
        frontmatter {
          type
          category
          description
          name
          url
          price
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