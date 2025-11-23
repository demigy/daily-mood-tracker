// navigation/AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import BottomTabs from "./BottomTabs";

import AddMoodScreen from "../screens/AddMoodScreen";
import MoodHistoryScreen from "../screens/MoodHistoryScreen";
import MoodDetailsScreen from "../screens/MoodDetailsScreen";
import EditMoodScreen from "../screens/EditMoodScreen";

import CameraScreen from "../screens/CameraScreen";
import AccelerometerScreen from "../screens/AccelerometerScreen";
import ApiDemoScreen from "../screens/ApiDemoScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,        // <-- THIS FIXES THE BACK BUTTON
      }}
    >
      {/* AUTH */}
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />

      {/* MAIN APP */}
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />

      {/* MOOD SCREENS */}
      <Stack.Screen name="AddMood" component={AddMoodScreen} />
      <Stack.Screen name="MoodHistory" component={MoodHistoryScreen} />
      <Stack.Screen name="MoodDetails" component={MoodDetailsScreen} />
      <Stack.Screen name="EditMood" component={EditMoodScreen} />

      {/* HARDWARE / SENSORS */}
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Accelerometer" component={AccelerometerScreen} />

      {/* EXTRA SCREENS */}
      <Stack.Screen name="ApiDemo" component={ApiDemoScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
