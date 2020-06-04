import styled from 'styled-components'

export const SectionTitle = styled.span`
    font-family: 'Alice', serif;
    font-size: 1.12rem;
    color: rgb(219, 51, 52);
`

export const ArticleTitle = styled.span`
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.025rem;
    color: black;

    @media (min-width: 768px) {
        font-size: 0.95rem;
    }
    @media (min-width: 1024px) {
        font-size: 1.05rem;
    }
    @media (min-width: 1366px) {
        font-size: 1.1rem;
    }
    `
export const MainChildContainer = styled.section`
    box-sizing: border-box;
    width: 325px;
    padding: 0;
    margin: 0 auto 10px auto;
    display: flex;
    flex-direction: column;
    color: black;

    @media (min-width: 768px) {
        width: 235px;
        height: 285px;
    }
    @media (min-width: 1024px) {
        width: 300px;
        height: 350px;
    }
    @media (min-width: 1366px) {
        width: 375px;
        height: 400px;
    }
`

export const ImgContainer = styled.div`
    width: 325px;

    @media (min-width: 768px) {
        max-width: 235px;
    }
    @media (min-width: 1024px) {
        min-width: 300px;
    }
    @media (min-width: 1366px) {
        min-width: 375px;
    }
`
export const DescriptionContainerTop = styled.section`
    padding: 10px;

    @media (max-width: 375px) {
    }
    @media (max-width: 768px) {
        padding: 5px;
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


export const SubSectionParentContainer = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 35px auto 0 auto;
    width: 285px;

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


export const Divider = styled.hr`
    width: 90%;
    margin: 0 auto;
`

export const MainParentContainer = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 5px auto 10px auto;

    @media (min-width: 768px) {
        margin-bottom: 0;
        flex-direction: row;
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1366px) {
    }
`

export const SubSectionChildContainer = styled.section`
    margin: 0 auto 20px auto;
    display: flex;
    flex-direction: column;
    box-shadow: none;
    justify-content: center;
    // background-color: lightgreen;

    @media (min-width: 375px) {
        flex-direction: column;
    }
    @media (min-width: 768px) {
        flex-direction: row;
    }
`