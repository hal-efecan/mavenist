// import React, { useContext } from 'react'
// import { Link } from 'gatsby'

// import headerStyles from '../styles/header.module.scss'

// import { CartContext } from '../context/cartContext'

// import bag from '../icons/shopping.svg'
// import shoppingStyles from '../styles/shopping.module.scss';

// const Cart = () => {
//         const cart_context = useContext(CartContext)

//         return (
//                 <Link to="/review" className={headerStyles.link}>

//                         { 
//                         cart_context.qty !== 0 
//                         ?
//                         <div className={shoppingStyles.container}>
//                                 <div className={shoppingStyles.circle}>
//                                         { cart_context.qty }
//                                 </div>  
//                                 <img style={{ padding: "0", margin: "0"}} src={bag} width="30px" alt="Logo" />
//                         </div>
//                         :
//                         null
//                         }
//                 </Link>
//         )
// }

// export default Cart