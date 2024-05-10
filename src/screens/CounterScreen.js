import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/jsFiles/CustomButton";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.content}>
      <CustomButton title="+" onPress={() => setCounter(counter + 1)} />
      <Text style={styles.counterText}>{counter}</Text>

      <CustomButton title="-" onPress={() => setCounter(counter - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    position: "absolute",
    top: "40%",
    left: "55%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },

  counterText: {
    color: "red",
    fontSize: 80,
  },
});
