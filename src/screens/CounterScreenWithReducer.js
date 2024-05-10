import { StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";
import CustomButton from "@/components/jsFiles/CustomButton";

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + action.payload };
    case "dec":
      return { ...state, count: state.count - action.payload };
  }
};

export default function CounterScreenWithReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View style={styles.content}>
      <CustomButton
        title="+"
        onPress={() => dispatch({ type: "inc", payload: 1 })}
      />
      <Text style={styles.counterText}>{state.count}</Text>
      <CustomButton
        title="-"
        onPress={() => dispatch({ type: "dec", payload: 1 })}
      />
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
