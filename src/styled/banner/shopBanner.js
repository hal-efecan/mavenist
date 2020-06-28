import styled from 'styled-components'

export const Base = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 8px solid #3D3D3D;
    background-color: white;
    margin: 0 auto;
    width: 300px;
    height: 100px;
    
    @media (min-width: 768px) {
        width: 700px;
    }
`

export const Blurb = styled.h1`
    font-size: 2.3rem;
    color: green;
    margin: 0;
    font-family: 'Damion', cursive;
    padding: 0;
    color: #323232;
    font-weight: 400;
    
    @media (min-width: 768px) {
        color: #222222;
        font-size: 3.8rem;
        font-weight: 400;
    }
`