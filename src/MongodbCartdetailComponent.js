import React from 'react';


class MongodbCartdetailComponent extends React.Component {

    render() {
        return (
        
           
            <ul className="navbar-nav">
            <li className="nav-item dropdown drop-cart d-none d-lg-block">
                <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span>1</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="cart">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center m-3 btn-goto">
                                <a href="/mongocartdetail" className="btn btn-pink withoutRadiusBorder w-100">GO TO CART</a>
                                <a href="javascript:void(0);" className="btn btn-success btn-checkout withoutRadiusBorder w-100">CHECKOUT</a>
                            </div>
                        </div>
                        <div className="col-12">
                            <h6 className="minicart-header">Your Shopping Basket [ <span>1</span> ]</h6>
                        </div>
                        <div className="col-12">
                            <div className="scroll-height">
                                <div className="card" stl-id="4241349">
                                    <div className="row no-gutters">
                                        <div className="cardimg">
                                            <img src="./images/mongodb.png" className="card-img" alt="MongoDB"/>
                                        </div>
                                        <div className="card-body flex-column">
                                            <h5 className="card-title w-100">MongoDB</h5>
                                            <div className="quantityGroup">
                                                <h6 className="gothamMedium mb-0">Qty :</h6>
                                                <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                <input className="quantityTxt quantity " name="quantity[]" type="text" value="1" maxlength="4"/>
                                                <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                            </div>
                                            <i className="fa fa-trash text-danger"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        );
    }
}

export default MongodbCartdetailComponent;