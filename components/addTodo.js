import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('')
    
    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput 
                style={addTodoStyles.input}
                placeholder='add a game to the docket...'
                placeholderTextColor='white'
                onChangeText={changeHandler}
            />
            <TouchableOpacity style={addTodoStyles.btn} onPress={() => submitHandler(text)}>
                <Text style={addTodoStyles.btnText}>add game</Text>
            </TouchableOpacity>
        </View>
    )
}

const addTodoStyles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        // borderWidth: 2,
        // borderColor: 'white',
        backgroundColor: '#2DCCCF',
        flexDirection: 'row',
        color: 'white'
    },
    btn: {
        height: 45,
        // borderRadius: 8,
        elevation: 3,
        backgroundColor: "#AB47BC",
        justifyContent: "center",
        paddingHorizontal: 8
      },
      btnText: {
        color: "#fff",
      },
});