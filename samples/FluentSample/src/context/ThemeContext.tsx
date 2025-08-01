import React, { createContext, useContext, useState } from "react";
import { webLightTheme, webDarkTheme, Theme } from "@fluentui/react-components";

const ThemeContext = createContext({
  theme: webLightTheme as Theme,
  mode: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("light");
  const theme = mode === "dark" ? webDarkTheme : webLightTheme;
  const toggleTheme = () => setMode(m => (m === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
