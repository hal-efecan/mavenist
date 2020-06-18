import styled from 'styled-components'
import img from '../../../content/assets/newbanner.jpg'
import imgSml from '../../../content/assets/smallbanner.jpg'

export const Base = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // border: 3px solid black;
    // background-color: #3B3B3B;
    background-image: url(${imgSml});
    position: relative;
    margin: 0 auto;
    width: 300px;
    height: 125px;
    
    @media (min-width: 768px) {
        background-image: url(${img});
        width: 750px;
    }
`

export const Blurb = styled.h1`
    font-size: 2.25rem;
    color: green;
    // width: 250px;
    position: absolute;
    margin: 0;
    font-family: 'Damion', cursive;
    padding: 0;
    color: #323232;
    left: 20px;
    bottom: 20px;
    font-weight: 400;
    
    @media (min-width: 768px) {
        color: #4E4E4E;
        left: 110px;
        bottom: 10px;
        font-size: 3.2rem;
        font-weight: 400;
    }
`