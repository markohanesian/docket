import { State } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Button, View, FlatList, StyleSheet, Text, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './Header';
import TodoItem from './ToDoItem';
import AddTodo from './addTodo';

const ToDoList = () => {

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
      
        if(text.length > 3){
          setTodos((prevTodos) => {
            return [
              { text: text, key: Math.random().toString() },
              ...prevTodos
            ];
          });
        } else {
          Alert.alert('ERROR', 'game title must be more than 3 characters long', [
            {text: 'CLOSE', onPress: () => console.log('alert closed')}
          ]);
        }
        
      }

  return (
    <TouchableWithoutFeedback onPress= {() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard')
      }}>
        <View style={styles.container}>
          {/* <Button
            title="Go to News"
            onPress={() => navigation.navigate('News')}
          /> */}
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
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111117',
      opacity: 25,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    content: {
      flex: 1,
      padding: 40,
    },
    list: {
      flex: 1,
      marginTop: 20,
    }
  });

export default ToDoList;