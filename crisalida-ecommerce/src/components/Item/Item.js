import React from 'react';
import {Card, Button } from 'react-bootstrap';
import { BsCart3 } from "react-icons/bs";
import CustomButton from '../../components/CustomButton/CustomButton';

const Item = ({games}) =>{
    return(
        <div>
             <Card className="cards-bs" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={games.picture} />
                <Card.Body>
                    <Card.Title>{games.title}</Card.Title>
                        <Card.Text>
                          {games.description}  
                         </Card.Text>
                <CustomButton className="custom-buttonn"
                    textButton={"-"} handleClick={onDecrement} disabled={counter ===1}
                      />
                <span>{counter}</span>
                 <CustomButton  className="custom-buttonn"
                   textButton={"+"}
                      handleClick={onIncrement}
                      disabled={counter === stock}
                      stock={displayMessage}
                     >  </CustomButton> <br />
                 <Button className='cart-button'
                     
                      handleClick={onAdd}
                       disabled={counter > stock}
                          > <BsCart3 className="cart-icon2"/></Button>
                 </Card.Body>
                    </Card>
        </div>
    )
}

export default Item