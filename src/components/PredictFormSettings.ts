import { FormikErrors } from "formik";
import { IFormValues } from "./PredictForm";

export const PredictFormSettings = {
  mapPropsToValues: (props: IFormValues) => {
    return (
      props || { matchups: [{ team1: "", team2: "", model: "", type: "" }] }
    );
  },

  validate: (values: IFormValues) => {
    // let errors: FormikErrors<IFormValues> = {};
    // return errors;
    return {};
  },

  handleSubmit: (values: any) => {
    console.log(values);
  },
};
