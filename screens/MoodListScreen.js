// screens/MoodListScreen.js
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import api from "../utils/api";

export default function MoodListScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((r) => setPosts(r.data.slice(0, 10))).catch(() => {});
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Demo List (jsonplaceholder)</Text>
      {posts.map((p) => (
        <Card key={p.id} style={styles.card}>
          <Card.Title title={p.title} />
          <Card.Content>
            <Text numberOfLines={2}>{p.body}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  card: { marginBottom: 10 },
});
