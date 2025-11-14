// screens/AccelerometerScreen.js
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { Accelerometer } from "expo-sensors";

export default function AccelerometerScreen({ navigation }) {
  const [data, setData] = useState({ x:0,y:0,z:0 });

  useEffect(() => {
    const sub = Accelerometer.addListener(acc => setData(acc));
    Accelerometer.setUpdateInterval(300);
    return () => sub && sub.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Accelerometer</Title>
          <Paragraph>X: {data.x.toFixed(2)}</Paragraph>
          <Paragraph>Y: {data.y.toFixed(2)}</Paragraph>
          <Paragraph>Z: {data.z.toFixed(2)}</Paragraph>
          <Button mode="contained" onPress={() => navigation.goBack()} style={{marginTop:12}}>Back</Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({ container:{flex:1,padding:20,justifyContent:"center"} });
