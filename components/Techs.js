import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Techs(props) {
  console.log(props.imagePath);
  console.log(props.title);
  console.log(props.desc);

  return (
    <View>
      <Image style={styles.img} source={props.imagePath} />
      <View style={styles.descTitle}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
      <Button
        title="İncele"
        onPress={() => props.navigation.navigate(props.navId)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    objectFit: "contain",
  },
  descTitle: {
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 40,
    color: "red",
  },
  desc: {
    fontSize: 30,
    color: "blue",
  },
});
