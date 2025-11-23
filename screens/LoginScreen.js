// screens/LoginScreen.js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // simple mock auth; expand if needed
    navigation.replace("Tabs");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput label="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleLogin} style={styles.loginBtn}>
        Login
      </Button>

      <Button onPress={() => navigation.navigate("Register")} style={styles.link}>
        No account? Register
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 26, fontWeight: "700", textAlign: "center", marginBottom: 16 },
  input: { marginBottom: 12 },
  loginBtn: { marginTop: 8 },
  link: { marginTop: 12 },
});
