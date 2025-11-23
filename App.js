// App.js
import React, { useContext } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext";
import RootNavigator from "./navigation/RootNavigator";

function MainApp() {
  const { theme } = useContext(ThemeContext);
  return (
    <PaperProvider theme={theme}>
      <RootNavigator />
    </PaperProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
