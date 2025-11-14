// screens/MoodDetailsScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Title, Paragraph, Button } from "react-native-paper";

export default function MoodDetailsScreen({ route, navigation }) {
  const item = route.params?.item || { title: "No data", body: "—" };

  return (
    <View style={styles.container}>
      <Title>{item.title}</Title>
      <Paragraph style={{marginVertical:12}}>{item.body}</Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate("EditMood")}>Edit Mood</Button>
    </View>
  );
}

const styles = StyleSheet.create({ container:{flex:1,padding:20} });
