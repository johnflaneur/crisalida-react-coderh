import React, {useState} from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import {Card, Button } from 'react-bootstrap';
import { BsCart3 } from "react-icons/bs";
import '../../containers/cards-products/cards-products.css';

export default function CounterContainer({initial,stock,onAdd}) {
  const [counter, setCounter] = useState(initial);
  const onIncrement = () => {
    if (counter < stock && counter >= 1) {
      setCounter(counter + 1);
    }
  };

  const onDecrement = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  const displayMessage = () =>{
    if (counter > stock){
      return(<h5>No hay más stock disponible</h5>)
    }
  }

        return (
            <div>
                <Card className="cards-bs" style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Shampoo Sólido de Rosas</Card.Title>
                        <Card.Text>
                            
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