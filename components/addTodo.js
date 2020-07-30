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
                style={styles.input}
                placeholder='add a game to the docket...'
                placeholderTextColor='white'
                onChangeText={changeHandler}
                // clearTextOnFocus='true'
            />
            <TouchableOpacity style={styles.btn} onPress={() => submitHandler(text)}>
                <Text style={styles.btnText}>add game</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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