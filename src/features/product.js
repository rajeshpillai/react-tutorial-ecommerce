import './products';
import React, { Component } from 'react';
import Modal from '../components/modal';

export default class Product extends Component {
    state = {
        show: false
    }

    showModal = () => {
        this.setState({
            show: !this.state.show
        });
    }

    showProduct = (product, modal) => {
        return (
            <div className="product-item" onClick={modal ? this.showModal : undefined}>
                <h3 className="product-title">{product.title}</h3>

                <img src={product.featured_image_url} alt="featured product"></img>
                <div className="product-desc">{product.description}</div>
                <button onClick={(e) => { this.props.onAddToCart(product.id) }} className="btn-add-to-cart">Add to Cart</button>
            </div>
        );
    }
    render() {
        let product = this.props.product;
        let productView = (
            <div className="product-item" onClick={this.showModal}>
                <h3 className="product-title">{product.title}</h3>

                <img src={product.featured_image_url} alt="featured product"></img>
                <div className="product-desc">{product.description}</div>
                <button onClick={(e) => { this.props.onAddToCart(product.id) }} className="btn-add-to-cart">Add to Cart</button>
            </div>
        );
        return (
            <div >
                {this.showProduct(product, true)}
                {this.state.show && <Modal
                    onClose={this.showModal}
                    show={this.state.show}>
                    {this.showProduct(product, false)}
                </Modal>
                }
            </div>
        )
    }
}