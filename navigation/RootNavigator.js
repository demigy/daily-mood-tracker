// navigation/RootNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator"; // stack navigator file (we will reference AppNavigator below)
import { ThemeContext } from "../context/ThemeContext";

export default function RootNavigator() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <NavigationContainer theme={theme}>
          <AppNavigator />
        </NavigationContainer>
      )}
    </ThemeContext.Consumer>
  );
}
