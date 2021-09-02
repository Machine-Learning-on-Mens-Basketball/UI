import React from "react";

export const ValidationError = (props: any) => {
  return <div className="error">{props.children}</div>;
};

export default ValidationError;
