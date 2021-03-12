import React from "react";
import { connect } from "react-redux";

class GetReduxData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity:0,
    }
}
  render() {
    return (
      <div> <center>
        Here we are fetching updated data through redux  :- { this.props.redux_quantity}
        </center> </div>
    );
  }
}

const mapstatetoprop = (state) => ({
    redux_quantity: state.marketPlaceStandardData.quantity,
  });

  export default connect(mapstatetoprop, null)(GetReduxData);