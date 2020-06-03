import React, { Component } from "react";
import PropTypes from "prop-types";

class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.start };
  }

  render() {
    return (
      <div>



        {/* {this.state.number}{" "}
        <button onClick={() => this.handleIncrement(this.state)}>
          increment
        </button>
        <button onClick={() => this.handleDecrement(this.state)}>
          decrement
        </button> */}
      </div>
    );
  }
}

FormEdit.propTypes = {
};

export default FormEdit;