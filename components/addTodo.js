import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

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
            <Button
                onPress={() => submitHandler(text)} 
                title='add game' 
                color='#2DCCCF'
                accessibilityLabel='click this button to add game'
                />
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
    }
})