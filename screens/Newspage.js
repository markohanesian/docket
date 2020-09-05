import 'react-native-gesture-handler';
import { State } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Button, View, FlatList, StyleSheet, Text, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../components/header';

const NewsPage = () => {
    return (
      <View style={styles.Newsview}>
        <Text>Hello World!</Text>
      </View>
    );
  };
  

const styles = StyleSheet.create({
    Newsview: {
        paddingVertical: 0,
        textAlign: 'center',
        color: '#2DCCCF',
        fontSize: 20,
        fontWeight: 'bold',
    },
  });

export default NewsPage;
