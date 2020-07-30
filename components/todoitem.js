import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item,pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <View>
                    <Text style={styles.itemText}>{item.text}</Text>
                </View>
                <View style={styles.icon}>
                    <MaterialIcons name="delete" size={18} color="#AB47BC" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'white',
        borderWidth: 1,
        // borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        shadowColor: '#135657',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        justifyContent: 'space-between',
    },
    itemText: {
        marginLeft: 10,
        color: 'white',
    },
    icon: {
        paddingRight: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
  });