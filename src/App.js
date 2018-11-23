import React, { Component } from 'react';
import './App.css';
import Products from './features/products'
import Cart from './features/cart';
import CartView from './features/cartview';

import uuidv1 from 'uuid/v1';

const PLACE_HOLDER_IMAGE_URL = "images/ph-tech.jpg";
class App extends Component {
  constructor() {
    super();
    this.onAddToCart = this.onAddToCart.bind(this);
    this.onRemoveCartItem = this.onRemoveCartItem.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.filterProductsByTag = this.filterProductsByTag.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  state = {
    cart: [
      {
        product: {
          productId: 1,
          cartId: uuidv1()
        }
      },
      {
        product: {
          productId: 2,
          cartId: uuidv1()
        }
      }
    ],
    filterProducts: null,
    selectedTag: null,
    products: [
      {
        id: 1,
        title: "Product 1",
        price: 40,
        description:
          "Yet another product 1. Yet another product 1. Yet another product 1. Yet another product 1. ",
        featured_image_url: PLACE_HOLDER_IMAGE_URL,
        qoh: 1,
        rating: 0,
        tags: ["electronics", "technical"]
      },
      {
        id: 2,
        title: "Product 2",
        price: 40,
        description:
          "Yet another product 2. Yet another product 2. Yet another product 2. Yet another producroduct 2. ",
        featured_image_url: PLACE_HOLDER_IMAGE_URL,
        qoh: 3,
        rating: 2,
        tags: ["electronics", "technical"]
      },
      {
        id: 3,
        title: "Product 2",
        price: 140,
        description: "Yet another product 2",
        featured_image_url: PLACE_HOLDER_IMAGE_URL,
        qoh: 3,
        rating: 3,
        tags: ["electronics", "photo"]
      },
      {
        id: 4,
        title: "Product 2",
        price: 50,
        description: "Yet another product 2",
        featured_image_url: PLACE_HOLDER_IMAGE_URL,
        qoh: 3,
        rating: 4,
        tags: ["electronics", "image"]
      },
      {
        id: 5,
        title: "Product 2",
        price: 100,
        description: "Yet another product 2",
        featured_image_url: PLACE_HOLDER_IMAGE_URL,
        qoh: 3,
        rating: 5,
        tags: ["electronics", "picture"]
      },
      {
        id: 6,
        title: "Product 2",
        price: 200,
        description: "Yet another product 2",
        featured_image_url: PLACE_HOLDER_IMAGE_URL,
        qoh: 3,
        rating: 1,
        tags: ["electronics", "cat"]
      },
      {
        id: 7,
        title: "Product 2",
        price: 10,
        description: "Yet another product 2",
        featured_image_url: PLACE_HOLDER_IMAGE_URL,
        qoh: 3,
        rating: 3,
        tags: ["electronics", "technical"]
      },
      {
        id: 8,
        title: "Product 2",
        price: 50,
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
        qoh: 3,
        rating: 4,
        tags: ["electronics", "technical"]
      }
    ]
  };

  // Fetch product by id
  getProductById(id) {
    console.log(`finding product by id ${id}`);
    let products = this.state.products;
    let product = products.find(p => {
      return p.id === id;
    });
    return product;
  }

  getAllCartsProduct() {
    let cartProducts = this.state.cart.map(c => {
      return {
        product: this.getProductById(c.product.productId),
        cartId: c.product.cartId
      };
    });
    return cartProducts;
  }

  onRemoveCartItem(cartId) {
    let cart = this.state.cart.filter(c => {
      return c.product.cartId !== cartId;
    });

    this.setState({
      cart
    });
  }

  onAddToCart(productId) {
    let newCartItem = {
      product: {
        productId: productId,
        cartId: uuidv1()
      }
    };

    this.setState({
      cart: [...this.state.cart, newCartItem]
    });
  }

  onChangeRating(productId, rating) {
    let products = this.state.products;
    products = products.map(p => {
      if (p.id === productId) {
        p.rating = rating;
      }
      return p;
    });

    this.setState({
      products
    });
  }

  filterProductsByTag(tag) {
    let products = this.state.products;
    products = products.filter(p => {
      return p.tags.indexOf(tag) != -1;
    });

    this.setState({
      filterProducts: products,
      selectedTag: tag
    });
  }

  goBack() {
    this.setState({
      filterProducts: null,
      selectedTag: null
    });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <span className="logo-title">Ecommerce</span>

          <div className="cart-wrapper">
            <Cart items={this.state.cart} />
            <CartView
              onRemoveCartItem={this.onRemoveCartItem}
              items={this.getAllCartsProduct()}
            />
          </div>
        </header>
        <div className="container flex-wrapper">
          <h1 className="product-title">Products {this.state.selectedTag && <span className="tagname">- {this.state.selectedTag}</span>}</h1>
          {this.state.selectedTag && <a className="back" href="#" onClick={this.goBack}>
            &#8656; back
               </a>}
        </div>
        <Products
          products={this.state.filterProducts ? this.state.filterProducts : this.state.products}
          onAddToCart={this.onAddToCart}
          onChangeRating={this.onChangeRating}
          filterProductsByTag={this.filterProductsByTag}
          goBack={this.goBack}
        />

        <div className="clearfix" />
        <footer>
          <h3>Algorisys Technologies Private Limited</h3>
        </footer>
      </div>
    );
  }
}

export default App;
