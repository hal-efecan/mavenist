import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Shia = () => {

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
            }}>PHOTO: @shiasoutfits</p>
        </div>
    )
}

export default Shia

const query = graphql`
{
    imageSharp(fluid: {originalName: {eq: 
    "shia_oversize.jpg"
     }}) {
        id
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
}
`