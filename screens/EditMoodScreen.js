// screens/EditMoodScreen.js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditMoodScreen({ route, navigation }) {
  const mood = route.params?.mood;
  const [title, setTitle] = useState(mood?.title || "");
  const [note, setNote] = useState(mood?.note || "");

  const save = async () => {
    const raw = await AsyncStorage.getItem("moods");
    const arr = raw ? JSON.parse(raw) : [];
    const updated = arr.map((it) => (it.id === mood.id ? { ...it, title, note } : it));
    await AsyncStorage.setItem("moods", JSON.stringify(updated));
    navigation.navigate("MoodHistory");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Mood</Text>
      <TextInput label="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput label="Note" value={note} onChangeText={setNote} style={styles.input} multiline />
      <Button mode="contained" onPress={save} style={styles.btn}>Save</Button>
      <Button onPress={() => navigation.goBack()} style={styles.btn}>Cancel</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  input: { marginBottom: 12 },
  btn: { marginTop: 8 },
});
