import React, { Component } from "react";
import "./App.css";
import FolderContentsToggle from "./FolderContentsToggle";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <>
        <h1>Form Edit</h1>
        <Form />
        <h1>Folder Structure Toggle</h1>
        <FolderContentsToggle />
      </>
    );
  }
}

export default App;
