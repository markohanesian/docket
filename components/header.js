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
        height: 80,
        paddingVertical: 20,
        backgroundColor: '#27513b'
    },
    title: {
        textAlign: 'center',
        color: '#ecb87f',
        fontSize: 30,
        fontWeight: 'bold',
    }
  });