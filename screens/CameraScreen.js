// screens/CameraScreen.js
import React, { useRef } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function CameraScreen({ navigation }) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) return <View style={styles.center}><Text>Requesting permission...</Text></View>;
  if (!permission.granted) return (
    <View style={styles.center}>
      <Text>Camera permission is required</Text>
      <Button title="Grant" onPress={requestPermission} />
    </View>
  );

  const takePhoto = async () => {
    try {
      if (cameraRef.current && cameraRef.current.takePictureAsync) {
        const photo = await cameraRef.current.takePictureAsync();
        alert("Photo captured (demo)");
        console.log(photo.uri);
      } else {
        alert("Camera not available (demo)");
      }
    } catch (e) {
      console.error(e);
      alert("Capture failed");
    }
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing="back" />
      <View style={styles.controls}>
        <Button title="Capture" onPress={takePhoto} />
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"#000"},
  camera:{flex:1},
  controls:{padding:12,flexDirection:"row",justifyContent:"space-around"},
  center:{flex:1,justifyContent:"center",alignItems:"center"}
});
