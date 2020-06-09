import styled from 'styled-components'

export const PageContainer = styled.main`
    margin: 130px auto 0 auto;
    width:95%;

    @media (min-width: 768px) {
        margin: 145px auto 0 auto;
    }
    @media (min-width: 1024px) {
        margin: 150px auto 0 auto;
    }
`

export const ParentContainer = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 5px auto 10px auto;
    overflow-y: hidden;

    @media (min-width: 768px) {
        margin-bottom: 0;
        flex-direction: row;
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1366px) {
    }
    `

export const ChildContainer = styled.section`
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
export const DescriptionContainer = styled.section`
    padding: 10px;

    @media (max-width: 375px) {
    }
    @media (max-width: 768px) {
        padding: 5px;
    }
`

export const SectionTitle = styled.span`
    font-family: Georgia, 'Times New Roman', Times, serif
    font-size: 0.8rem;
    color: rgb(219, 51, 52);

    @media (min-width: 768px) {
        font-size: 0.9rem;
        line-height: 0rem;
    }
    @media (min-width: 1024px) {
        font-size: 1rem;
    }
`

export const ArticleTitle = styled.span`
    padding: 0;
    margin: 0;
    font-size: 1rem;
    margin-top: 10px;
    text-transform: capitalize;
    text-align: center;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: black;

    @media (min-width: 768px) {
        font-size: 1rem;
        line-height: 0rem;
    }

    @media (min-width: 1024px) {
        font-size: 1rem;
        line-height: 0rem;
    }
    
    @media (min-width: 1366px) {
        font-size: 1.07rem;
        line-height: 1.3rem;
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