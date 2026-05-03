import React, { createContext, useState, useMemo, useEffect, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext({
  mode: 'dark',
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  // Check local storage or default to 'dark'
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('synczo_theme_mode');
    return savedMode ? savedMode : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('synczo_theme_mode', mode);
    // Update HTML data-theme attribute for CSS variable switching
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  // Initialize on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, []);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: { main: '#e11d5d' },
                secondary: { main: '#6d28d9' },
                background: { default: '#f8f9fc', paper: '#ffffff' },
                text: { primary: '#0a0a14', secondary: 'rgba(10,10,20,0.65)' },
              }
            : {
                primary: { main: '#ff2d78' },
                secondary: { main: '#7c3aed' },
                background: { default: '#030305', paper: '#08080f' },
                text: { primary: '#ffffff', secondary: 'rgba(255,255,255,0.65)' },
              }),
        },
        typography: {
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          h1: { fontWeight: 900 },
          h2: { fontWeight: 800 },
          h3: { fontWeight: 800 },
          h4: { fontWeight: 700 },
          button: { fontWeight: 600, textTransform: 'none' },
        },
        shape: {
          borderRadius: 16,
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, theme: mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeContextProvider');
    }
    return context;
};
