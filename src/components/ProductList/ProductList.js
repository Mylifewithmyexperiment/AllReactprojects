import React, { Component } from 'react';
import './ProductList.css';
import ProductListItem from '../ProductListItem/ProductListItem.js';
import PropTypes from 'prop-types';

class ProductList extends Component {
  
  componentDidMount() {
    this.props.actions.getProducts();
  }

  render() {
    if(this.props.productItems.productItems.length) {
      var productItems = this.props.productItems.productItems[0].map(item => { 
        return (
          <ProductListItem 
            { ...this.props }
            product = {item}
            key = {item.id}
          />
        );
      });

      return(
        <div className="products-container">
          { productItems }
        </div>
      );
    }
    else {
      return(<div>Loading.....</div>);
    }
  }
}

ProductList.propTypes = {
  productItems: PropTypes.object,
  actions: PropTypes.object
};

export default ProductList;
