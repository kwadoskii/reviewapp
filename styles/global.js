import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    error:{
        color: 'red',
        fontSize: 17,
        fontWeight: 'bold',
        marginVertical: 3,
        paddingLeft: 6
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
        marginVertical: 10,
        fontSize: 20,
        padding: 10
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    titleText: {
        fontFamily: "lucida-bold",
        fontSize: 18,
        color: "#333"
    },
    
});

export const images = {
    ratings: {
        '1': require("../assets/images/1stars.png"),
        '2': require("../assets/images/2stars.png"),
        '3': require("../assets/images/3stars.png"),
        '4': require("../assets/images/4stars.png"),
        '5': require("../assets/images/5stars.png"),
    }
}