import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/contextCart'
import { ItemCount } from '../ItemCount/ItemCount'
import {Card} from 'react-bootstrap';

export const ItemDetail = ({id, name, img, precio, category, stock}) => {

    const {addCarrito, isInCart} = useContext(CartContext)
    

    const navigate = useNavigate()
    
    const [cantidad, setCantidad] = useState(0)
    
    const getBack = () => {
        navigate(-1)
    }

    const BackInicio = () => {
        navigate('/')
    }

    const addCrisalida = () => {
        if (cantidad > 0) {
            addCarrito({
                id,
                name,
                precio,
                img,
                cantidad,
                category,
                stock

            })
        }   
    }

    return (
        <div>
          <Card   key={id} className="my- 3 py-5 sm-col-6" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Tipo: {category}
          </Card.Text>
          <Card.Text>
              Precio: ${precio}
          </Card.Text>
          <Card.Text>
              Cantidad: {stock}
          </Card.Text>
        </Card.Body>
      </Card>

            {
                !isInCart(id)
                    ?   <ItemCount 
                            max={stock} 
                            cantidad={cantidad} 
                            setCantidad={setCantidad}
                            onAdd={addCrisalida}
                        />
                    :   <Link to="/cart" className="btn btn-success my-3">Terminar mi compra</Link>
            }
            <br/>
            <button className="btn btn-primary" onClick={getBack}>Volver</button>
            <button className="btn btn-outline-primary mx-5" onClick={BackInicio}>Volver al inicio</button>
        </div>
    )
}
