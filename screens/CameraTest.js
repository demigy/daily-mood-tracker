// screens/CameraTest.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function CameraTest() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) return <View style={styles.center}><Text>Requesting...</Text></View>;
  if (!permission.granted) return (
    <View style={styles.center}>
      <Text>Camera permission required</Text>
      <Button title="Grant" onPress={requestPermission} />
    </View>
  );

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1},
  camera:{flex:1},
  center:{flex:1,justifyContent:"center",alignItems:"center"}
});
