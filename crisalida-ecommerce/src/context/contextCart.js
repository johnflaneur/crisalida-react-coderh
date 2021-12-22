import React, { createContext, useState } from 'react'

export const CartContext = createContext()


export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState([])

   
    const removeCarrito = (id) => {
      setCarrito(carrito.filter(prod => prod.id !== id ) )
    }

    const addCarrito = (item) => {
        setCarrito( [...carrito, item] )
      }
    
    const cleanCarrito = () => {
      setCarrito([])
    }
  
    const totalBuy = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }
    const totalCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
      }
    const isInCart = (id) => {
      return carrito.some( prod => prod.id === id )
    }

    return (
        <CartContext.Provider value={{
            carrito,
            addCarrito,
            removeCarrito,
            cleanCarrito,
            totalCantidad,
            isInCart,
            totalBuy
        }}>
            {children}
        </CartContext.Provider>
    )
}