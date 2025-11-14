import React from "react";
import { Card, Text } from "react-native-paper";

export default function MoodCard({ mood, notes }) {
  return (
    <Card style={{ marginBottom: 15 }}>
      <Card.Title title={mood} />
      <Card.Content>
        <Text>{notes}</Text>
      </Card.Content>
    </Card>
  );
}
