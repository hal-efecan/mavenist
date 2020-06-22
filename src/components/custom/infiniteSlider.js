import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image'

import swiper from '../../styles/swiper.module.scss'
import { SwiperContainer } from '../../styled/swiperStyles'

const LoopModeInfinityLoop = () => {

    const [index, setIndex] = useState(1)
    const data = useStaticQuery(query)
    const imagesArr = data.allFile.edges
    console.log(imagesArr)

    function next() { if(index ===-3) {} else { setIndex(index-1)}}
    function prev() { if(index ===1){} else { setIndex(index+1)}}

  return (
    <>
      <SwiperContainer>
        <button style={{ margin: `50px 0 0 0`}} className={swiper.prev_btn} onClick={() => prev()}>Prev</button>
        <button style={{ margin: `50px 0 0 0`}} className={swiper.next_btn} onClick={() => next()}>Next</button> 

      <section className={swiper.inner_container} style={{ transform: `translateX(${index*(100/imagesArr.length)}%)` }}>

        {
          imagesArr.map(image => {
            
            const { id } = image.node
            const { fluid } = image.node.childImageSharp

            return (
              <div key={id} style={{ minWidth: `500px` }}>
                <Img key={id} fluid={fluid} />
              </div>
            )
          })
        }

      </section>

    </SwiperContainer>
  </>
  )
};

export default LoopModeInfinityLoop;

const query = graphql`
{
  allFile(filter: {relativeDirectory: {eq: "sneakers/airmax"}, ext: {eq: ".jpg"}}) {
    edges {
      node {
        id
        relativePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`