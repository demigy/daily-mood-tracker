import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function AccelerometerScreen({ navigation }) {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [subscription, setSubscription] = useState(null);
  const [message, setMessage] = useState('');

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);

        const { x, y, z } = accelerometerData;
        const totalForce = Math.sqrt(x * x + y * y + z * z);
        if (totalForce > 1.8) {
          setMessage('📱 You shook your phone!');
        } else {
          setMessage('');
        }
      })
    );
    Accelerometer.setUpdateInterval(500); // update every 0.5s
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accelerometer Data</Text>
      <Text>X: {x.toFixed(2)}</Text>
      <Text>Y: {y.toFixed(2)}</Text>
      <Text>Z: {z.toFixed(2)}</Text>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <View style={styles.buttons}>
        <Button title="Stop Sensor" onPress={_unsubscribe} />
        <Button title="Start Sensor" onPress={_subscribe} />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  message: { marginTop: 15, fontSize: 18, color: 'purple' },
  buttons: { marginTop: 20, flexDirection: 'row', gap: 10 },
});
