import React, { useState } from 'react'
import { ShopContext } from './shopContext'

const ShopProvider = (props) => {

  const [ sneakers, setSneakers ] = useState(true)
    const [ sandals, setSandals ] = useState(false)
    const [ bags, setBags ] = useState(false)
    const [ jeans, setJeans ] = useState(false)
    const [ sunglasses, setSunglasses ] = useState(false)

    function displaySneakers() {
        setSneakers(true)
        setSandals(false)
        setBags(false)
        setJeans(false)
        setSunglasses(false)
      }
  
      function displaySandals() {
        setSneakers(false)
        setSandals(true)
        setBags(false)
        setJeans(false)
        setSunglasses(false)
      }
  
      function displayBags() {
        setSneakers(false)
        setSandals(false)
        setBags(true)
        setJeans(false)
        setSunglasses(false)
      }
  
      function displayJeans() {
        setSneakers(false)
        setSandals(false)
        setBags(false)
        setJeans(true)
        setSunglasses(false)
      }

      function displaySunglasses() {
        setSneakers(false)
        setSandals(false)
        setBags(false)
        setJeans(false)
        setSunglasses(true)
      }

    return (
        <ShopContext.Provider 
        value={{ 
            sandals, 
            sneakers, 
            bags, 
            jeans,
            sunglasses,
            displaySandals, 
            displaySneakers, 
            displayBags, 
            displayJeans,
            displaySunglasses 
            }}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopProvider
