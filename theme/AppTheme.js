// theme/AppTheme.js
import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";

export const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#6750A4",
    secondary: "#625B71",
    tertiary: "#7D5260",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    onSurface: "#1C1B1F",
  },
  fonts: {
    ...MD3LightTheme.fonts,
    bodyLarge: { ...MD3LightTheme.fonts.bodyLarge, fontSize: 16 },
    bodyMedium: { ...MD3LightTheme.fonts.bodyMedium, fontSize: 14 },
    titleMedium: { ...MD3LightTheme.fonts.titleMedium, fontSize: 18 },
    labelLarge: { ...MD3LightTheme.fonts.labelLarge, fontSize: 14 },
    medium: { ...MD3LightTheme.fonts.bodyMedium }, // ← THE ONE THAT FIXES YOUR CRASH
  },
};

export const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#D0BCFF",
    secondary: "#CCC2DC",
    tertiary: "#EFB8C8",
    background: "#1C1B1F",
    surface: "#1C1B1F",
    onSurface: "#E6E1E5",
  },
  fonts: {
    ...MD3DarkTheme.fonts,
    bodyLarge: { ...MD3DarkTheme.fonts.bodyLarge, fontSize: 16 },
    bodyMedium: { ...MD3DarkTheme.fonts.bodyMedium, fontSize: 14 },
    titleMedium: { ...MD3DarkTheme.fonts.titleMedium, fontSize: 18 },
    labelLarge: { ...MD3DarkTheme.fonts.labelLarge, fontSize: 14 },
    medium: { ...MD3DarkTheme.fonts.bodyMedium }, // ← REQUIRED
  },
};
