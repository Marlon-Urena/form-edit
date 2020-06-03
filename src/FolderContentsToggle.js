import React, { Component } from "react";
import PropTypes from "prop-types";


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
            {!this.state.textDisplay && this.props.text}

            {/* <ul>
                <li>File1</li>
                <li>File2</li>
                <li>File3</li>
            </ul> */}
            
      </div>
    );
  }
}

FolderContentsToggle.propTypes = {
  text: PropTypes.string.isRequired,
  file1: PropTypes.string.isRequired,
  file2: PropTypes.string.isRequired,
  file3: PropTypes.string.isRequired,
};

export default FolderContentsToggle;