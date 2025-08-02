import React, { createContext, useContext, useState } from "react";

export type UserPreferences = {
  defaultProject?: string;
  defaultHoursPerDay?: string;
  defaultLocation?: string;
  theme?: string;
  notifications?: boolean;
};

type PreferencesContextType = {
  preferences: UserPreferences;
  setPreferences: (prefs: UserPreferences) => void;
};

const PreferencesContext = createContext<PreferencesContextType>({
  preferences: {},
  setPreferences: () => {},
});

export const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [preferences, setPreferences] = useState<UserPreferences>({});
  return (
    <PreferencesContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => useContext(PreferencesContext);
