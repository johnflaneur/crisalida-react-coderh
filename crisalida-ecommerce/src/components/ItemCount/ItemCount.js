import React from 'react';

export const ItemCount = ( {max, setCantidad, cantidad, onAdd} ) => {

    const cartRest = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }

    const cartSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div className="my-3">
            <button className={cantidad === 0 ? "btn btn-danger" : "btn btn-primary"}
                disabled={cantidad === 0}
                onClick={cartRest}>
                -
            </button>
            <span className="mx-2">{cantidad}</span>
            <button 
                className={cantidad === max ? "btn btn-danger" : "btn btn-primary"}
                disabled={cantidad === max}
                onClick={cartSumar}
            >
                +
            </button>
            <br/>
            <button className="btn btn-success my-2" onClick={onAdd} disabled={cantidad===0}>
                Agregar al carrito
            </button>
        </div>
    )
}
