import React from 'react';

class EmptyCartDetailComponent extends React.Component {

    render() {
        return (
            <ul className="navbar-nav">
            <li className="nav-item dropdown drop-cart d-none d-lg-block">
                      <a href="/cartDetail" className="nav-link dropdown-toggle" id="cart">
                          <i className="fa fa-shopping-cart"></i>
                          <span>0</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="cart">
                          <div className="row">
                              <div className="col-12">
                                  <div className="d-flex align-items-center m-3 btn-goto">
                                      <a href="/emptycart" className="btn btn-pink withoutRadiusBorder w-100">GO TO CART</a>
                                      <a href="#" className="btn btn-success withoutRadiusBorder w-100 d-none">CHECKOUT</a>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <h6 className="minicart-header">Your Shopping Basket [ <span>0</span> ]</h6>
                              </div>

                              </div>
                        </div>
                    </li>
        </ul>
        
           
        );
    }
}

export default EmptyCartDetailComponent;