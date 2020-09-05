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
        height: 140,
        alignItems: 'center',
        backgroundColor: '#111117',
    },
    title: {
        paddingBottom: 20,
        textAlign: 'center',
        color: '#2DCCCF',
        fontSize: 40,
        fontWeight: 'bold',
    },
    logo: {
        paddingTop: 15,
        paddingBottom: 0,
    }
  });