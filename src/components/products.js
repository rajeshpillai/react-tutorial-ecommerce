import React, { Component } from 'react';
import Product from './product';
import './product.css'

export default class Products extends Component {
    render() {
        let products = this.props.products;
        let productView = products.map((product) => {
            return (
                <Product key={product.id} product={product} />
            )
        })
        return (
            <ul className="product-list">
                {productView}
            </ul>
        )
    }
}