import React, { useEffect, useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import arrowLeft from '../../../icons/arrow-left.svg'
import arrowRight from '../../../icons/arrow-right.svg'

import sliderStyles from '../../../styles/slider.module.scss'

const SliderAirMax95 = () => {
  
  let list = useRef(null)
  let buttons = useRef(null)

    const [ images, setImages ] = useState({ 
        image0: true,
        image1: false,
        image2: false
    })
    
    const data = useStaticQuery(graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "sneakers/am95"}, ext: {eq: ".jpg"}}, sort: {fields: name}) {
          edges {
            node {
              id
              childImageSharp {
                fluid (maxWidth: 600, quality: 80){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `)

    function prev() {
      if(list.children[0].classList.contains(`${sliderStyles.active}`)) {
        list.classList.remove(`${sliderStyles.move1400Right}`)
      } else if(list.children[1].classList.contains(`${sliderStyles.active}`)) {
        setImages({
          image0: true,
          image1: false,
          image2: false
        })
        list.classList.remove(`${sliderStyles.move700Right}`)
        list.classList.add(`${sliderStyles.move1400Right}`)
      } else {
        setImages({
          image0: false,
          image1: true,
          image2: false
        })
        list.classList.remove(`${sliderStyles.move1400Left}`)
        list.classList.add(`${sliderStyles.move700Right}`)
      }
    }

    function next() {
      if(list.children[0].classList.contains(`${sliderStyles.active}`)) {
        list.classList.remove(`${sliderStyles.move1400Right}`)
        list.classList.add(`${sliderStyles.move700Left}`)
        setImages({
          image0: false,
          image1: true,
          image2: false
        })
      } else if(list.children[1].classList.contains(`${sliderStyles.active}`)) {
        list.classList.remove(`${sliderStyles.move700Left}`)
        list.classList.add(`${sliderStyles.move1400Left}`)
        setImages({
          image0: false,
          image1: false,
          image2: true
        })
      }
    }

    useEffect(() => {
      if(list.children[0].classList.contains(`${sliderStyles.active}`)) {
          buttons.children[2].classList.remove(`${sliderStyles.btn_active}`)
          buttons.children[1].classList.remove(`${sliderStyles.btn_active}`)
          buttons.children[0].classList.add(`${sliderStyles.btn_active}`)
      } else if(list.children[1].classList.contains(`${sliderStyles.active}`)) {
          buttons.children[0].classList.remove(`${sliderStyles.btn_active}`)
          buttons.children[2].classList.remove(`${sliderStyles.btn_active}`)
          buttons.children[1].classList.add(`${sliderStyles.btn_active}`)
      } else if (list.children[2].classList.contains(`${sliderStyles.active}`)) {
          buttons.children[0].classList.remove(`${sliderStyles.btn_active}`)
          buttons.children[1].classList.remove(`${sliderStyles.btn_active}`)
          buttons.children[2].classList.add(`${sliderStyles.btn_active}`)
      }
    }, [images])

    const sneakersArr = data.allFile.edges

    return (

      <div className={sliderStyles.image_slider_outer}>

        <div onClick={prev} className={sliderStyles.btn_left}>
          <img src={arrowLeft} alt="arrow left" width={`15px`} />
        </div>

        <ul ref={el => (list = el)} className={sliderStyles.image_slider_inner}>

          <li className={!images.image0 ? `` : `${sliderStyles.active}`}>
            <Img fluid={sneakersArr[0].node.childImageSharp.fluid} />
          </li>
          <li className={!images.image1 ? `` : `${sliderStyles.active}`}>
            <Img fluid={sneakersArr[1].node.childImageSharp.fluid} />
          </li>
          <li className={!images.image2 ? `` : `${sliderStyles.active}`}>
            <Img fluid={sneakersArr[2].node.childImageSharp.fluid} />
          </li>

        </ul>

        <div onClick={next} className={sliderStyles.btn_right}>
          <img src={arrowRight} alt="arrow right" width={`15px`} />
        </div>

        <div ref={el => (buttons = el)} className={sliderStyles.buttons_container}>
          <div className={sliderStyles.button1}></div>
          <div className={sliderStyles.button2}></div>
          <div className={sliderStyles.button3}></div>
        </div>

      </div>
    )
}

export default SliderAirMax95
