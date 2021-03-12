import React from 'react';

class LifeCycle extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return(
            <div>
            <div>Props Value</div>
            <label>{this.props.value}</label>
            </div>
        );
    }
}

export default LifeCycle;