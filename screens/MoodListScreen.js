import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function MoodListScreen({ navigation }) {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET request
  const fetchMoods = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
      setMoods(response.data);
    } catch (error) {
      console.error('Error fetching moods:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoods();
  }, []);

  // PUT request (simulated update)
  const updateMood = async (id) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: 'Updated Mood Title',
        body: 'Feeling better today!',
      });
      alert(`Mood ${id} updated!`);
      console.log(response.data);
    } catch (error) {
      console.error('Error updating mood:', error);
    }
  };

  // POST request (simulated add)
  const addMood = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'New Mood',
        body: 'Feeling excited!',
        userId: 1,
      });
      alert('New mood added!');
      console.log(response.data);
    } catch (error) {
      console.error('Error adding mood:', error);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="purple" style={{ marginTop: 50 }} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood List (GET, POST, PUT)</Text>
      <Button title="Add New Mood (POST)" onPress={addMood} />
      <FlatList
        data={moods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.moodTitle}>{item.title}</Text>
            <Button title="Update (PUT)" onPress={() => updateMood(item.id)} />
          </View>
        )}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  moodTitle: { fontSize: 16, fontWeight: '500', marginBottom: 5 },
});
