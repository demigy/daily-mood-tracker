// screens/AddMoodScreen.js
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Card, Title, TextInput, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddMoodScreen({ navigation }) {
  const [mood, setMood] = useState("");
  const [notes, setNotes] = useState("");

  const saveLocal = async () => {
    if (!mood) { Alert.alert("Please enter mood"); return; }
    try {
      const newItem = { id: Date.now().toString(), title: mood, body: notes, date: new Date().toISOString() };
      const raw = await AsyncStorage.getItem("moods");
      const arr = raw ? JSON.parse(raw) : [];
      arr.unshift(newItem);
      await AsyncStorage.setItem("moods", JSON.stringify(arr));
      Alert.alert("Saved locally");
      navigation.navigate("MoodList");
    } catch (e) {
      console.error(e);
      Alert.alert("Save failed");
    }
  };

  // also send to placeholder API (demo)
  const saveRemote = async () => {
    if (!mood) { Alert.alert("Please enter mood"); return; }
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ title: mood, body: notes, userId: 1 })
      });
      const data = await res.json();
      Alert.alert("Saved (demo)", `id: ${data.id}`);
      navigation.navigate("MoodList");
    } catch (e) {
      Alert.alert("Remote save failed");
    }
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Add Mood</Title>
          <TextInput label="Mood (Happy, Sad...)" value={mood} onChangeText={setMood} mode="outlined" style={styles.input} />
          <TextInput label="Notes (optional)" value={notes} onChangeText={setNotes} mode="outlined" multiline style={styles.input} />
          <Button mode="contained" onPress={saveLocal} style={{marginTop:12}}>Save Locally</Button>
          <Button mode="outlined" onPress={saveRemote} style={{marginTop:8}}>Send to Demo API (POST)</Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  input:{marginTop:12}
});
