import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FluentProvider } from '@fluentui/react-components';
import PowerProvider from './PowerProvider';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import App from './App';
import './index.css';

const AppWithTheme = () => {
  const { theme } = useTheme();
  
  return (
    <FluentProvider theme={theme}>
      <App />
    </FluentProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PowerProvider>
      <ThemeProvider>
        <AppWithTheme />
      </ThemeProvider>
    </PowerProvider>
  </StrictMode>,
);
