import React from "react";
import "react-native-gesture-handler";
// required imports for navigation package
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// themes via react-native-elements
import { Button } from 'react-native-elements';
// components for pages
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function HomeScreen({ navigation }) {
  return (
    <>
      <Header />
      <Button title="Go to News" onPress={() => navigation.navigate("News")} />
      <ToDoList />
    </>
  );
}

function NewsScreen({ navigation }) {
  return (
    <>
      <Header />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{ title: "News" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
