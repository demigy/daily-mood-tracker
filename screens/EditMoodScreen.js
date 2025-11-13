import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

export default function EditMoodScreen({ navigation }) {
  const [mood, setMood] = useState('');
  const [id, setId] = useState('1'); // Example mood ID to update

  // Example PUT request (update mood)
  const updateMood = async () => {
    if (!mood) {
      Alert.alert('Please enter a mood before updating!');
      return;
    }

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood }),
      });

      const data = await response.json();
      console.log('Mood updated:', data);
      Alert.alert('Mood updated successfully!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error updating mood:', error);
      Alert.alert('Failed to update mood');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Mood</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new mood..."
        value={mood}
        onChangeText={setMood}
      />
      <Button title="Update Mood" onPress={updateMood} />
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
