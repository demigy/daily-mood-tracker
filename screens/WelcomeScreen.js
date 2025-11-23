// screens/WelcomeScreen.js
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text } from "react-native-paper";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to Daily Mood Tracker</Text>
      <Text style={styles.subtitle}>
        Record your mood, add a photo, and track your emotional trends.
      </Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate("Login")}
        style={styles.btn}
      >
        Login
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Register")}
        style={styles.btn}
      >
        Register
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  logo: { width: 140, height: 140, marginBottom: 16, borderRadius: 70 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 6 },
  subtitle: { textAlign: "center", color: "#6B7280", marginBottom: 24 },
  btn: { width: "80%", marginVertical: 6 },
});
