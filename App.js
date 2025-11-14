import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { 
  Provider as PaperProvider, 
  MD3LightTheme, 
  MD3DarkTheme 
} from "react-native-paper";

// Screens
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CameraScreen from "./screens/CameraScreen";
import AccelerometerScreen from "./screens/AccelerometerScreen";
import MoodDetailsScreen from "./screens/MoodDetailsScreen";

// Bottom Tabs
import BottomTabs from "./navigation/BottomTabs";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const CustomLight = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: "#6A1B9A",
      secondary: "#CE93D8",
    },
  };

  const CustomDark = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: "#BA68C8",
      secondary: "#CE93D8",
    },
  };

  return (
    <PaperProvider theme={isDark ? CustomDark : CustomLight}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />

          {/* MAIN TABS */}
          <Stack.Screen 
            name="MainTabs"
            children={(props) => (
              <BottomTabs {...props} setIsDark={setIsDark} />
            )}
          />

          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Accelerometer" component={AccelerometerScreen} />
          <Stack.Screen name="MoodDetails" component={MoodDetailsScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
