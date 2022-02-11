import React from "react";
import { FullName } from "./Logos/FullName";
import { InputsTable } from "./InputsTable";
import { PredictForm } from "./PredictForm";
import { IFormValues } from "./PredictForm";

const input: IFormValues = {
  matchups: [
    {
      team1: "Connecticut",
      team2: "Maryland",
      model: "Ensemble",
      type: "Tournament",
    },
  ],
};

export const Home: React.FC = (): JSX.Element => (
  <>
    <FullName />
    <InputsTable />
    <PredictForm matchups={input.matchups} />
  </>
);

export default Home;
