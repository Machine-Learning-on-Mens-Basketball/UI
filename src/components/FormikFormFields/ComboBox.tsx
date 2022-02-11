import React from "react";
import { Field, Form, Formik, FormikProps, FieldProps } from "formik";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface IComboBox extends Partial<FieldProps> {
  name: string;
  options: any;
}

export const ComboBox: React.FC<IComboBox> = (props) => (
  <Field name={props.name}>
    {({
      field, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      meta,
    }: FieldProps) => (
      <div>
        <Autocomplete
          disablePortal
          id={`combo-box-${field.name}`}
          options={props.options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label={field.name} />}
        />
        {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )}
      </div>
    )}
  </Field>
);
