import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Aviator = () => {

    const data = useStaticQuery(query)
    const fluid = data.imageSharp.fluid

    return (
            
            <Img fluid={fluid} />
    )
}

export default Aviator

const query = graphql`
{
    imageSharp(fluid: {originalName: {eq: 
    "aviators.jpg"
     }}) {
        id
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
}
`