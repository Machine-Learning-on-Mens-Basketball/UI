import React from "react";
import { FieldProps } from "formik";
import TextField from "./TextField";
import TextArea from "./TextArea";
import DropDownField from "./DropdownField";

export interface IFormProps extends Partial<FieldProps> {
  name: string;
  label: string;
}

export interface IFormControl extends IFormProps {
  control: "text" | "textarea" | "dropdown";
}

export const FormControl = (props: any) => {
  const { control, ...rest } = props;
  switch (control) {
    case "text":
      return <TextField {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "dropdown":
      return <DropDownField {...rest} />;
    default:
      return null;
  }
};

export default FormControl;
