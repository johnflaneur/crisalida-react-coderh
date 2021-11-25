import { Component } from 'react';
import Counter from '../../components/Counter/Counter';
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay';
import {Card, Button } from 'react-bootstrap';
import { BsCart3 } from "react-icons/bs";
import '../../containers/cards-products/cards-products.css';

class CounterContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }

        this.decrement = this.decrement.bind(this);
        this.displayMessage = this.displayMessage.bind(this);
    }

    increment = () => {
        this.setState({ number: this.state.number + 1 })
    }
 
    reset = () => this.setState({ number: 0 })

    decrement() {
        this.setState({ number: this.state.number - 1 })
    }

    displayMessage() {
        return (
            <h5>No hay más stock disponible</h5>
        )
    }

    render() {
        return (
            <div>
                <Card className="cards-bs" style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Shampoo Sólido de Rosas</Card.Title>
                        <Card.Text>
                            
                         </Card.Text>
                
                <CounterDisplay number={this.state.number}>
                    {this.state.number > 4 ? this.displayMessage() : null}
                </CounterDisplay>
                <Counter onIncrement={this.increment} onDecrement={this.decrement} />
                <Button className='cart-button' variant="primary"> <BsCart3 className="cart-icon2"/></Button>
           
                     </Card.Body>
                    </Card>
                </div>
        )
    }
}

export default CounterContainer;