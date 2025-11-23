// screens/AddMoodScreen.js
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddMoodScreen({ route, navigation }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const photo = route.params?.photo || null;

  useEffect(() => {
    // if you want to prefill values or handle route params
  }, [route]);

  const save = async () => {
    if (!title) return alert("Please enter a mood title");
    const item = {
      id: Date.now().toString(),
      title,
      note,
      photo,
      date: new Date().toLocaleString(),
    };

    const raw = await AsyncStorage.getItem("moods");
    const arr = raw ? JSON.parse(raw) : [];
    arr.unshift(item);
    await AsyncStorage.setItem("moods", JSON.stringify(arr));

    navigation.navigate("MoodHistory");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Mood</Text>

      {photo ? <Image source={{ uri: photo }} style={styles.photo} /> : null}

      <TextInput label="Mood title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput label="Notes" value={note} onChangeText={setNote} multiline style={styles.input} />

      <Button mode="contained" onPress={save} style={styles.btn}>
        Save Mood
      </Button>

      <Button onPress={() => navigation.goBack()} style={styles.btn}>
        Cancel
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12, textAlign: "center" },
  photo: { width: "100%", height: 220, borderRadius: 10, marginBottom: 12 },
  input: { marginBottom: 12 },
  btn: { marginTop: 8 },
});
