import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="common-header-wrapper">
        <header className="common-header">
          <h1 data-testid="header-display">Shopping Cart</h1>
        </header>
      </div>
    );
  }
}

export default Header;
