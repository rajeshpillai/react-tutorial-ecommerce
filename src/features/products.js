import React, { Component } from 'react';
import Product from './product';
import './product.css'
import withModal from '../components/hoc/with-modal';

export default class Products extends Component {   
    render() {
        
        let products = this.props.products;
        let productView = products.map((product) => {
            return (
                <Product key={product.title} onAddToCart={this.props.onAddToCart} onChangeRating={(val)=>{this.props.onChangeRating(product.id,val)}} key={product.id} product={product} 
                 popupClass="p-image" filterProductsByTag={this.props.filterProductsByTag}/>
            )
        })
        return <React.Fragment>           
            <ul className="product-list">{productView}</ul>
          </React.Fragment>;
    }
}