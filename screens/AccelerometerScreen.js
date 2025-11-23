// screens/AccelerometerScreen.js
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Appbar } from "react-native-paper";
import { Accelerometer } from "expo-sensors";

export default function AccelerometerScreen({ navigation }) {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscriber = Accelerometer.addListener((acc) => setData(acc));
    Accelerometer.setUpdateInterval(300);

    return () => subscriber && subscriber.remove();
  }, []);

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Accelerometer" />
      </Appbar.Header>

      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">X: {data.x.toFixed(3)}</Text>
            <Text variant="titleMedium">Y: {data.y.toFixed(3)}</Text>
            <Text variant="titleMedium">Z: {data.z.toFixed(3)}</Text>
          </Card.Content>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: { padding: 12, borderRadius: 12 },
});
