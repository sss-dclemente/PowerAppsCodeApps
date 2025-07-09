import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, webLightTheme, webDarkTheme } from '@fluentui/react-components';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  resetToSystemPreference: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize from localStorage, or fall back to system preference, or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem('isDarkMode');
    if (stored !== null) {
      // User has explicitly set a preference, use it
      return JSON.parse(stored);
    }
    
    // No stored preference, check system/browser preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    // Fallback to light mode
    return false;
  });

  // Listen for system theme changes when no user preference is stored
  useEffect(() => {
    const stored = localStorage.getItem('isDarkMode');
    
    // Only listen for system changes if user hasn't set an explicit preference
    if (stored === null && typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleSystemThemeChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      };
    }
  }, []);

  // Update localStorage when theme changes (this marks user preference as explicit)
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const resetToSystemPreference = () => {
    // Remove user preference from localStorage
    localStorage.removeItem('isDarkMode');
    
    // Set to system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      setIsDarkMode(false);
    }
  };

  const theme = isDarkMode ? webDarkTheme : webLightTheme;

  const value: ThemeContextType = {
    isDarkMode,
    toggleDarkMode,
    resetToSystemPreference,
    theme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
