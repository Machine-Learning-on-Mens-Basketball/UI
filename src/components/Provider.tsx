import * as React from "react";
import { useBoolean } from "@fluentui/react-hooks";
import PropTypes from "prop-types";
import {
  createContext,
  useContextSelector,
  ContextSelector,
} from "@fluentui/react-context-selector";

interface ContextValue {
  menuOpen: boolean;
  toggleMenu: () => void;

  panelOpen: boolean;
  togglePanel: (panelView?: ContextValue["panelContext"]) => void;

  panelContext: "settings" | "help" | "feedback" | "";
}

// 💡 The same syntax as native React context API
//    https://reactjs.org/docs/context.html#reactcreatecontext
const Context = createContext<ContextValue>({} as any);

const AppProvider = Context.Provider;

// not necessary but can be a good layer to mock for unit testing
export const useAppContext = <T,>(selector: ContextSelector<ContextValue, T>) =>
  useContextSelector(Context, selector);

export const Provider: React.FC = ({ children }) => {
  const [panelContext, setPanelContext] =
    React.useState<ContextValue["panelContext"]>("");
  const [menuOpen, { toggle: toggleMenu }] = useBoolean(false);
  const [panelOpen, { toggle: togglePanel }] = useBoolean(false);

  const togglePanelWithContext = (
    panelView: ContextValue["panelContext"] = ""
  ) => {
    if (panelView !== "") {
      setPanelContext(panelView);
      if (panelOpen && panelContext === panelView) togglePanel();
      else if (!panelOpen) togglePanel();
    } else {
      panelOpen && setPanelContext("");
      togglePanel();
    }
  };

  return (
    <div className="App">
      <AppProvider
        value={{
          menuOpen,
          panelOpen,
          panelContext,
          toggleMenu,
          togglePanel: togglePanelWithContext,
        }}
      >
        {children}
      </AppProvider>
    </div>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
