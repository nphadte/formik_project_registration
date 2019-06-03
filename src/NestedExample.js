import React from "react";
import { Formik, Form, Field } from "formik";

export const NestedExample = () => (
  <div>
    <h1>Social Profiles</h1>
    <Formik
      initialValues={{
        social: {
          facebook: "",
          twitter: ""
        }
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      <Field name="social.facebook" />
      <Field name="social.twitter" />
      <button type="submit">Submit</button>
    </Formik>
  </div>
);

export default  NestedExample;