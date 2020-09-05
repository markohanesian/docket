import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
// import { Button } from 'react-native';
// components
import Header from '../components/Header';

const Home = ({ navigation }) => {
  return (
    // <Button
    //   title="Go to Home"
    //   onPress={() => navigation.navigate('Home')}
    // />
    <TouchableWithoutFeedback>
      <View>
        <Header />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Home;