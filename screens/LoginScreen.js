import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Title>Login</Title>

      <TextInput 
        label="Email" 
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
      />

      <TextInput 
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
      />

      <Button mode="contained" onPress={() => navigation.navigate("MainTabs")}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 25 },
  input: { marginBottom: 15 }
});
