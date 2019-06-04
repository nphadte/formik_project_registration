import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./InputForm";
import ValidationSchemaExample from "./ProjectRegister/index";
import NestedExample from "./NestedExample";
import ProductSpecForm from "./ProductSpec/index";
import NestedSchemaExample from "./ProjectRegister/projectreg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputForm />
        <ValidationSchemaExample />
        <NestedSchemaExample />
      </div>
    );
  }
}

export default App;
