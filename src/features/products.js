import React, { Component } from 'react';
import Product from './product';
import './product.css'

export default class Products extends Component {
    render() {
        let products = this.props.products;
        let productView = products.map((product) => {
            return (
                <Product onAddToCart={this.props.onAddToCart} key={product.id} product={product} />
            )
        })
        return (
            <ul className="product-list">
                {productView}
            </ul>
        )
    }
}