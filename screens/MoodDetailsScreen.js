import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MoodDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Details</Text>
      <Text>Here you can see your mood details.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
