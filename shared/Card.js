import React from "react";
import { View, StyleSheet } from "react-native";

export default function Card({ children }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        backgroundColor: "#fff",
        elevation: 3,
        marginHorizontal: 4,
        marginVertical: 6,
        shadowColor: "#333",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    },
});
