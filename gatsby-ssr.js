import React from 'react'
import SkuProvider from './src/context/skuProvider'
import CartProvider from'./src/context/cartProvider'
import StripeProvider from './src/context/stripeProvider'

export const wrapRootElement = ({ element }) => {
    return (
        <CartProvider>
            <SkuProvider>
                <StripeProvider>
                        {element}
                </StripeProvider>
            </SkuProvider>
        </CartProvider>
    )
}