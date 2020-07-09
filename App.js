import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem'

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Develop first app', key: '1'},
    {text: 'Workout', key: '2'},
    {text: 'Help Stella at Together', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});