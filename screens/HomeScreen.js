import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Mood</Text>
      <Button title="Add New Mood" onPress={() => navigation.navigate('Add Mood')} />
      <Button title="View Details" onPress={() => navigation.navigate('MoodDetails')} />
      <Button title="Open Camera" onPress={() => navigation.navigate('Camera')} />
        <Button title="Open Accelerometer" onPress={() => navigation.navigate('Accelerometer')} />
            <Button title="Edit Mood" onPress={() => navigation.navigate('EditMood')} />
            <Button title="View Moods (API)" onPress={() => navigation.navigate('MoodList')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
});
