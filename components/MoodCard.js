// components/MoodCard.js
import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function MoodCard({ mood, onPress }) {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Title title={mood.title} subtitle={mood.date} />
      {mood.photo ? <Card.Cover source={{ uri: mood.photo }} /> : null}
      <Card.Content>
        <Text numberOfLines={3} style={styles.note}>
          {mood.note}
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 14,
    borderRadius: 12,
    overflow: "hidden",
  },
  note: {
    marginTop: 8,
    color: "#374151",
  },
});
