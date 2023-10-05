import React from "react";
import { FormSoal } from "./FormSoal";
import { FormJawab } from "./FormJawab";

export const HeadForm = () => {
  return (
    <div className="headform">
      <FormSoal />
      <FormJawab />
    </div>
  );
};
