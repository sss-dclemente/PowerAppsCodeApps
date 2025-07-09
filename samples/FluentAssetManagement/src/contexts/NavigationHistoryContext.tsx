import React, { createContext, useContext, ReactNode } from 'react';
import { useNavigationHistory, NavigationHistory } from '../hooks/useNavigationHistory';

const NavigationHistoryContext = createContext<NavigationHistory | null>(null);

interface NavigationHistoryProviderProps {
  children: ReactNode;
}

export const NavigationHistoryProvider: React.FC<NavigationHistoryProviderProps> = ({ children }) => {
  const navigationHistory = useNavigationHistory();

  return (
    <NavigationHistoryContext.Provider value={navigationHistory}>
      {children}
    </NavigationHistoryContext.Provider>
  );
};

export const useNavigationHistoryContext = (): NavigationHistory => {
  const context = useContext(NavigationHistoryContext);
  if (!context) {
    throw new Error('useNavigationHistoryContext must be used within NavigationHistoryProvider');
  }
  return context;
};
