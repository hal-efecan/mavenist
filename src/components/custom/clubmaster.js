import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Clubmaster = () => {

    const data = useStaticQuery(query)
    const fluid = data.imageSharp.fluid

    return (
            
            <Img fluid={fluid} />
    )
}

export default Clubmaster

const query = graphql`
{
    imageSharp(fluid: {originalName: {eq: 
    "clubmaster.jpg"
     }}) {
        id
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
}
`