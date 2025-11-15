// screens/HomeScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Title, Text } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Daily Mood Tracker</Title>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("AddMood")}
      >
        Quick Add Mood
      </Button>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("History")}
      >
        View Mood History
      </Button>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("Camera")}
      >
        Open Camera
      </Button>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("Settings")}
      >
        Settings
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: "center",
    color: "#6200EE",
  },
  button: {
    marginVertical: 10,
    paddingVertical: 8,
  },
});
