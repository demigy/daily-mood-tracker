import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Title } from "react-native-paper";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Daily Mood Tracker</Title>
      <Text style={styles.subtitle}>Track your feelings every day</Text>

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
      >
        Register
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 30 },
  title: { fontSize: 32, textAlign: "center", marginBottom: 10 },
  subtitle: { textAlign: "center", marginBottom: 30 },
  btn: { marginBottom: 10 }
});
