import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Docket</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        // paddingVertical: 50,
        // backgroundColor: '#27513b'
    },
    title: {
        paddingVertical: 60,
        textAlign: 'center',
        color: '#135657',
        fontSize: 40,
        fontWeight: 'bold',
    }
  });