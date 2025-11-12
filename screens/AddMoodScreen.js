import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AddMoodScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Mood</Text>
      <Button title="Save Mood" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
});
