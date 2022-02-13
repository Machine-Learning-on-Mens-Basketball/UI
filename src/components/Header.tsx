import * as React from "react";
import { CommandBar, ICommandBarItemProps, Panel } from "@fluentui/react";
import { getTheme } from "@fluentui/react";
import {
  headerButtonStyles,
  headerTitleButtonStyles,
} from "../shared/Typography";
import { useAppContext } from "./Provider";

export const Header: React.FC = () => {
  const theme = getTheme();

  const _buttonStyle = headerButtonStyles(theme);
  const _titleStyle = headerTitleButtonStyles(theme);

  const panelOpen = useAppContext((context) => context.panelOpen);

  const toggleMenu = useAppContext((context) => context.toggleMenu);
  const togglePanel = useAppContext(
    (context) => context.togglePanel
  ) as () => void;

  const _items: ICommandBarItemProps[] = React.useMemo(
    () => [
      {
        key: "menu",
        buttonStyles: _buttonStyle,
        iconOnly: true,
        ariaLabel: "Menu",
        iconProps: {
          iconName: "CollapseMenu",
        },
        onClick: toggleMenu,
      },
      {
        key: "MLMB",
        buttonStyles: _titleStyle,
        iconProps: {
          iconName: "CollegeHoops",
        },
        text: "MLMB",
      },
    ],
    [toggleMenu]
  );

  const _farItems: ICommandBarItemProps[] = React.useMemo(
    () => [
      {
        key: "settings",
        buttonStyles: _buttonStyle,
        iconOnly: true,
        ariaLabel: "Settings",
        iconProps: {
          iconName: "Settings",
        },
        onClick: togglePanel,
      },
      {
        key: "help",
        buttonStyles: _buttonStyle,
        iconOnly: true,
        ariaLabel: "Help",
        iconProps: {
          iconName: "Help",
        },
        onClick: togglePanel,
      },
      {
        key: "feedback",
        buttonStyles: _buttonStyle,
        iconOnly: true,
        ariaLabel: "Feedback",
        iconProps: {
          iconName: "Feedback",
        },
        onClick: () => togglePanel(),
      },
    ],
    [togglePanel]
  );

  return (
    <>
      <CommandBar
        items={_items}
        farItems={_farItems}
        styles={{ root: { backgroundColor: theme.palette.orangeLighter } }}
      />
      <Panel
        headerText={"Panel"}
        isOpen={panelOpen}
        isBlocking={false}
        onDismiss={togglePanel}
        closeButtonAriaLabel={"Close"}
        styles={{ root: { top: 45 } }}
      >
        <p>Content goes here.</p>
      </Panel>
    </>
  );
};
