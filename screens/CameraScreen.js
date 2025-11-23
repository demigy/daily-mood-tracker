import React, { useRef, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function CameraScreen({ navigation }) {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState(null);

  if (!permission) {
    return <Text>Requesting permissions...</Text>;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>No permission</Text>
        <Button onPress={requestPermission}>Grant Permission</Button>
      </View>
    );
  }

  const take = async () => {
    if (!cameraRef.current) return;

    try {
      const r = await cameraRef.current.takePictureAsync({ quality: 0.7 });
      setPhotoUri(r.uri);
    } catch (e) {
      alert("Capture failed");
    }
  };

  return (
    <View style={styles.container}>
      {!photoUri && (
        <CameraView style={styles.camera} ref={cameraRef} />
      )}

      {photoUri && (
        <Image source={{ uri: photoUri }} style={styles.preview} />
      )}

      <View style={styles.controls}>
        {photoUri ? (
          <>
            <Button mode="outlined" onPress={() => setPhotoUri(null)}>Retake</Button>
            <Button mode="contained" onPress={() => navigation.navigate("AddMood", { photo: photoUri })}>Use Photo</Button>
          </>
        ) : (
          <>
            <Button mode="contained" onPress={take}>Capture</Button>
            <Button mode="text" onPress={() => navigation.goBack()}>Back</Button>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  preview: { width: "100%", height: 360 },
  controls: { padding: 12, flexDirection: "row", justifyContent: "space-around" },
});
