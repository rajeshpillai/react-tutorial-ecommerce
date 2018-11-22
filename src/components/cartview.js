import React from 'react';

const CartView = function (props) {
    let cartItems = props.items;
    console.log("cartItems: ", cartItems);
    let cartItemView = cartItems.map((item) => {
        console.log(item);
        return (
            <li key={item.cartId}>
                <span>{item.product.title}</span>
            </li>
        )
    });

    return (
        <div className="cart-view">
            <div className="arrow-down"></div>
            <ul className="cart-list">
                {/* <li><span>Produt One</span> <span>152/-</span></li>
                <li><span>Produt Two</span> <span>152/-</span></li> */}
                {cartItemView}
            </ul>
            <div className="cart-total">
                Cart Total : <span className="float-right">152/-</span>
            </div>
        </div>
    );
}

export default CartView;