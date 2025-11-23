// screens/SettingsScreen.js
import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Text, Switch } from "react-native-paper";
import { ThemeContext } from "../context/ThemeContext";

export default function SettingsScreen({ navigation }) {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Settings" />
      </Appbar.Header>

      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={{ fontSize: 16 }}>Dark mode</Text>
          <Switch value={isDark} onValueChange={toggleTheme} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 16 },
});
