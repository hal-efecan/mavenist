import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Airmax95 = () => {

    const data = useStaticQuery(query)
    const fluid = data.imageSharp.fluid

    return (
        <div style={{ 
            margin: `40px auto 0 auto`,
            width: `600px`
            }}>
            <Img fluid={fluid} />            
        </div>
    )
}

export default Airmax95

const query = graphql`
{
    imageSharp(fluid: {originalName: {eq: 
    "air-max-95.jpg"
     }}) {
        id
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
}
`