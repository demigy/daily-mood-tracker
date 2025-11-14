// screens/HomeScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Title, Paragraph, Card, Button, FAB } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.wrap}>
      <Title style={styles.title}>Today's Mood</Title>
      <Paragraph style={styles.subtitle}>Record how you feel quickly — keep track of patterns over time.</Paragraph>

      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate("Add Mood")}>Quick Add</Button>
          <Button style={styles.space} onPress={() => navigation.navigate("MoodList")}>View Mood History</Button>
          <Button style={styles.space} onPress={() => navigation.navigate("Camera")}>Open Camera</Button>
          <Button style={styles.space} onPress={() => navigation.navigate("Accelerometer")}>Accelerometer</Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Recent" subtitle="Quick summary" />
        <Card.Content>
          <Paragraph>No saved local items yet (demo uses JSONPlaceholder). Use Add to create demo mood entries.</Paragraph>
        </Card.Content>
      </Card>

      <FAB style={styles.fab} icon="plus" onPress={() => navigation.navigate("Add Mood")} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap:{flex:1,padding:20},
  title:{marginBottom:6},
  subtitle:{color:"#666", marginBottom:14},
  card:{marginBottom:12},
  space:{marginTop:10},
  fab:{position:"absolute", right:16, bottom:16}
});
