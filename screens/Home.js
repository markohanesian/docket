import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
// components
// import NewsButton from '../components/NewsButton';
import Header from '../components/Header';
import ToDoList from '../components/ToDoList';
import NewsButton from '../components/NewsButton';

const Home = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={{backgroundColor: '#111117',}}>
        <NewsButton />
        <Header />
        <ToDoList />
      </View>
    </TouchableWithoutFeedback>
  
  );
}

export default Home;