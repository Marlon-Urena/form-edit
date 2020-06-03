import React, { Component } from "react";
import FormEdit from "./FormEdit"
import "./App.css";
import FolderContentsToggle from "./FolderContentsToggle";

class App extends Component {
  render() {
    return (
      <>
        {/* <ContactsTest
          name=""
          mobile=""
          work=""
          email=""
        />
        <ContactCard
          name="Jill"
          mobile="7185555555"
          work="7182222222"
          workplace = "egfw"
          email="jill@example.org"
        />
        <ContactCard
          name="Mike"
          mobile="3475555555"
          work="5552222222"
          email="mike@example.com"
        /> */}
        {/* <Numbers start={5} />
        <Numbers start={15} />
        <Numbers start={50} />
         */}
         
        <FolderContentsToggle text = "Hello World"/>



      </>
    );
  }
}

export default App;