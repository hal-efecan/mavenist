import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Airmax97 = () => {

    const [ width, setWidth ] = useState(null)

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