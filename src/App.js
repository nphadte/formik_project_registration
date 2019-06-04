import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./InputForm";
import ValidationSchemaExample from "./ProjectRegister/index";
import NestedExample from "./NestedExample";
import ProductSpecForm from "./ProductSpec/index";
import NestedSchemaExample from "./ProjectRegister/projectreg";
import Basic from "./Basic";
import BasicExample from "./BasicExample";
import NestedSchema from "./NestedSchema";
import FriendList from "./FriendList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NestedSchema />
      </div>
    );
  }
}

export default App;
