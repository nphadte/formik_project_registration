import React from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import moment from "moment";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const dateFormat = "YYYY/MM/DD";
const currentDate = new Date().toISOString().substring(0, 10);

const NestedSchema = () => (
  <div>
    <h1>Nested Schema</h1>
    <Formik
      initialValues={{
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
            item_code: ""
          },
          {
            product_desc: " ",
            item_code: ""
          },
          {
            product_desc: " ",
            item_code: ""
          },
          {
            product_desc: " ",
            item_code: ""
          },
          {
            product_desc: " ",
            item_code: ""
          },
          {
            product_desc: " ",
            item_code: ""
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
          <Field type="date" name="projectdate" />
          <Field type="text" name="projectname" />
          <Field type="email" name="email" />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <Field type="date" name="tileinstalldate" />
          {errors.tileinstalldate && touched.tileinstalldate && (
            <div>{errors.tileinstalldate}</div>
          )}
          <Field type="text" name="architect.firstname" />
          <ErrorMessage name="architect.firstname">
            {errorMessage => <div className="error">{errorMessage}</div>}
          </ErrorMessage>
          <Field type="text" name="architect.lastname" />
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
                    <Field name={`productspec.${index}.product_desc`} />
                    <Field name={`productspec.${index}.item_code`} />
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

export default NestedSchema;
