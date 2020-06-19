import React, { useContext } from 'react'
import { Btn, ProductsNav, PageWrapper } from '../../styled/shop'
import navStyles from '../../styles/nav.module.scss'

import { ShopContext } from '../../context/shopContext'

const ShopNav = ({ isVisible }) => {
    
    const shop_context = useContext(ShopContext)

    return (
        <ul className={ isVisible ? navStyles.another : navStyles.hidden }>
            <Btn onClick={() => shop_context.displaySandals()}>Sandals</Btn>
            <Btn onClick={() => shop_context.displaySneakers()}>Sneakers</Btn>
            <Btn onClick={() => shop_context.displayBags()}>Bags</Btn>
            <Btn onClick={() => shop_context.displaySunglasses()}>Sunglasses</Btn>
            <Btn onClick={() => shop_context.displayJeans()}>Jeans</Btn>
        </ul>
    )
}

export default ShopNav