import React from 'react';

class PropsDemo extends React.Component {

    constructor(props) {
        super(props);
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

export default PropsDemo;