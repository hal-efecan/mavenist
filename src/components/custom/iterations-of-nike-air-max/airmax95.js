import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Airmax95 = () => {

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