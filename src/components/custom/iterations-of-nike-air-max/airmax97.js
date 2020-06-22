import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Airmax97 = () => {

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

export default Airmax97

const query = graphql`
{
    imageSharp(fluid: {originalName: {eq: 
    "nike-air-max-97.jpg"
     }}) {
        id
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
}
`