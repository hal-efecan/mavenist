import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Moscot = () => {

    const data = useStaticQuery(query)
    const fluid = data.imageSharp.fluid

    return (
            
            <Img fluid={fluid} />
    )
}

export default Moscot

const query = graphql`
{
    imageSharp(fluid: {originalName: {eq: 
    "moscot.jpg"
     }}) {
        id
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
}
`