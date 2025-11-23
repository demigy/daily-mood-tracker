// screens/MoodDetailsScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Button, Appbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MoodDetailsScreen({ route, navigation }) {
  const mood = route.params?.mood;

  const remove = async () => {
    const raw = await AsyncStorage.getItem("moods");
    const arr = raw ? JSON.parse(raw) : [];
    const filtered = arr.filter((it) => it.id !== mood.id);
    await AsyncStorage.setItem("moods", JSON.stringify(filtered));
    navigation.goBack();
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Mood Details" />
      </Appbar.Header>

      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title={mood.title} subtitle={mood.date} />
          {mood.photo ? <Card.Cover source={{ uri: mood.photo }} style={{ height: 240 }} /> : null}
          <Card.Content>
            <Text style={{ marginTop: 12 }}>{mood.note}</Text>
          </Card.Content>
        </Card>

        <Button mode="contained" onPress={() => navigation.navigate("EditMood", { mood })} style={styles.btn}>
          Edit
        </Button>
        <Button mode="contained" buttonColor="#ef4444" onPress={remove} style={styles.btn}>
          Delete
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { marginBottom: 12 },
  btn: { marginTop: 10 },
});
