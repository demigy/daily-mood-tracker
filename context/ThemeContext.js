// context/ThemeContext.js
import React, { createContext, useState, useMemo } from "react";
import { LightTheme, DarkTheme } from "../theme/AppTheme";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const theme = useMemo(() => {
    return isDark ? DarkTheme : LightTheme;
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
