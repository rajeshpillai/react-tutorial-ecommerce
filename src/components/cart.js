import './products';
import React, { Component } from 'react';


export default class Cart extends Component {
    render() {
        let cart = this.props.items;
        console.log(cart);
        let count = cart.reduce((acc, c) => {
            console.log(c);
            acc += c.product.count;
            return acc;
        }, 0);
        return (
            <span className="cart">
                <span className="cart-icon"> &#128722;</span>   {count}
            </span>
        )
    }
}