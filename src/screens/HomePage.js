import { Button, StyleSheet, View } from "react-native";
import React from "react";

export default function HomePage({ navigation }) {
  return (
    <View>
      <Button title="Courses" onPress={() => navigation.navigate("Courses")} />
      <Button title="Counter" onPress={() => navigation.navigate("Counter")} />
      <Button title="Boxes" onPress={() => navigation.navigate("Boxes")} />
      <Button
        title="CounterWithReducer"
        onPress={() => navigation.navigate("CounterWithReducer")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
