// screens/CameraTest.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function CameraTest() {
  return (
    <View style={styles.container}>
      <Text>Camera test placeholder (use CameraScreen for actual camera)</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
