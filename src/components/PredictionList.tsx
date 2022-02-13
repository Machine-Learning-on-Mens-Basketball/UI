import {
  CommandBar,
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  ICommandBarItemProps,
  MarqueeSelection,
  Text,
} from "@fluentui/react";
import { Selection } from "@fluentui/utilities";
import * as React from "react";

export interface IPredictionItem {
  homeTeam: string;
  awayTeam: string;
  model: "LR" | "SVC" | "RFC" | "GBC" | "En";
}

export const PredictionList: React.FC = () => {
  const _selection = new Selection();

  const _items: IPredictionItem[] = [
    { homeTeam: "Connecticut", awayTeam: "Duke", model: "RFC" },
  ];

  const _commandBarItems: ICommandBarItemProps[] = [
    { key: "addMatchUp", text: "Add", iconProps: { iconName: "Add" } },
    { key: "deleteMatchUp", text: "Delete", iconProps: { iconName: "Delete" } },
  ];

  const _columns: IColumn[] = [
    {
      key: "model",
      name: "Machine Learning Model",
      fieldName: "model",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "homeTeam",
      name: "Home Team",
      fieldName: "homeTeam",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "awayTeam",
      name: "Away Team",
      fieldName: "awayTeam",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ];

  return (
    <>
      <Text variant={"xLarge"} block>
        {"NCAA Men's Basketball Prediction"}
      </Text>
      <Text>
        {
          "Use the following table to predict the outcome of two NCAA Men's Basketball Teams. Predictions are based on moving averages calculated on each team which are periodically updated (Last updated on: Mar-25-2021)."
        }
      </Text>
      <CommandBar
        items={_commandBarItems}
        ariaLabel="Prediction List Actions"
        primaryGroupAriaLabel="Prediction List Input Row Actions"
        styles={{ root: { marginTop: 10 } }}
      />
      <MarqueeSelection selection={_selection}>
        <DetailsList
          items={_items}
          columns={_columns}
          setKey={"set"}
          layoutMode={DetailsListLayoutMode.justified}
          selection={_selection}
          selectionPreservedOnEmptyClick={true}
          ariaLabelForSelectionColumn={"Toggle Selection"}
          ariaLabelForSelectAllCheckbox={"Toggle selection for all items"}
          checkButtonAriaLabel={"select row"}
        />
      </MarqueeSelection>
    </>
  );
};
