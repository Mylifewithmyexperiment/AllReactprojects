import React from 'react'

class FooterComponent extends React.Component {

    render() {
        return(
            <footer>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4">
                            <h5 className="footer_title">About</h5>
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Don't Sell My Data</a></li>
                                <li><a href="">Rakuten Terms &amp; Conditions</a></li>
                                <li><a href="">Marketplace Terms &amp; Conditions</a></li>
                            </ul>
                            </div>
                            <div className="col-lg-4">
                            <h5 className="footer_title">Customer service</h5>
                            <ul>
                                <li><a href="">Help Center</a></li>
                                <li><a href="">Return a Product</a></li>
                                <li><a href="">Worry-Free Guarantee</a></li>
                                <li><a href="">Email Subscriptions</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                            </div>
                            <div className="col-lg-4">
                            <h5 className="footer_title">Partner with us</h5>
                            <ul>
                                <li><a href="">Sell on Rakuten.com/shop</a></li>
                                <li><a href="">Advertising</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <ul className="social_list">
                            <li><a href=""><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a href=""><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href=""><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                            <li><a href=""><i className="fa fa-pinterest-p" aria-hidden="true" /></a></li>
                        </ul>
                        <p className="text-footer font-12 mb-2">Advertising Disclosure</p>
                        <p className="text-footer font-12">© 2020 Ebates Inc. A Rakuten Company</p>
                        <div className="dropdown drop_country">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/images/us_flag.jpeg" alt="us flag" /><span className="mr-auto">United States</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Action</button>
                            <button className="dropdown-item" type="button">Another action</button>
                            <button className="dropdown-item" type="button">Something else here</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </footer>

               

        );
    }
}

export default FooterComponent;
