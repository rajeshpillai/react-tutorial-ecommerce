import React, { Component } from 'react';
import './App.css';
import Products from './components/products'
import Cart from './components/cart';
class App extends Component {
  state = {
    cart: [
      {
        product: {
          productId: 1,
          count: 1,
        },
      },
      {
        product: {
          productId: 2,
          count: 2,
        },
      }
    ],
    products: [
      {
        id: 1,
        title: "Product 1",
        description: "Yet another product 1",
        featured_image_url: "https://placekitten.com/200/300",
        qoh: 1,
      },
      {
        id: 2,
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
        qoh: 3,
      },
      {
        id: 3,
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
        qoh: 3,
      },
      {
        id: 4,
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
        qoh: 3,
      },
      {
        id: 5,
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
        qoh: 3,
      },
      {
        id: 6,
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
        qoh: 3,
      },
      {
        id: 7,
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
        qoh: 3,
      },
      {
        id: 8,
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
        qoh: 3,
      }

    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Ecommerce</h3>
          <span><Cart items={this.state.cart} /></span>
        </header>
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
