import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        {
            title: "Spongebob Squarepants",
            rating: 4,
            body: "Spongebob Squarepants lorem ipsum",
            id: 1,
        },
        {
            title: "Tom and Jerry",
            rating: 5,
            body: "Tom and Jerry lorem ipsum",
            id: 2,
        },
        {
            title: "Teen Titans Go",
            rating: 4,
            body: "Teen Titans Go lorem ipsum",
            id: 3,
        },
        { title: "Mr Bean", rating: 5, body: "Mr Bean lorem ipsum", id: 4 },
        {
            title: "Yaba Yaba Dinasours",
            rating: 1,
            body: "Yaba Yaba Dinasours lorem ipsum",
            id: 5,
        },
        {
            title: "The Simpsons",
            rating: 3,
            body: "The Simpsons lorem ipsum",
            id: 6,
        },
        {
            title: "Biker Mice from Mars",
            rating: 2,
            body: "Biker Mice from Mars lorem ipsum",
            id: 7,
        },
    ]);
    const [modalOpen, setModalOpen] = useState(false);

    const addReview = (review) => {
        review.id = Math.random().toString();
        setReviews((prevReviews) => [review, ...prevReviews]);
        setModalOpen(false);
    };

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name="close"
                        onPress={() => setModalOpen(false)}
                        size={24}
                        style={[styles.modalToggle, styles.modalClose]}
                    />
                    <ReviewForm addReview={addReview} />
                </View>
            </Modal>

            <MaterialIcons
                name="add"
                onPress={() => setModalOpen(true)}
                size={24}
                style={styles.modalToggle}
            />
            <FlatList
                data={reviews}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("ReviewDetails", item)
                        }
                    >
                        <Card>
                            <Text style={globalStyles.titleText}>
                                {item.title}
                            </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalClose: {
        marginBottom: 0,
        marginTop: 20,
    },
    modalContent: {
        flex: 1,
    },
    modalToggle: {
        alignSelf: "center",
        borderColor: "#f2f2f2",
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
});
