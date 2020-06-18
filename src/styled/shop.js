import styled from 'styled-components'

export const Btn = styled.button`
    border: none;
    background-color: #f1f1f1dc;
    bax-shadow: none;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    textDecoration: none;
    padding: 0;
    font-size: 0.85rem;
    margin: 0 0 0 0;
    min-width: 65px;
    // min-height: 35px;

    @media (min-width: 768px) {
        min-width: 80px;
        font-size: 0.9rem;
    }

    &:focus {
        border-bottom: 2px solid orangered;
        outline: none;
    }
`

export const ProductsNav = styled.div`
    text-align: center;
    margin: 105px auto 0 auto;
    position: sticky;
    top: 0px;
    background-color: #f1f1f1dc;
    Z-Index: 99;
    justify-content: center;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    @media (min-width: 375px) {
        margin: 105px auto 0 auto;
    }
    @media (min-width: 768px) {
        margin: 115px auto 0 auto;
        justify-content: center;
    }
    @media (min-width: 1024px) {
        margin: 118px auto 0 auto;
    }
    @media (min-width: 1366px) {
        margin: 130px auto 0 auto;
    }
`

export const PageWrapper = styled.div`
    margin: 130px auto 0 auto;

    @media (min-width: 375px) {
        margin: 145px auto 0 auto;
    }
    @media (min-width: 768px) {
        margin: 160px auto 0 auto;
    }
    @media (min-width: 1024px) {
        margin: 150px auto 0 auto;
    }
    @media (min-width: 1366px) {
        margin: 165px auto 0px auto;
    }
`