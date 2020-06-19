import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Airmax95 = () => {

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

export default Airmax95

const query = graphql`
{
    imageSharp(fluid: {originalName: {eq: 
    "air_max95.jpg"
     }}) {
        id
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
}
`