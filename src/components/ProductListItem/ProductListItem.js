import React, { Component } from 'react';
import './ProductListItem.css';
import PropTypes from 'prop-types';

class ProductListItem extends Component {
  
  addProductToCart = (data) => {
    this.props.actions.addItem(data);
  }
  removeProductFromCart = (id) => {
    this.props.actions.removeItem(id);
  }

  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.product.image} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title" data-testid="card-title">{this.props.product.name}</h5>
          <p className="card-text" data-testid="card-text">{this.props.product.price}</p>
        </div>
        <button data-testid="product-action-button" className={this.props.product.isAddedToCart ? "btn btn-danger" : "btn btn-primary"} onClick={this.props.product.isAddedToCart ? () => this.removeProductFromCart(this.props.product.id) : () => this.addProductToCart(this.props.product) }> {this.props.product.isAddedToCart ? "Remove" : "Add To Cart"} </button>
      </div>
    );
  }
}

ProductListItem.propTypes = {
  product: PropTypes.object,
  actions: PropTypes.object
};

export default ProductListItem;
