import * as React from "react";
import {
  ICommandBarItemProps,
  ITextProps,
  Text,
  ITheme,
  INavStyles,
} from "@fluentui/react";

const titleTextStyles: ITextProps["styles"] = (p, theme) => ({
  root: {
    display: "block",
    fontWeight: 600,
    color: theme.palette.neutralPrimary,
    fontSize: 20,
    marginBottom: 20,
  },
});

export const TitleText = (p: ITextProps): JSX.Element => (
  <Text styles={titleTextStyles} {...p} />
);

export const headerButtonStyles = (
  theme: ITheme
): ICommandBarItemProps["buttonStyles"] => ({
  icon: { color: theme.palette.white },
  iconHovered: { color: theme.palette.white },

  label: { color: theme.palette.white },
  labelHovered: { color: theme.palette.white },

  root: { backgroundColor: theme.palette.orangeLighter },
  rootHovered: { backgroundColor: theme.palette.orangeLight },
});

export const headerTitleButtonStyles = (
  theme: ITheme
): ICommandBarItemProps["buttonStyles"] => {
  const styles = headerButtonStyles(theme) ?? {};
  return {
    ...styles,
    label: {
      ...(styles.label as any),
      display: "block",
      fontWeight: 600,
      fontSize: 20,
      marginBottom: 3,
    },
    icon: {
      ...(styles.icon as any),
      fontSize: 25,
    },
    root: {
      ...(styles.root as any),
      padding: "0 25px",
    },
  };
};

export const navStyles = (theme: ITheme): Partial<INavStyles> => ({
  root: {
    // width: 208,
    height: "100%",
    boxSizing: "border-box",
    border: "2px solid #eee",
    overflowY: "auto",
    zIndex: 1,
    backgroundColor: theme.palette.white,
  },
});
