import React from "react";
import { Formik } from "formik";

const BasicExample = () => (
  <div>
    <h1>BasicExample</h1>
    <Formik
      initialValues={{ name: "jared" }}
      onSubmit={(values, actions) => {
        console.log(JSON.stringify(values));
        actions.setSubmitting(false);
      }}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </div>
);

export default BasicExample;