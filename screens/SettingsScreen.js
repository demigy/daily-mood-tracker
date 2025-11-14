// screens/SettingsScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Switch } from "react-native-paper";

export default function SettingsScreen({ route }) {
  const setIsDark = route?.params?.setIsDark || (() => {});

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Appearance</Title>
          <Paragraph>Toggle dark theme for the app</Paragraph>

          <View style={styles.row}>
            <Paragraph>Dark Mode</Paragraph>
            <Switch value={false} onValueChange={setIsDark} />
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  row:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:12}
});
