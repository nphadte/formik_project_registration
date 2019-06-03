import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "react-select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

export const ProductSpec = props => {
  return (
    <form onSubmit={(values, actions) => {
      console.log(JSON.stringify(values) ); 
    }}>
      <Select
        // value={values.age}
        //onChange={handleChange}
        options={ProductSpec}
      />
      <TextField id="item_code" label="Item Code" type="text" />
      <TextField id="private label name"  name="private_label_name"    label="Private Label Name"   />
      <TextField id="quantity" name="quantity" label="Quantity( sq. ft)." />
      <TextField
        id="date_submitted"
        label="Product Spec Submitted Date"
        type="date"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id="toronto_import"
        name="toronto_import"
        label="% Toronto Import"
      />
      <TextField
        id="direct_import"
        name="direct_import"
        label="% Direct Import"
      />
    </form>
  );
};
