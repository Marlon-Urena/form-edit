import React, { Component } from "react";
import PropTypes from "prop-types";



const files = ["File1","File2","File3"];
const listItems = files.map((files) =>
  <li>{files}</li>
);

class FolderContentsToggle extends Component {
    constructor(props){
        super(props);
        this.state={
            textDisplay: false,
        }
    }

    ToggleButton(){
        this.setState((currentState) => ({
            textDisplay: !currentState.textDisplay, 
        }));
    }

  render() {
    return (
      <div>
          <h1>Home</h1>
            <button onClick={() =>this.ToggleButton()}>
                Toggle
            </button>
            <br></br>
            {this.state.textDisplay && listItems}
      </div>
    );
  }
}

FolderContentsToggle.propTypes = {
  text: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default FolderContentsToggle;