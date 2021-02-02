import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {   //action.js of reducers
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });  //now we are dispatching data to action.js of reducers.
  };

  render() {
    return (
      <div>
        <input  
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}> 
          Add Todo
        </button>
      </div>
    );
  }
}
//during updated connect view with redux
export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;
