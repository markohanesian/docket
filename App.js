import React from "react";
import "react-native-gesture-handler";
// required imports for navigation package
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// themes via react-native-elements
import { ThemeProvider, Button } from 'react-native-elements';
// components for pages
import Header from './components/Header';
import ToDoList from './components/ToDoList';
// authentication
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const theme = {
  Button: {
    titleStyle: {
      color: 'white',
    },
  },
};


function HomeScreen({ navigation }) {
  return (
    <ThemeProvider theme={theme}>
      <Button title="Go to News" onPress={() => navigation.navigate("News")} />
      <Header />
      <ToDoList />
    </ThemeProvider>
  );
}

function NewsScreen({ navigation }) {
  return (
    <ThemeProvider theme={theme}>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Header />
    </ThemeProvider>
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
