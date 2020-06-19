import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Airmax90 = () => {

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
                width: `400px`,
                height: `300px`
            }} />
        </div>
    )
}

export default Airmax90

const query = graphql`
{
    imageSharp(fluid: {originalName: {eq: 
    "air_max90.jpg"
     }}) {
        id
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
}
`