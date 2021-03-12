import React from "react";

class HomePage extends React.Component {
    constructor(props) {
        super();
        this.state = {
        quantity:0,
        }
        this.increase = this.increase.bind(this)
    }
    increase(){
        this.setState((state) => {
                return {quantity : state.quantity +1}
        })
    }
    render() {
        return (
            <div>
                IN our home page
                we are updating data through redux
        
                <div className="quantityGroup">
                    <button type="button" className="round-btn substration" title="If u want less quantity" onClick={this.increase}>-</button>
                    <input className="quantityTxt quantity ct" id={5} name="quantity[]" type="text" value={this.state.quantity} maxLength="4" />
                    <button type="button" className="round-btn addition" title="If u want more quantity" onClick={this.increase}>+</button>
                </div>

        </div>
        );
  }
}

export default HomePage;