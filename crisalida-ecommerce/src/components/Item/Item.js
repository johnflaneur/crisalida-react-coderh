import React from 'react';
import {Card, Button, Container, Row } from 'react-bootstrap';
import { BsCart3 } from "react-icons/bs";
import CustomButton from '../../components/CustomButton/CustomButton';

const Item = ({games}) =>{
    return(
        <div>
            <Container>
                <Row>
             <Card className="cards-bs col-md-3">
            <Card.Img variant="top" src={games.picture} />
                <Card.Body>
                    <Card.Title>{games.title}</Card.Title>
                        <Card.Text>
                          {games.description}  
                         </Card.Text>
                {/* <CustomButton className="custom-buttonn"
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
                          > <BsCart3 className="cart-icon2"/></Button> */}
                      </Card.Body>
                    </Card>
                 </Row>
            </Container>
        </div>
    )
}

export default Item