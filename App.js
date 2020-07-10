import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem'
import addTodo from './components/addTodo'
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Conan Exiles', key: '1'},
    {text: 'Stardew Valley', key: '2'},
    {text: 'Payday 2', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
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