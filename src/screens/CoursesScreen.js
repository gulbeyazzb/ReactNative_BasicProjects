import { Button, FlatList, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Techs from "../../components/Techs";

export default function CoursesScreen({ navigation }) {
  const courses = [
    {
      name: "Javascript",
      id: 1,
      src: "../../assets/images/js.jpg",
      desc: "Kapsamlı JS Kursu",
      navId: "Js",
    },
    {
      name: "Java",
      id: 2,
      src: "../../assets/images/js.jpg",
      navId: "Java",
      desc: "Kapsamlı JS Kursu",
    },
    {
      name: "React Native",
      id: 3,
      src: "../../assets/images/reactN.png",
      desc: "Kapsamlı JS Kursu",
      navId: "RN",
    },
    {
      name: "Bootstrap",
      id: 4,
      src: "../../assets/images/reactN.png",
      desc: "Kapsamlı JS Kursu",
      navId: "Bootstrap",
    },
    {
      name: "Tailwind",
      id: 5,
      src: "../../assets/images/reactN.png",
      desc: "Kapsamlı JS Kursu",
      navId: "Tailwind",
    },
    {
      name: "React",
      id: 6,
      src: "../../assets/images/reactN.png",
      desc: "Kapsamlı JS Kursu",
      navId: "React",
    },
  ];

  return (
    <View>
      <FlatList
        data={courses}
        //horizontal // ifadeleri yatay olarak sıralar.
        //showsHorizontalScrollIndicator={false} //yataydaki scroll'u kaldırır.
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ScrollView>
              <Techs
                title={item.name}
                imagePath={require("../../assets/images/reactN.png")}
                desc={item.desc}
                navigation={navigation}
                navId={item.navId}
              />
            </ScrollView>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
