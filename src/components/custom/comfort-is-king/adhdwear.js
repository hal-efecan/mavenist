import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Adhdwear = () => {

    const data = useStaticQuery(query)
    const fluid = data.imageSharp.fluid

    return (
        <div style={{ 
            display: `flex`, 
            margin: `40px 0 0 0`,
            flexDirection: `column`,
            alignItems: `center`
            }}>
            <Img fluid={fluid} style={{
                width: `350px`,
            }} />
            <p style={{
                margin: `20px 0 20px 0`,
                fontSize: `1rem`,
                color: `grey`
            }}>PHOTO: @adhdwear</p>
        </div>
    )
}

export default Adhdwear

const query = graphql`
{
    imageSharp(fluid: {originalName: {eq: 
    "adhdwear.jpg"
     }}) {
        id
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
}
`