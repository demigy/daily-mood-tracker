// screens/MoodHistoryScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Title, Paragraph } from "react-native-paper";

export default function MoodHistoryScreen() {
  return (
    <View style={styles.container}>
      <Title>Mood History</Title>
      <Paragraph style={{marginTop:12}}>
        This view can be used to display local (AsyncStorage) or remote (API) saved moods.
        For the demo we fetch sample data in MoodList.
      </Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:"center",alignItems:"center",padding:20}
});
