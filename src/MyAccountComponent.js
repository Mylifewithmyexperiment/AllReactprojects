import React from 'react'


class MyAccountComponent extends React.Component {

    constructor(userName) {
        super();
        this.state = {
            userName : "Hey George Davis"
        } ;
    }

    chageUserName = (loggedInUserName) =>{
        this.setState({userName : {loggedInUserName}});
    }

    render() {
        return(
            <ul className="navbar-nav">
                    {this.loggedInUserView()}
                    {this.myAccountView()}
            </ul>
        );
    }


    loggedInUserView(userName) {
        return (
            <li className="nav-item">
                <a className="nav-link" href="#"><img src="/images/user.png" alt="user" className="mr-2" />{this.state.userName}</a>
            </li>
        );
    }

    myAccountView() {
        return(
            <li className="nav-item dropdown drop-myaccount">
                <a className="nav-link dropdown-toggle" href="/myaccountdetailPage" id="myaccount">My Account</a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="myaccount">
                    <div className="row">
                        <div className="col-lg-3">
                            <h3>Information &amp; Contact</h3>
                            <ul>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Notification</a></li>
                            <li><a href="">Agreements and Licences</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3>Quotes</h3>
                            <ul>
                            <li><a href="">Orders awaiting my approval</a></li>
                            <li><a href="">Shopping lists</a></li>
                            <li><a href="">Blanket orders</a></li>
                            <li><a href="">Orders</a></li>
                            <li><a href="">Delivery notes</a></li>
                            <li><a href="">Invoices</a></li>
                            <li><a href="">Returns</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3">
                            <h3>Users &amp; Settings</h3>
                            <ul>
                                <li><a href="">Account</a></li>
                                <li><a href="">Users</a></li>
                                <li><a href="">Agreements and Licences</a></li>
                                <li><a href="">User presets</a></li>
                                <li><a href="">Options</a></li>
                                <li><a href="">Avatar</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3>Addresses &amp; Payment</h3>
                            <ul>
                                <li><a href="">Invoice addresses</a></li>
                                <li><a href="">Shipping addresses</a></li>
                                <li><a href="">Cost centres</a></li>
                                <li><a href="">Payment methods</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <hr />
                            <a href="" className="btn btn-pink withoutRadiusBorder pull-right">Log out</a>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default MyAccountComponent;