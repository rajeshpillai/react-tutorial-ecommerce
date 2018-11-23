import React, { Component } from 'react';
import Product from './product';
import './product.css'
import withModal from '../components/hoc/with-modal';

export default class Products extends Component {
    goBack=()=>{
        this.props.goBack();
    }
    render() {
        
        let products = this.props.products;
        let productView = products.map((product) => {
            return (
                <Product onAddToCart={this.props.onAddToCart} onChangeRating={(val)=>{this.props.onChangeRating(product.id,val)}} key={product.id} product={product} 
                 popupClass="p-image" filterProductsByTag={this.props.filterProductsByTag}/>
            )
        })
        return (
            <ul className="product-list">
            {/* <div><a href="#" onClick={this.goBack}>back</a></div> */}
                {productView}
            </ul>
        )
    }
}