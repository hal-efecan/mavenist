import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { formatPrice } from '../utils/utilityFn'
import { CartContext } from './cartContext'

const CartProvider = (props) => {
    
    const [ cart, setCart ] = useState([])
    const [ qty, setQty ] = useState(0)
    const [ val, setVal ] = useState(0)

    function remove(product) {

        if(cart.length === 1) navigate("/")
        
        let itemQty;

        setCart(cart.filter(item => {
            if(item.sku !== product.id) {
                return item
            }
            if(item.sku === product.id) {
                itemQty = item.quantity
            }
        }))

        setQty(qty - itemQty)
        setVal(val-(parseInt(formatPrice(product.price))*itemQty))
    }

    function add(product) {
        if(cart.length === 0) {

            setCart([...cart, {
                sku: product.id,
                quantity: 1,
            }])
            setQty(qty + 1)
            setVal(val+parseInt(formatPrice(product.price)))
        } else {

            let matched = cart.find(item => item.sku === product.id)
            let idxMatched = cart.indexOf(matched)

            if(idxMatched > -1) {

                let replaced = [{...cart[idxMatched], quantity: cart[idxMatched].quantity + 1}]
                let oth = cart.filter(item => item.sku !== product.id)
                
                let final = [ ...replaced, ...oth ]
                setCart(final)
                setQty(qty + 1)
                setVal(val + parseInt(formatPrice(product.price)))
            } else {

                setCart([...cart, {
                    sku: product.id,
                    quantity: 1,
                }])
                setQty(qty + 1)
            }
        }
    }

    function increase(product) {

        let matched = cart.find(item => item.sku === product.id)
        let idxMatched = cart.indexOf(matched)

        if(idxMatched > -1) {
            let replaced = [{...cart[idxMatched], quantity: cart[idxMatched].quantity + 1}]
            let oth = cart.filter(item => item.sku !== product.id)
            let final = [ ...replaced, ...oth ]

            setCart(final)
            setQty(qty + 1)
            setVal(val + parseInt(formatPrice(product.price)))
        }
    }

    function decrease(product) {

        if(cart.length === 0) window.location.href = "/"
        let matched = cart.find(item => {
            return item.sku === product.id
        })
        if(!matched) return
        const idxMatched = cart.indexOf(matched)
        const matchedQty = cart[idxMatched].quantity
        
        if(matchedQty === 1) {
            remove(product)
            setVal(val - parseInt(formatPrice(product.price)))
            return
        }

        if(idxMatched > -1) {
            let replaced = [{...cart[idxMatched], quantity: cart[idxMatched].quantity - 1}]
            let oth = cart.filter(item => item.sku !== product.id)
            let final = [ ...replaced, ...oth ]

            setCart(final)
            setQty(qty - 1)
            setVal(val - parseInt(formatPrice(product.price)))
        }
    }
    
    return (
        <CartContext.Provider value={{ cart: cart, add, qty, val, remove, increase, decrease }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider