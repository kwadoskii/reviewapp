import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Header({name}) {
    const navigation = useNavigation();
    
    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View>
            <View style={styles.header}>
                <MaterialCommunityIcons style={styles.icon} name='menu' size={40} onPress={() => openMenu()}/>
                <Text style={styles.headerText}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly"
    },
    headerText: {
        // fontWeight: 'bold',
        fontSize: 21,
        color: "#ffe",
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: -16,
        color: "#fff"
    }
})

