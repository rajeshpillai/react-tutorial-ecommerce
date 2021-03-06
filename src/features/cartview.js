import React from 'react';

const CartView = function (props) {
    let cartItems = props.items;
    console.log("cartItems: ", cartItems);
    let cartTotal = 0;
    let cartItemView = cartItems.map((item) => {
        console.log(item);
        cartTotal += item.product.price;
        return <li key={item.cartId}>
            <span className="item-name">{item.product.title}</span>
            <span className="float-right">

           
            <span className="price">$ {item.product.price}</span>
            <span onClick={() => {
                props.onRemoveCartItem(item.cartId);
              }} className="remove-cart-item" role="img" aria-label="remove cart item">
              &#x2613;
            </span>
            </span>
            <hr className="clearfix" />
          </li>;
    });

    return (
        <div className="cart-view">
            <div className="arrow-down"></div>
            <ul className="cart-list">
                {cartItemView}
            </ul>
            <div className="cart-total">
                Cart Total :  <span className="price-total">${cartTotal}</span>
            </div>
            <div className="view-cart-link">
                <span>View Cart</span>
            </div>
        </div>
    );
}

export default CartView;