// screens/HomeScreen.js
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Text, Button, Avatar } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Daily Mood Tracker</Text>

      <Card style={styles.card}>
        <Card.Title
          title="Quick Actions"
          subtitle="Add mood, camera, sensors, history"
          left={(props) => <Avatar.Icon {...props} icon="calendar" />}
        />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate("AddMood")} style={styles.btn}>
            Add New Mood
          </Button>

          <Button mode="outlined" onPress={() => navigation.navigate("MoodHistory")} style={styles.btn}>
            View Mood History
          </Button>

          <Button mode="outlined" onPress={() => navigation.navigate("Camera")} style={styles.btn}>
            Open Camera
          </Button>

          <Button mode="outlined" onPress={() => navigation.navigate("Accelerometer")} style={styles.btn}>
            Accelerometer Demo
          </Button>

          <Button mode="text" onPress={() => navigation.navigate("ApiDemo")} style={styles.btn}>
            API Demo (GET / POST / PUT)
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 36 },
  header: { textAlign: "center", fontSize: 26, fontWeight: "700", marginBottom: 18 },
  card: { borderRadius: 12, marginBottom: 14 },
  btn: { marginTop: 10 },
});
