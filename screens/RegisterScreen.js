// screens/RegisterScreen.js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Demo: just navigate to MainTabs
    navigation.replace("MainTabs");
  };

  return (
    <View style={styles.container}>
      <Title>Create account</Title>
      <TextInput label="Email" value={email} onChangeText={setEmail} style={styles.input} mode="outlined" />
      <TextInput label="Password" value={password} onChangeText={setPassword} style={styles.input} mode="outlined" secureTextEntry />
      <Button mode="contained" onPress={handleRegister}>Register</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:"center",padding:20},
  input:{marginBottom:12}
});
