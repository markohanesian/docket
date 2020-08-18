import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.logo}>
                <MaterialIcons name="gavel" size={58} color="#AB47BC"/>
            </View>
            <Text style={styles.title}>Docket</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        // display: 'flex',
        alignItems: 'center',
        // paddingVertical: 50,
        // backgroundColor: '#27513b'
    },
    title: {
        paddingVertical: 0,
        textAlign: 'center',
        color: '#2DCCCF',
        fontSize: 40,
        fontWeight: 'bold',
    },
    logo: {
        paddingTop: 20,
        paddingBottom: 0,
    }
  });