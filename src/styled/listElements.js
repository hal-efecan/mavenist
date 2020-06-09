import styled from 'styled-components'

export const ParentContainer = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 35px auto 0 auto;
    width: 285px;
    // background-color: white;
    // background-color: lightblue;

    @media (min-width: 375px) {
        width: 325px;
    }
    @media (min-width: 768px) {
        margin-top: 35px;
        width:675px;
    }
    @media (min-width: 1024px) {
        width: 800px;
    }
    @media (min-width: 1366px) {
        margin-top: 50px;
        width: 975px;
    }
`
export const ChildContainer = styled.section`
    margin: 0 auto 20px auto;
    display: flex;
    flex-direction: column;
    box-shadow: none;
    justify-content: center;

    @media (min-width: 375px) {
        flex-direction: column;
    }
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const ImgContainer = styled.div`
    width: 325px;

    @media (min-width: 768px) {
        min-width: 275px;
    }
    @media (min-width: 1024px) {
        min-width: 325px;
    }
    @media (min-width: 1366px) {
        min-width: 375px;
    }
`

export const DescriptionContainer = styled.section`
    margin: 0 auto;
    padding: 15px;
    height: 150px;
    overflow-y: hidden;

    @media (min-width: 768px) {
        height: inherit;
        padding: 15px;
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1366px) {
        padding: 40px;
    }
`

export const SectionTitle = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.025rem;
    font-size: 0.75rem;
    color: rgb(219, 51, 52);

    @media (min-width: 768px) {
        font-size: 0.75rem;
        line-height: 0rem;
    }
    @media (min-width: 1024px) {
        font-size: 0.8rem;
    }
`

export const ArticleTitle = styled.span`
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: capitalize;
    letter-spacing: 0.025rem;
    color: black;

    @media (min-width: 768px) {
        font-size: 1.2rem;
    }
    @media (min-width: 1024px) {
        font-size: 1.45rem;
    }
    @media (min-width: 1366px) {
        font-size: 1.55rem;
    }
    `
    export const Excerpt = styled.p`
    font-family: 'PT Sans', sans-serif;
    padding: 0;
    margin: 0 0 0 0;
    font-size: 0.85rem;
    text-align: start;
    color:#727272;

    &:hover {        
        text-decoration: underline;
    }
    
    @media (min-width: 768px) {
        font-size: 0.7rem;
    }
    @media (min-width: 1024px) {
        font-size: 0.9rem;
    }
`

export const HR = styled.hr`
    background-color: #e7e7e7;
    width: 90%;
    margin: 0 auto 20px auto;
`