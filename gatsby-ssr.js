// // custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"

import React from"react"

// import SkuProvider from './src/context/skuProvider'
import CartProvider from'./src/context/cartProvider'
import ShopProvider from './src/context/shopProvider'
// import StripeProvider from './src/context/stripeProvider'

export const wrapRootElement = ({element}) => {
    return (
            <ShopProvider>
                <CartProvider>
                    {/* <SkuProvider>
                        <StripeProvider> */}
                                {element}
                        {/* </StripeProvider>
                    </SkuProvider> */}
                </CartProvider>
            </ShopProvider>
)}