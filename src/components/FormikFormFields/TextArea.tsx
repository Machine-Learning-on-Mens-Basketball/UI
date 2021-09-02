import React from "react";
import { Field, ErrorMessage } from "formik";
import ValidationError from "./ValidationError";
import { IFormProps } from "./FormControl";

export const TextArea = (props: IFormProps) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ValidationError} />
    </div>
  );
};

export default TextArea;
