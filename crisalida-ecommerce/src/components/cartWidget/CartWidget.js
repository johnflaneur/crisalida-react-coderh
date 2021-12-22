import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { CartContext } from '../../context/contextCart';
import '../../components/cartWidget/CartWidget.css';

export const CartWidget = () => {

    const {totalCantidad, cart} = useContext(CartContext)

        return (
            <Link to="/cart">  
            
             <BsCart3 className="cart-icon"/>
             <span>{totalCantidad()}</span>
             </Link>
            
           )
    
}
