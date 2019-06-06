import React, { Component } from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import moment from "moment";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "react-select";

const dateFormat = "YYYY/MM/DD";
const currentDate = new Date().toISOString().substring(0, 10);

var options = [
 "< option value = \"red\" > Red</option >",
  "<option value=\"green\">Green</option>" ,
 "< option value = \"blue\" > Blue</option >"
];

class NewProject extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value1: ''
      }
      }
    componentDidMount() {
      console.log(" The NewProject  got mounted");
     }

  render() {
         
    var options = [
      '< option value = "red" > Red</option >',
      '<option value="green">Green</option>',
      '< option value = "blue" > Blue</option >'
    ];

    return (
      <div>
        <h1>Nested Schema</h1>
        <Formik
          initialValues={{
            userId: "",
            company: "",
            projectdate: "",
            projectname: "",
            tileinstalldate: "",
            email: "",
            architect: {
              firstname: "",
              lastname: ""
            },
            productspec: [
              {
                product_desc: " ",
                item_code: "",
                brandname: "",
                qty: "",
                submitteddate: "",
                directimport: "",
                torontoimport: ""
              },
              {
                product_desc: " ",
                item_code: "",
                brandname: "",
                qty: "",
                submitteddate: "",
                directimport: "",
                torontoimport: ""
              },
              {
                product_desc: " ",
                item_code: "",
                brandname: "",
                qty: "",
                submitteddate: "",
                directimport: "",
                torontoimport: ""
              },
              {
                product_desc: " ",
                item_code: "",
                brandname: "",
                qty: "",
                submitteddate: "",
                directimport: "",
                torontoimport: ""
              },
              {
                product_desc: " ",
                item_code: "",
                brandname: "",
                qty: "",
                submitteddate: "",
                directimport: "",
                torontoimport: ""
              },
              {
                product_desc: " ",
                item_code: "",
                brandname: "",
                qty: "",
                submitteddate: "",
                directimport: "",
                torontoimport: ""
              }
            ]
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("The values are :" + JSON.stringify(values));
          }}
          render={({
            errors,
            status,
            touched,
            isSubmitting,
            values,
            handleBlur,
            handleChange,
            handleSubmit
          }) => (
            <Form onSubmit={handleSubmit}>
              <Field type="date" name="projectdate" label="Project Date" />
              <Field
                component="select"
                name="projectname"
                label="Project Name"
              >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <Field type="email" name="email" label="Email" />
              {errors.email && touched.email && <div>{errors.email}</div>}
              <Field type="date" name="tileinstalldate" />
              {errors.tileinstalldate && touched.tileinstalldate && (
                <div>{errors.tileinstalldate}</div>
              )}
              <Field
                type="text"
                name="architect.firstname"
                label="Architect First Name"
              />
              <ErrorMessage name="architect.firstname">
                {errorMessage => (
                  <div className="error">{errorMessage}</div>
                )}
              </ErrorMessage>
              <Field
                type="text"
                name="architect.lastname"
                label="Architect Last Name"
              />
              <ErrorMessage
                name="architect.lastname"
                className="error"
                component="div"
              />
              {status && status.msg && <div>{status.msg}</div>}

              <FieldArray
                name="productspec"
                render={arrayHelpers => (
                  <div>
                    {values.productspec.map((product, index) => (
                      <div key={index}>
                        <Field
                          component="select"
                          name={`productspec.${index}.product_desc`}
                        >{ options }</Field>
                        <Field name={`productspec.${index}.item_code`} />
                        <Field name={`productspec.${index}.brandname`} />
                        <Field name={`productspec.${index}.qty`} />
                        <Field
                          name={`productspec.${index}.submitteddate`}
                        />
                        <Field name={`productspec.${index}.directimport`} />
                        <Field
                          name={`productspec.${index}.torontoimport`}
                        />
                      </div>
                    ))}
                  </div>
                )}
              />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        />
      </div>
    );

  }
}

    export default NewProject;
