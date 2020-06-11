import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ImgList = () => {

    const data = useStaticQuery(query)
    console.log(data)
    const fluidAdhd = data.allFile.edges[0].node.childImageSharp.fluid
    const fluidBlk = data.allFile.edges[1].node.childImageSharp.fluid
 
    return (
        <div style={{ 
            display: `flex`, 
            margin: `40px 0 0 0`,
            flexDirection: `column`,
            alignItems: `center`
            }}>
            <Img fluid={fluidBlk} style={{
                width: `400px`,
            }} />
            <p style={{
                margin: `20px 0 20px 0`,
                fontSize: `1rem`,
                color: `grey`
            }}>PHOTO: @blvckmvnivc</p>
            <Img fluid={fluidAdhd} style={{
                width: `400px`,
            }} />
            <p style={{
                margin: `20px 0 20px 0`,
                fontSize: `1rem`,
                color: `grey`
            }}>PHOTO: @adhdwear</p>
        </div>
    )
}

export default ImgList

const query = graphql`
{
    allFile(filter: {relativeDirectory: {eq: "comfort-is-king-how-to-pull-off-oversize"}, ext: {eq: ".jpg"}}) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`