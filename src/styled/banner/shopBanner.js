import styled from 'styled-components'

export const Base = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border: 7px solid #3F3F3F;
    width: 250px;
    height: 100px;

    @media (min-width: 768px) {
        width: 700px;
    }
`

export const Blurb = styled.h1`
    font-size: 2.25rem;
    letter-spacing: 0.1rem;
    color: green;
    width: 250px;
    text-align: center;
    margin: 0;
    font-family: 'Damion', cursive;
    padding: 0;
    color: #3F3F3F;

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`