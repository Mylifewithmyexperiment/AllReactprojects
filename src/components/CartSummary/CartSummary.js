import React, { Component } from 'react';
import './CartSummary.css';
import PropTypes from 'prop-types';

class CartSummary extends Component {
  
  render() {
    var total = this.props.cartItems.cartItems.reduce((a, b) => {
      return a + b.price;
    }, 0);

    var items = this.props.cartItems.cartItems.map(item => {
      return (
        <li key={item.id} className="cart-item list-group-item">
          <span className="cart-item__name">{item.name}</span>
          <span className="cart-item__price">{item.price} {item.currency}</span>
        </li>
      );
    });

    var emptyBlock = (
      <div className="alert alert-info">Cart is empty</div>
    );
    
    var itemsList = (
      <ul className="list-group list-group-flush">
        {items}
      </ul>
    );

    return (
      <div className="card-summary-container">
        <h5 className="card-summary">Cart summary</h5>
        {this.props.cartItems.cartItems.length ? itemsList : emptyBlock}
        <div className="cart__total list-group-item">
          <span className="cart__total__text">Total:</span>
          <span className="cart__total__amount">{total} EUR</span>
        </div>
      </div>
    );
  }
}

CartSummary.propTypes = {
  cartItems: PropTypes.object
};

export default CartSummary;
