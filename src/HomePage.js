import React from "react";
import { connect } from "react-redux";
import sendHomeData from "./action/index";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "abcd",
    };
  }
  //sendHomeData(data)

  render() {
    sendHomeData(this.state.data);
    return <div>homepage</div>;
  }
}
const mapStateToProp = (state) => ({
  data: state,
});

const mapDispatchToProp = { sendHomeData };
export default connect(mapStateToProp, mapDispatchToProp)(HomePage);
