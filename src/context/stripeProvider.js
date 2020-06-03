// import React, { useContext } from 'react'
// import { loadStripe } from '@stripe/stripe-js'
// import { CartContext } from './cartContext'
// import { StripeContext } from './stripeContext'

// const StripeProvider = (props) => {

//     const context = useContext(CartContext)
//     let stripePromise = loadStripe("pk_test_cGTWgRkx1E3zKqVlY5l38P3I000RiSzqiz")

//     const redirectToCheckout = async (event) => {
//         event.preventDefault()
//         const stripe = await stripePromise
//         const { error } = await stripe.redirectToCheckout({
//           items: context.cart,
//           successUrl: 'http://localhost:8000/success',
//           cancelUrl: 'http://localhost:8000/cancelled',
//         })
        
//         if (error) {
//           console.warn("Error:", error)
//         }
//       }

//     return (
//         <StripeContext.Provider value={{ redirectToCheckout }}>
//             {props.children}
//         </StripeContext.Provider>
//     )
// }

// export default StripeProvider
