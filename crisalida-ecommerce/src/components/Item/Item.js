import React from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';

export const Item = ({id, name, img, precio, category}) => {

    return (
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
              {category}
          </Card.Text>
          <Link to={`/detail/${id}`} className="btn btn-primary">Seleccionar </Link>
        </Card.Body>
      </Card>
    )
}
