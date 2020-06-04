import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Wayfarer = () => {

    const data = useStaticQuery(query)
    const fluid = data.imageSharp.fluid

    return (
            
            <Img fluid={fluid} />
    )
}

export default Wayfarer

const query = graphql`
{
    imageSharp(fluid: {originalName: {eq: 
    "wayfarer.jpg"
     }}) {
        id
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
}
`