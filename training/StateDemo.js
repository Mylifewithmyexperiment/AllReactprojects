import React from 'react';

class StateDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username : ""
        }
    }

    setUsername(e) {
        this.setState( {
            username : e.target.value
        })
    }

    render() {
        alert("hello")
        return(
            <div>
            <h4>Welcome {this.state.username}</h4>
            <label>Enter Your Name: </label>
            <input type="text" id="name" onChange={(e) => this.setUsername(e)}></input>
            </div>
        )
    }
}

export default StateDemo;
