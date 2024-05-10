import { Button, FlatList, StyleSheet, View } from "react-native";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "addBox":
      return {
        ...state,
        boxes: [...state.boxes, action.payload],
      };
  }
};

export default function BoxScreenWithReducer() {
  const [state, dispatch] = useReducer(reducer, { boxes: [] });

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

  return (
    <View>
      <Button
        title="Add a new box"
        onPress={() => dispatch({ type: "addBox", payload: randomColor() })}
      />
      <FlatList
        data={state.boxes}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                marginVertical: 20,
                marginHorizontal: "auto",
                width: 150,
                height: 150,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
