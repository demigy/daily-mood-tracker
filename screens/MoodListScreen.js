// screens/MoodListScreen.js
import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import MoodCard from "../components/MoodCard";

export default function MoodListScreen({ navigation }) {
  const [list,setList] = useState([]);
  const [loading,setLoading] = useState(true);

  const fetchMoods = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const data = await res.json();
      setList(data);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchMoods(); }, []);

  if (loading) return <ActivityIndicator style={{marginTop:40}} size="large" />;

  return (
    <FlatList
      data={list}
      keyExtractor={(i) => i.id.toString()}
      renderItem={({ item }) => <MoodCard item={{ title: item.title, body: item.body }} onPress={() => navigation.navigate("MoodDetails", { item })} />}
    />
  );
}
