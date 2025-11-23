// screens/ProfileScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Avatar, Text, Button } from "react-native-paper";

export default function ProfileScreen({ navigation }) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Profile" />
      </Appbar.Header>

      <View style={styles.container}>
        <Avatar.Icon size={96} icon="account" style={{ backgroundColor: "#6B21A8" }} />
        <Text style={styles.name}>User</Text>

        <Button mode="outlined" style={styles.btn} onPress={() => navigation.navigate("Settings")}>
          Settings
        </Button>

        <Button mode="contained" style={styles.btn} onPress={() => navigation.replace("Welcome")}>
          Logout
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20 },
  name: { fontSize: 20, fontWeight: "700", marginVertical: 12 },
  btn: { marginTop: 10, width: "60%" },
});
