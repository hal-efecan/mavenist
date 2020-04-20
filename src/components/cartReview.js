import React, { useContext } from 'react'

import { SkuContext } from '../context/skuContext'
import { CartContext } from '../context/cartContext'
import { StripeContext } from '../context/stripeContext'

import { formatPrice, upperCase } from '../utils/utilityFn'

import cartReviewStyle from '../styles/cart_review.module.scss'

const CartReview = () => {

    const stripe_context = useContext(StripeContext)
    const sku_context = useContext(SkuContext)
    const cart_context = useContext(CartContext)

    let finalBasket = []

    if(sku_context && sku_context.skus && sku_context.skus.skus) {
        const skusArr = sku_context.skus.skus.edges
        const purchases = cart_context.cart
    
        skusArr.forEach(item => {  
            const { id, price, currency, image, attributes: { name } } = item.node
            purchases.forEach(ele => {
                if(item.node.id === ele.sku) {
                    return finalBasket.push({
                        id,
                        price,
                        currency,
                        image,
                        name,
                        quantity: ele.quantity
                    })
                }
            })
        })
    }

    return (
        <div className={cartReviewStyle.container}>
            <div className={cartReviewStyle.headline}>
                {
                    cart_context && cart_context.cart.length ?
                    <button 
                    className={cartReviewStyle.btn}
                    onClick={event => stripe_context.redirectToCheckout(event)}>
                        Proceed to checkout
                    </button> : <div></div>
                }
                <br/>
            </div>

            {
                finalBasket.map(item => {
                    const { id, price, currency, image, name, quantity } = item

                    return (
                        <div className={cartReviewStyle.cart_item} key={id}>
                            <img className={cartReviewStyle.image} src={image} width="200px" alt={name} />

                            <div className={cartReviewStyle.details_container}>
                                <h3 className={cartReviewStyle.header}>{name}</h3>

                                <span className={cartReviewStyle.sub}>{upperCase(currency)} {formatPrice(price)}</span><br/>
                                <span className={cartReviewStyle.sub}> Qty: {quantity}</span><br/>
                                <span className={cartReviewStyle.sub}> Value: GBP {quantity*formatPrice(price)}</span><br/>

                                <button 
                                className={cartReviewStyle.sml_btn} 
                                onClick={() => cart_context.increase(item)}>+</button>
                                <button 
                                className={cartReviewStyle.sml_btn} 
                                onClick={() => cart_context.remove(item)}>Remove</button>
                                <button 
                                className={cartReviewStyle.sml_btn} 
                                onClick={() => cart_context.decrease(item)}>-</button>
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartReview