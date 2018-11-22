import './products';
import React, { Component } from 'react';


export default class Product extends Component {
    render() {
        let product = this.props.product;
        return (
            <div className="product-item">
                <h3 className="product-title">{product.title}</h3>

                <img src={product.featured_image_url} alt="featured product"></img>
                <div className="product-desc">{product.description}</div>
                <div className="cta">Add to Cart</div>
            </div>
        )
    }
}