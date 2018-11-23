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
        return <React.Fragment>
            <div className="container flex-wrapper">
                <h1 className="product-title">Products - Technical</h1>
              <a className="back" href="#" onClick={this.goBack}>
                &#8656; back
              </a>
            </div>
            <ul className="product-list">{productView}</ul>
          </React.Fragment>;
    }
}