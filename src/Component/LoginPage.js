
import React from 'react'


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.loginUser = this.loginUser.bind(this);
        this.handleChangeEmailId = this.handleChangeEmailId.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeEmailId(event) {
        this.setState({
            username: event.target.value
        })

    }

    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    loginUser(event) {
        event.preventDefault();
        if (this.state.username === 'admin@gmail.com' && this.state.password === 'admin') {
            console.log("user is login with username " + this.state.username + "  and password " + this.state.password);
            sessionStorage.setItem('username', this.state.username);
            sessionStorage.setItem('password', this.state.password);
            window.open("/dashboard", "_self");
            //return true;
        }
        else {
          alert('please enter valid credentials')
            // if (this.state.username !== 'admin@gmail.com') {
            //     document.getElementById('email_id').innerHTML = "Please Enter valid credentials";
            //     return false;
            // }
            // if (this.state.password !== 'admin') {
            //     document.getElementById('passsword').innerHTML = "Please Enter valid credentials";
            //     return false;
            // }
        }

//return true;
    }
    render() {
        return (
            <div>
                <div className="loginbox">
                    <form id="loginForm" onSubmit={this.loginUser}>
                        <div className="form-group">
                            <h3 className="text-center">Login</h3>
                        </div>
                        <div className="form-group">

                            <label htmlFor ="exampleInputEmail1">Email Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                             aria-describedby="emailHelp" onChange={this.handleChangeEmailId} required />
                            <label id='email_id'></label>
                        </div>
                        <div className="form-group">
                            <label htmlFor ="exampleInputPassword1"> Password </label>
                            <input type="password" className="form-control" 
                            id="exampleInputPassword1" onChange={this.handleChangePassword} required />
                            <label id='password'></label>
                        </div>
                        <div className="form-group d-flex align-items-center justify-content-between">
                            <label className="form-check-label mb-0 pink">
                                Remember Me
                        <input type="checkbox" className="form-check-input" value="Networking" />
                                <span className="checkmark"></span>
                            </label>
                            <a href="/login" className="forgot"> Forget password </a>
                        </div>
                        <button type="submit" className="btn btn-pink withoutRadiusBorder">   Log In   </button>
                        <button href="/login" className="btn btn-outline-secondary withoutRadiusBorder gothamMedium"> Cancel </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;


// <DashboardPage username={this.state.username}></DashboardPage> 

