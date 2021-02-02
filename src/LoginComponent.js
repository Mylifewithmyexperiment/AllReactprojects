import React from 'react';


class LoginComponent extends React.Component {

    render() {
        return (

            <section className="login">
            <div className="container">
                <div className="row">
                    <a className="navbar-brand" href="./index.html">
                        <img src="./images/logo.png" alt="logo"/>
                        <span>Enterprise Marketplace</span>
                    </a>
                    <div className="loginbox">
                        <form>
                            <div className="form-group">
                                <h3 className="text-center">LOGIN</h3>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group d-flex align-items-center justify-content-between">
                                <label className="form-check-label mb-0 pink">
                                    Remember me
                                    <input type="checkbox" className="form-check-input" value="Networking"/>
                                    <span className="checkmark"></span>
                                </label>
                                <a href="#" className="forgot">Forgot Password?</a>
                            </div>
                            <a href="index.html" type="submit" className="btn btn-pink withoutRadiusBorder">Log In</a>
                            <button type="button" className="btn btn-outline-secondary withoutRadiusBorder gothamMedium">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
          
        );
    }
}

export default LoginComponent;