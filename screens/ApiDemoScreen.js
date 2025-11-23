// screens/ApiDemoScreen.js
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Text, Card, TextInput } from "react-native-paper";
import api from "../utils/api";

export default function ApiDemoScreen() {
  const [title, setTitle] = useState("");
  const [out, setOut] = useState("");

  const doGet = async () => {
    try {
      const r = await api.get("/posts/1");
      setOut(JSON.stringify(r.data, null, 2));
    } catch (e) {
      setOut(String(e));
    }
  };

  const doPost = async () => {
    try {
      const r = await api.post("/posts", { title });
      setOut(JSON.stringify(r.data, null, 2));
    } catch (e) {
      setOut(String(e));
    }
  };

  const doPut = async () => {
    try {
      const r = await api.put("/posts/1", { title });
      setOut(JSON.stringify(r.data, null, 2));
    } catch (e) {
      setOut(String(e));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>API Demo</Text>

      <TextInput label="Title" value={title} onChangeText={setTitle} style={{ marginBottom: 12 }} />

      <Button mode="contained" onPress={doGet} style={styles.btn}>GET</Button>
      <Button mode="contained" onPress={doPost} style={styles.btn}>POST</Button>
      <Button mode="contained" onPress={doPut} style={styles.btn}>PUT</Button>

      <Card style={{ marginTop: 14 }}>
        <Card.Content>
          <Text selectable>{out || "Response will appear here"}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 18 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  btn: { marginVertical: 8 },
});
