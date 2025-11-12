import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';

export default function AddMoodScreen({ navigation }) {
  const [mood, setMood] = useState('');

  // Example POST request (for your report)
  const saveMood = async () => {
    if (!mood) {
      Alert.alert('Please enter a mood before saving!');
      return;
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood }),
      });

      const data = await response.json();
      console.log('Mood saved:', data);
      Alert.alert('Mood saved successfully!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error saving mood:', error);
      Alert.alert('Failed to save mood');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Mood</Text>
      <TextInput
        style={styles.input}
        placeholder="How are you feeling today?"
        value={mood}
        onChangeText={setMood}
      />
      <Button title="Save Mood" onPress={saveMood} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '100%',
    padding: 10,
    marginBottom: 15,
  },
});
