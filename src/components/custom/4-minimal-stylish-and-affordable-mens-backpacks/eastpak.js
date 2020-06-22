import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Eastpak = () => {
    const [ width, setWidth ] = useState(true)

    const data = useStaticQuery(query)
    const fluid = data.imageSharp.fluid

    useEffect(() => {
        if(window.screen.width === 375) {
            setWidth(true)
        } else {
            setWidth(false)
        }
    })

    return (
        <div>
            {
                width ? 
                    <div     
                    style={{ 
                        margin: `0 auto` 
                        }}>
                    
                        <Img fluid={fluid} />
                    </div>
                :

                <div     
                style={{ 
                    width: `600px`, 
                    margin: `0 auto` 
                    }}>
                
                    <Img fluid={fluid} />
                </div>
            }
        </div>
    )
}

export default Eastpak

const query = graphql`
{
    imageSharp(fluid: {originalName: {eq: 
    "eastpak1.jpg"
     }}) {
        id
        fluid (maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
        }
    }
}
`