import React from "react";
import { Field, ErrorMessage } from "formik";
import ValidationError from "./ValidationError";
import { IFormProps } from "./FormControl";

export interface IDropdownField extends IFormProps {
  options: IOptionProps[];
}

export interface IOptionProps {
  key: string;
  value: string | number;
}

export const DropDownField = (props: IDropdownField) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </Field>
      <ErrorMessage component={ValidationError} name={name} />
    </div>
  );
};

export default DropDownField;
