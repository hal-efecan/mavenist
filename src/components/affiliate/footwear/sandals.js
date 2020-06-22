import React from 'react'
import Img from 'gatsby-image';

import { graphql, useStaticQuery } from 'gatsby'

const Sandals = () => {
    
    const data = useStaticQuery(query)
    const sandalsArray = data.allMdx.edges

    return (
        <>
            {
              sandalsArray.map(sandal => {
                const { id } = sandal.node
                const { name, image, description, price, url } = sandal.node.frontmatter

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

export default Sandals

const query = graphql`
{
  allMdx(filter: {frontmatter: {type: {eq: "Affiliate"}, category: {eq: "Sandals"}}}) {
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