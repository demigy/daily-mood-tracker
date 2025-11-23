// screens/MoodHistoryScreen.js
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Appbar, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MoodCard from "../components/MoodCard";

export default function MoodHistoryScreen({ navigation }) {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", load);
    load();
    return unsubscribe;
  }, [navigation]);

  async function load() {
    const raw = await AsyncStorage.getItem("moods");
    setMoods(raw ? JSON.parse(raw) : []);
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Mood History" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.container}>
        {moods.length === 0 ? (
          <Text style={{ textAlign: "center", marginTop: 30 }}>No moods recorded yet.</Text>
        ) : (
          moods.map((m) => (
            <MoodCard key={m.id} mood={m} onPress={() => navigation.navigate("MoodDetails", { mood: m })} />
          ))
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 60 },
});
