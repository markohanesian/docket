import React from "react";
import "react-native-gesture-handler";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// screens
import Home from "./screens/Home";
import News from "./screens/News";
// authentication
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


function HomeScreen({ navigation }) {
  return (
    <>
      <Button title="Go to News" onPress={() => navigation.navigate("News")} />
      <Home />
    </>
  );
}

function NewsScreen() {
  return (
    // <Button
    //   title="Go to Home"
    //   onPress={() => navigation.navigate('Home')}
    // />
    <News />
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
