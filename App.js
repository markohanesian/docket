import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Header from './components/header';
export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Conan', key: '1'},
    {text: 'Stardew Valley', key: '1'},
    {text: 'Path of Exile', key: '1'},
  ]);


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
            <Text>{item.text}</Text>
            )}

            
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});