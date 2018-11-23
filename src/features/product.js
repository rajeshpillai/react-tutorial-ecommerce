import './products';
import React, { Component } from 'react';
import withModal from '../components/hoc/with-modal';
import Rating from '../components/rating';
// import Productimage from './productimage';

class Product extends Component {
   
    filterProductsByTag=(tag)=>{
        this.props.filterProductsByTag(tag);
    }

    render() {
        let product = this.props.product;
        const tagsView =product.tags.map((tag,i)=>{
            return(
                <React.Fragment>
                    <a href="#" onClick={()=>{this.filterProductsByTag(tag)}}>
                        <span className="tag">{tag}</span>
                        {/* { i<product.tags.length-1 && <span className="tag">,</span>} */}
                    </a>
                </React.Fragment>
            )
        })

        let productView =
            <div className="product-item">
            <h3 className="product-title">{product.title}</h3>
            <img src={product.featured_image_url} className="p-image" alt="featured product" />
            <div className="product-desc">{product.description}</div>
            <div className="text-center">
              <Rating rating={product.rating} onChangeRating={this.props.onChangeRating} />
            </div>
            <div>
                {tagsView}
            </div>
            <button onClick={e => {
                this.props.onAddToCart(product.id);
              }} className="btn-add-to-cart">
              Add to Cart
            </button>
          </div>;

        return <React.Fragment>{productView}</React.Fragment>;
    }
}

export default withModal(Product);