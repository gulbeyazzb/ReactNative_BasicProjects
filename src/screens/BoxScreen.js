import { Button, FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";

export default function BoxScreen() {
  const [boxes, setBoxes] = useState([]);

  const randomColors = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
  return (
    <View>
      <Button
        title="Add new a Box"
        onPress={() => setBoxes([...boxes, randomColors()])}
      />
      <FlatList
        data={boxes}
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
