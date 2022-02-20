import * as React from "react";
import { Header } from "./Header";
import {
  getTheme,
  mergeStyles,
  Stack,
  IStackProps,
  INavLinkGroup,
  Nav,
} from "@fluentui/react";
import { navStyles } from "../shared/Typography";
import { useAppContext } from "./Provider";
import { PredictionList } from "./PredictionList";

const Page = (props: IStackProps) => (
  <Stack
    className={mergeStyles({
      height: "100vh",
      overflow: "hidden",
      selectors: {
        ":global(body)": {
          padding: 0,
          margin: 0,
        },
      },
    })}
    {...props}
  />
);

const Content = (props: IStackProps) => (
  <Stack
    horizontal
    gap={10}
    className={mergeStyles({ overflow: "hidden" })}
    {...props}
  />
);

const Sidebar = (props: IStackProps) => (
  <Stack
    disableShrink
    gap={20}
    grow={0}
    className={mergeStyles({
      borderRight: "1px solid #ddd",
      paddingRight: "1rem",
    })}
    {...props}
  />
);

const Main = (props: IStackProps) => (
  <Stack
    grow={1}
    disableShrink
    className={mergeStyles({
      overflow: "scroll",
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
    })}
    {...props}
  />
);

export const MLMB: React.FC = () => {
  const menuOpen = useAppContext((context) => context.menuOpen);

  const theme = getTheme();
  const _navStyle = navStyles(theme);

  const _groups: INavLinkGroup[] = [
    {
      links: [
        {
          name: "Home",
          url: "",
          key: "home",
          target: "_blank",
          iconProps: {
            iconName: "HomeSolid",
            styles: {
              root: {
                color: theme.palette.blueLight,
              },
            },
          },
        },
        {
          name: "Men's Basketball",
          url: "",
          key: "basketball",
          target: "_blank",
          iconProps: {
            iconName: "CollegeHoops",
            styles: {
              root: {
                backgroundColor: theme.palette.orangeLighter,
                borderRadius: "50%",
              },
            },
          },
        },
      ],
    },
  ];

  return (
    <Page>
      <Header />
      {menuOpen && <Nav groups={_groups} styles={_navStyle} isOnTop={true} />}
      <Content>
        <Main>
          <PredictionList />
        </Main>
      </Content>
    </Page>
  );
};
