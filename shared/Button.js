import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Button({onPress, title}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container} >
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        textTransform: "uppercase",
    },
    container: {
        alignItems: "center",
        backgroundColor: '#d53500',
        borderRadius: 15,
        justifyContent: "center",
        marginTop: 18,
        padding: 15
    },
});