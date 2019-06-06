import React from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import { TextField, Select } from "formik-material-ui";
import { object, string, array } from "yup";
const dateFormat = "YYYY/MM/DD";
const currentDate = new Date().toISOString().substring(0, 10);

const validationSchema = object().shape({
  projectname: string().required("Project Name is required"),
  projectaddress: string().required("Project Address is required"),
  projectstate: string().required("Project State is required"),
  projectcity: string().required("Project City is required")
});

var options =
  "<option value='red'>Red</option >" +
  "<option value='green'>Green</option>" +
  "<option value='blue'>Blue</option>";

const NestedSchema = () => (
  <div>
    <h1>Project Registration Form</h1>
    <Formik
      initialValues={{
        userId: "",
        company: "",
        projectdate: "",
        projectname: "",
        projectaddress: "",
        projectcity: "",
        projectstate: "",
        projectzipcode: "",
        tileinstalldate: "",
        projectcomments: "",
        email: "",
        architect: {
          firstname: "",
          lastname: "",
          address: "",
          phone: "",
          email: "",
          companyname: "",
          city: "",
          state: "",
          zip: "",
          website: ""
        },
        interiordesigner: {
          firstname: "",
          lastname: "",
          address: "",
          phone: "",
          email: "",
          companyname: "",
          city: "",
          state: "",
          zip: "",
          website: ""
        },
        gerneralcontractor: {
          firstname: "",
          lastname: "",
          address: "",
          phone: "",
          email: "",
          companyname: "",
          city: "",
          state: "",
          zip: "",
          website: ""
        },
        tilecontractor: {
          firstname: "",
          lastname: "",
          address: "",
          phone: "",
          email: "",
          companyname: "",
          city: "",
          state: "",
          zip: "",
          website: ""
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
      validationSchema={validationSchema}
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
          <Grid container>
            <Field type="date" name="projectdate" component={TextField} />
            <Field
              component={TextField}
              name="projectname"
              label=" Project Name"
            />
            <Field
              component={TextField}
              name="projectaddress"
              label=" Project Address"
            />
            <Field
              component={TextField}
              name="projectcity"
              label=" Project City"
            />
            <Field
              component={TextField}
              name="projectstate"
              label=" Project State"
            />
            <Field
              component={TextField}
              name="projectzipcode"
              label=" Project Zip Code"
            />
            <Field
              type="email"
              name="email"
              label="Email"
              component={TextField}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field type="date" name="tileinstalldate" component={TextField} />
            {errors.tileinstalldate && touched.tileinstalldate && (
              <div>{errors.tileinstalldate}</div>
            )}
          </Grid>

          <Grid container>
            <h4> Architect</h4>
            <Field
              type="text"
              name="architect.firstname"
              component={TextField}
              label=" My Architect First Name"
            />
            <ErrorMessage name="architect.firstname">
              {errorMessage => <div className="error">{errorMessage}</div>}
            </ErrorMessage>
            <Field
              type="text"
              name="architect.lastname"
              component={TextField}
              label=" My Architect  Last Name"
            />
            <ErrorMessage
              name="architect.lastname"
              className="error"
              component="div"
            />
            {status && status.msg && <div>{status.msg}</div>}

            <Field
              component={TextField}
              name="architect.address"
              label=" Architect Address"
            />
            <Field
              component={TextField}
              name="architect.city"
              label="Architect City"
            />
            <Field
              component={TextField}
              name="architect.state"
              label="Architect State"
            />
            <Field
              component={TextField}
              name="architect.zip"
              label="Architect Zip Code"
            />
            <Field
              type="email"
              name="architect.email"
              label="Email"
              component={TextField}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field
              component={TextField}
              name="architect.website"
              label=" website"
            />
          </Grid>
          <br />
          <Grid container>
            <h4> Interior Designer</h4>
            <Field
              type="text"
              name=" interiordesigner.firstname"
              component={TextField}
              label="Interior Designer First Name"
            />
            <ErrorMessage name=" interiordesigner.firstname">
              {errorMessage => <div className="error">{errorMessage}</div>}
            </ErrorMessage>
            <Field
              type="text"
              name=" interiordesigner.lastname"
              component={TextField}
              label="Interior Designer  Last Name"
            />
            <ErrorMessage
              name=" interiordesigner.lastname"
              className="error"
              component="div"
            />
            {status && status.msg && <div>{status.msg}</div>}

            <Field
              component={TextField}
              name=" interiordesigner.address"
              label="Interior Designer Address"
            />
            <Field
              component={TextField}
              name=" interiordesigner.city"
              label="Interior Designer City"
            />
            <Field
              component={TextField}
              name=" interiordesigner.state"
              label="Interior Designer State"
            />
            <Field
              component={TextField}
              name=" interiordesigner.zip"
              label="Interior Designer Zip Code"
            />
            <Field
              type="email"
              name=" interiordesigner.email"
              label="Email"
              component={TextField}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field
              component={TextField}
              name=" interiordesigner.website"
              label="website"
            />
          </Grid>
          <h3> Product Specifications </h3>

          <FieldArray
            name="productspec"
            render={arrayHelpers => (
              <div>
                {values.productspec.map((product, index) => (
                  <div key={index}>
                    <Field
                      required
                      component={Select}
                      name={`productspec.${index}.product_desc`}
                      defaultValue="M1-0809 25x25 Display Boards - Soho - 2 Boards (BPI)"
                    >
                      <option value="M1-0809 25x25 Display Boards - Soho - 2 Boards (BPI)">
                        M1-0809 25"x25\" Display Boards - Soho - 2 Boards (BPI)
                      </option>
                      <option value="62-027 6x6 Ottomano Walnut HD Porcelain Tile">
                        62-027 6"x6" Ottomano Walnut HD Porcelain Tile
                      </option>
                      <option value="M5-0582 Amaya Wood Tobacco Porcelain Sample Board 48 x 196mm Chips">
                        M5-0582 Amaya Wood Tobacco Porcelain Sample Board 48 x
                        196mm Chips
                      </option>
                    </Field>
                    <Field
                      name={`productspec.${index}.item_code`}
                      component={TextField}
                      label="Item Code"
                    />
                    <Field
                      name={`productspec.${index}.brandname`}
                      component={TextField}
                      label="Private Brand Name"
                    />
                    <Field
                      name={`productspec.${index}.qty`}
                      component={TextField}
                      label="Qty "
                    />
                    <Field
                      name={`productspec.${index}.submitteddate`}
                      component={TextField}
                      type="date"
                    />
                    <Field
                      name={`productspec.${index}.directimport`}
                      component={TextField}
                      label="% Direct Import"
                    />
                    <Field
                      name={`productspec.${index}.torontoimport`}
                      component={TextField}
                      label="% Toronto Import"
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

export default NestedSchema;
