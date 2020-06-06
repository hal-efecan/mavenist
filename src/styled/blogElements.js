import styled from 'styled-components'

export const PostWrapper = styled.main`
    max-width: 320px;
    margin: 0 auto 0 auto;
    font-family: Arial, Helvetica, sans-serif;

    p {
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.9rem;
        margin-bottom: 25px;
        font-family: 'Lato', sans-serif;
        letter-spacing: 0.025rem;
    }

    span {
        margin-left: 25%;
        border-radius: 0px !important;
    }

    p > a {
        color: inherit;
        text-decoration: underline !important;
        text-decoration-color: orangered !important;
        box-shadow: none !important;
        transition: 125ms !important;
    }

    p > a:hover { 
        background-color: #ea520ca6 !important;
        text-decoration: none !important;
    }

    div > iframe {
        width: 85% !important;
        margin-left: 6.5% !important;
        border: 1px solid lightgrey;

        @media (min-width: 768px) {
            width:50% !important;
            margin-left: 25% !important;
        }
    }

    p > div {
        padding-bottom: 150% !important;

        @media (min-width: 768px) {
            padding-bottom: 85% !important;
        }
    }

    div {
        display: flex;
        justify-content: center;
        height: max-content;
        background-color: white;
    }

    blockquote {
        display: none;
    }

    h2 {
        text-decoration-line: underline;
        text-decoration-color: lime;
        margin: 40px auto 25px auto;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    @media (min-width: 768px) {
        margin: 25px auto 0 auto;
        max-width: 632px;
    }

    @media (min-width: 1024px) {
        max-width: 680px;
    }
`