import React, { createContext, useContext, useState } from "react";

const PreferencesContext = createContext({
  preferences: {},
  setPreferences: (prefs: any) => {},
});

export const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [preferences, setPreferences] = useState({});
  return (
    <PreferencesContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => useContext(PreferencesContext);
