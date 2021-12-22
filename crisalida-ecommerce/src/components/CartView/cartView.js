import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/contextCart'
import { CartItem } from './cartItem'

export const CartView = () => {

    const {carrito, cleanCarrito, totalBuy} = useContext(CartContext)


    if (carrito.length === 0) {
        return <div className="container my-5">
                    <h2>No agregaste items al carrito aún</h2>
                    <hr/>
                    <Link to="/" className="btn btn-primary">Volver</Link>
                </div>
    }


    return (
        <div className="container my-5">
            <h2>Tu canasta Crisálida</h2>
            <hr/>
            <section>
                {
                    carrito.map((prod) => <CartItem key={prod.id} {...prod}/>)
                }
            </section>
            <hr/>
            <h3>Precio: ${totalBuy()}</h3>
            <div>
                <button className="btn btn-danger" onClick={cleanCarrito}>Vaciar</button>
                <Link to="/Checkout" className="btn btn-success mx-2">¡Llévalos a casa!</Link>
            </div>
        </div>
    )
}
