import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./InputForm";
import ValidationSchemaExample from "./ProjectRegister/index";
import NestedExample from "./NestedExample";
import ProductSpecForm from "./ProductSpec/index"
class App extends Component {
  render() {
    return (
      <div className="App">
        <ValidationSchemaExample />
       
      </div>
    );
  }
}

export default App;
