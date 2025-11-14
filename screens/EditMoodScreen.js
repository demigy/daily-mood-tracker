// screens/EditMoodScreen.js
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Card, Title, TextInput, Button } from "react-native-paper";

export default function EditMoodScreen({ navigation }) {
  const [mood, setMood] = useState("");

  const update = async () => {
    if (!mood) { Alert.alert("Enter mood"); return; }
    try {
      // demo PUT to placeholder
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ title:mood })
      });
      await res.json();
      Alert.alert("Updated (demo)");
      navigation.navigate("MoodList");
    } catch (e) { Alert.alert("Update failed"); }
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Edit Mood</Title>
          <TextInput label="New mood" value={mood} onChangeText={setMood} mode="outlined" style={{marginTop:12}} />
          <Button mode="contained" onPress={update} style={{marginTop:12}}>Update</Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({ container:{flex:1,padding:20} });
