import './products';
import React, { Component } from 'react';


export default class Cart extends Component {
    render() {
        let cart = this.props.items;
        console.log(cart);
        return (
            <span className="cart">
                <span className="cart-icon"> &#128722;</span>   {cart.length}
            </span>
        )
    }
}