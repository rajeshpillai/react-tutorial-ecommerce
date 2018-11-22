import React, { Component } from 'react';
import './App.css';
import Products from './components/products'
class App extends Component {
  state = {
    products: [
      {
        id: +new Date(),
        title: "Product 1",
        description: "Yet another product 1",
        featured_image_url: "https://placekitten.com/200/300",
      },
      {
        id: +new Date(),
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
      },
      {
        id: +new Date(),
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
      },
      {
        id: +new Date(),
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
      },
      {
        id: +new Date(),
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
      },
      {
        id: +new Date(),
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
      },
      {
        id: +new Date(),
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
      },
      {
        id: +new Date(),
        title: "Product 2",
        description: "Yet another product 2",
        featured_image_url: "https://placebear.com/200/300",
      }

    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Ecommerce</h3>
        </header>
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
