import { Button, StyleSheet, View } from "react-native";
import React from "react";
import CoursesScreen from "../../src/screens/CoursesScreen";
import CounterScreen from "../../src/screens/CounterScreen";
import CounterScreenWithReducer from "../../src/screens/CounterScreenWithReducer";
import BoxScreen from "../../src/screens/BoxScreen";
import BoxScreenWithReducer from "../../src/screens/BoxScreenWithReducer";
import Javascript from "../../components/jsFiles/Javascript";
import ReactNative from "../../components/jsFiles/ReactNative";
import ReactCourse from "../../components/jsFiles/ReactCourse";
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
        <Stack.Screen name="Boxes" component={BoxScreen} />
        <Stack.Screen name="BoxesReducer" component={BoxScreenWithReducer} />
        <Stack.Screen
          name="CounterWithReducer"
          component={CounterScreenWithReducer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
