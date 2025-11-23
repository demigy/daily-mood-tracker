// screens/RegisterScreen.js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // mock register
    navigation.replace("Tabs");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create account</Text>

      <TextInput label="Full name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput label="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput label="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />

      <Button mode="contained" onPress={handleRegister} style={styles.btn}>
        Create account
      </Button>

      <Button onPress={() => navigation.navigate("Login")} style={styles.link}>
        Already have an account? Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "700", textAlign: "center", marginBottom: 12 },
  input: { marginBottom: 12 },
  btn: { marginTop: 6 },
  link: { marginTop: 10 },
});
