import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { } from "react-native"

import { globalStyles, images } from '../styles/global';
import Card from '../shared/Card';

export default function ReviewDetails({ navigation, route }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={[globalStyles.paragraph, styles.text]}>{route.params.body}</Text>
                <View style={styles.rating}>
                    {/* <Text>Rating: </Text> */}
                    <Image style={styles.image} source={images.ratings[route.params.rating]} width={10} height={8} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        // height: 40,
    },
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee"
    },
    text: {
        fontFamily: "lucida",
        fontSize: 18
    }
});