import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

export const FieldArrayObject = () => (
  <div>
    <h1> FieldArrayObject Friend List</h1>
        <Formik
            initialValues={{
                friends: [{
                    name: "",
                    age: "",
                },{
                    name: "",
                    age: "",
                }
                ]
            onSubmit={values => {
                console.log("The values are :" + JSON.stringify(values));
            }}