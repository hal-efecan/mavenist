import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Persol = () => {

    const data = useStaticQuery(query)
    const fluid = data.imageSharp.fluid

    return (
            
            <Img fluid={fluid} />
    )
}

export default Persol

const query = graphql`
{
    imageSharp(fluid: {originalName: {eq: 
    "persol.jpg"
     }}) {
        id
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
}
`