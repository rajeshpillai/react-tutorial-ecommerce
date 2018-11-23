import './products';
import React, { Component } from 'react';
import withModal from '../components/hoc/with-modal';
import Rating from '../components/rating';
import Image from '../components/image';
import ErrorBoundary from '../components/error-boundary';

class Product extends Component {

    filterProductsByTag = (tag) => {
        this.props.filterProductsByTag(tag);
    }

    render() {
        let product = this.props.product;
        const tagsView = product.tags.map((tag, i) => {
            return <React.Fragment key={tag} >
                <a className="tag" href="/" onClick={() => {
                    this.filterProductsByTag(tag);
                }} >
                    {tag}
                </a>
            </React.Fragment>;
        })

        let productView =
            <div className="product-item">
                <h3 className="product-title">{product.title}</h3>
                <ErrorBoundary>
                    <Image url={product.featured_image_url} />
                </ErrorBoundary>

                <div className="product-desc">{product.description}</div>
                <div className="text-center">
                    <Rating rating={product.rating} onChangeRating={this.props.onChangeRating} />
                </div>
                <div className="text-center">
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