import * as React from "react";
import { useBoolean } from "@fluentui/react-hooks";
import PropTypes from "prop-types";
import {
  createContext,
  useContextSelector,
  ContextSelector,
} from "@fluentui/react-context-selector";

interface ContextValue {
  menuOpen?: boolean;
  toggleMenu?: () => void;

  panelOpen?: boolean;
  togglePanel?: () => void;
  panelContext?: "settings" | "help" | "feedback";
  setPanelContext?: () => void;
}

// 💡 The same syntax as native React context API
//    https://reactjs.org/docs/context.html#reactcreatecontext
const Context = createContext<ContextValue>({});

const AppProvider = Context.Provider;

// not necessary but can be a good layer to mock for unit testing
export const useAppContext = <T,>(selector: ContextSelector<ContextValue, T>) =>
  useContextSelector(Context, selector);

export const Provider: React.FC = ({ children }) => {
  const [menuOpen, { toggle: toggleMenu }] = useBoolean(false);
  const [panelOpen, { toggle: togglePanel }] = useBoolean(false);
  console.log(panelOpen);

  return (
    <div className="App">
      <AppProvider
        value={{
          menuOpen,
          panelOpen,
          toggleMenu,
          togglePanel,
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
