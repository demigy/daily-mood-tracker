import React, { useState, useEffect, useRef } from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const picture = await cameraRef.current.takePictureAsync();
        setPhoto(picture.uri);
        console.log('Photo taken:', picture.uri);
      } catch (error) {
        console.log('Error taking picture:', error);
      }
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.center}>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.center}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!photo ? (
        <>
          <Camera
            style={styles.camera}
            type={cameraType}
            ref={cameraRef}
            ratio="16:9"
          />
          <View style={styles.controls}>
            <Button
              title="Flip Camera"
              onPress={() => {
                setCameraType(
                  cameraType === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            />
            <Button title="Take Picture" onPress={takePicture} />
            <Button title="Go Back" onPress={() => navigation.goBack()} />
          </View>
        </>
      ) : (
        <>
          <Image source={{ uri: photo }} style={styles.preview} />
          <View style={styles.controls}>
            <Button title="Retake" onPress={() => setPhoto(null)} />
            <Button title="Go Back" onPress={() => navigation.goBack()} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  camera: { flex: 1 },
  controls: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  preview: { flex: 1, resizeMode: 'contain' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
