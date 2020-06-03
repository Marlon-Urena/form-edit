import React, { Component } from "react";
import "./App.css";
import FolderContentsToggle from "./FolderContentsToggle";
import Form from './Form'

class App extends Component {
  render() {
    return (
      <>
        <Form/>
        <FolderContentsToggle/>
      </>
    );
  }
}

export default App;