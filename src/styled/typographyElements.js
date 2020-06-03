import styled from 'styled-components'

export const Title = styled.h1`
    padding: 0;
    margin: 0 15px 20px 15px;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.025rem;
    text-transform: uppercase;
    // font-style: italic;
    font-family: 'Oswald', sans-serif;

    @media (min-width: 375px) {
    }
    @media (min-width: 768px) {
        font-size: 4rem;
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1366px) {
    }
`
export const ByLine = styled.p`
    font-family: 'Work Sans', sans-serif;
    color: rgb(30, 30, 30);
    margin: 15px auto 5px auto;
    font-size: 1rem;
    max-width: 320px;

    a {
        font-family: 'Work Sans', sans-serif;
        color: black;
        margin: 15px auto 5px auto;
        font-size: 1rem;
        max-width: 320px;
    
        @media (min-width: 768px) {
            margin: 25px auto 5px auto;
            max-width: 632px;
        }
    
        @media (min-width: 1024px) {
            max-width: 680px;
        }
    }

    @media (min-width: 768px) {
        margin: 25px auto 5px auto;
        max-width: 632px;
    }

    @media (min-width: 1024px) {
        max-width: 680px;
    }
`
export const ListItem = styled.li`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.9rem;
    font-family: 'Lato', sans-serif;
    margin-bottom: 10px;
`