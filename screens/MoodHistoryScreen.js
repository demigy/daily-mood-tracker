import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MoodHistoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood History</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('MoodDetails')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
});
