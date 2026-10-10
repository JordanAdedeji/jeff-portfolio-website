import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

// First visit follows the device's colour scheme; after that the saved choice wins.
const getInitialState = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return { darkMode: saved === "dark" };
  } catch (e) {}
  return {
    darkMode: !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches),
  };
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, undefined, getInitialState);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
  );
};
