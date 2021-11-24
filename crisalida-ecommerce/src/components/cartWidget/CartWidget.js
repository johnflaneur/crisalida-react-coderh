import React, { Component } from 'react'
import { BsCart3 } from "react-icons/bs";
import '../../components/cartWidget/CartWidget.css';

export default class CartWidget extends Component {
    render() {
        return (
            <div>
              <BsCart3 className="cart-icon"/>
            </div>
        )
    }
}
