import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.text}>This app was created as a playground to learn React Native by Chikwado Ofor.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'lucida',
        fontSize: 20,
        lineHeight: 28

    }
});