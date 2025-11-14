// navigation/BottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import AddMoodScreen from '../screens/AddMoodScreen';
import MoodHistoryScreen from '../screens/MoodHistoryScreen';
import CameraScreen from '../screens/CameraScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          paddingBottom: 5,
          height: 60,
        },
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Add Mood"
        component={AddMoodScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={MoodHistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" size={26} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
