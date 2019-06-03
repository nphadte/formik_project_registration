import React, { Component } from "react";
import { Formik  } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";
import { ProductSpec   } from "./productspec";

const styles = theme => ({
  paper: {
    marginTop: `theme.spacing(8)`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`
  },
  container: {
    maxWidth: "200px"
  }
});

class ProductSpecForm  extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <Formik render={props => <ProductSpec {...props} />} />
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ProductSpecForm);