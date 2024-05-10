import { Button, StyleSheet, View } from "react-native";
import React from "react";
import CoursesScreen from "../../src/screens/CoursesScreen";
import CounterScreen from "../../src/screens/CounterScreen";
import Javascript from "../../components/Javascript";
import ReactNative from "../../components/ReactNative";
import ReactCourse from "../../components/ReactCourse";
import Tailwind from "../../components/Tailwind";
import HomePage from "../../src/screens/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Js" component={Javascript} />
        <Stack.Screen name="Java" component={Javascript} />
        <Stack.Screen name="RN" component={ReactNative} />
        <Stack.Screen name="React" component={ReactCourse} />
        <Stack.Screen name="Bootstrap" component={Javascript} />
        <Stack.Screen name="Tailwind" component={Tailwind} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
