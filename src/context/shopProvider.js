import React, { useState } from 'react'
import { ShopContext } from './shopContext'

const ShopProvider = (props) => {

    const [ sandals, setSandals ] = useState(false)
    const [ sneakers, setSneakers ] = useState(true)
    const [ bags, setBags ] = useState(false)
    const [ jeans, setJeans ] = useState(false)

    function displaySneakers() {
        setSneakers(true)
        setSandals(false)
        setBags(false)
        setJeans(false)
      }
  
      function displaySandals() {
        setSneakers(false)
        setSandals(true)
        setBags(false)
        setJeans(false)
      }
  
      function displayBags() {
        setSneakers(false)
        setSandals(false)
        setBags(true)
        setJeans(false)
      }
  
      function displayJeans() {
        setSneakers(false)
        setSandals(false)
        setBags(false)
        setJeans(true)
      }

    return (
        <ShopContext.Provider 
        value={{ 
            sandals, 
            sneakers, 
            bags, 
            jeans, 
            displaySandals, 
            displaySneakers, 
            displayBags, 
            displayJeans }}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopProvider
