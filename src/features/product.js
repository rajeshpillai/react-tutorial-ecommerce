import './products';
import React, { Component } from 'react';
import withModal from '../components/hoc/with-modal';
import Rating from '../components/rating';

class Product extends Component {

    render() {
        let product = this.props.product;
        let productView = (
            <div className="product-item">
                <h3 className="product-title">{product.title}</h3>
                <img src={product.featured_image_url} alt="featured product"></img>
                <div className="product-desc">{product.description}</div>
                <div>
                    <Rating rating={product.rating} onChangeRating={this.props.onChangeRating} />
                </div>
                <button onClick={(e) => { this.props.onAddToCart(product.id) }}
                    className="btn-add-to-cart">Add to Cart</button>
            </div>
        );

        return <React.Fragment>{productView}</React.Fragment>;
    }
}

export default withModal(Product);