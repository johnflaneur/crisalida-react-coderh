import React, { useContext } from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from '../../context/contextCart'
import {Card} from 'react-bootstrap';

export const CartItem = ({name, precio, img, stock, category, id}) => {

    const {removeCarrito} = useContext(CartContext)

    return (
        <div>
              <Card   key={id} className="my- 3 py-5 sm-col-6" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {category}
          </Card.Text>
          <Card.Text>
              Precio: ${precio}
          </Card.Text>
          <Card.Text>
             Máximo: {stock}
          </Card.Text>
        </Card.Body>
        <button 
                className="btn btn-danger"
                onClick={() => { removeCarrito(id) }}
            >
                <BsFillTrashFill/>
            </button>
      </Card>
            
        </div>
    )
}
