import React from "react";
import {
    View,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Text,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import { globalStyles } from "../styles/global";
import Button from "../shared/Button";

const validationSchema = yup.object({
    title: yup.string().required().min(4).label("Review Title"),
    body: yup.string().required().max(100).label("Body"),
    rating: yup
        .string()
        .required()
        .test(
            "is-num-1-5",
            "Rating must be a number between 1 to 5",
            (val) => parseInt(val) < 6 && parseInt(val) > 0
        )
        .label("Rating"),
});

export default function ReviewForm({ addReview }) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
                <Formik
                    initialValues={{ title: "", body: "", rating: "" }}
                    onSubmit={(values, actions) => {
                        addReview(values);
                        // actions.resetForm(); used to reset the form
                    }}
                    validationSchema={validationSchema}
                >
                    {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        touched,
                        values,
                    }) => (
                        <View style={globalStyles.container}>
                            <TextInput
                                onBlur={handleBlur("title")}
                                onChangeText={handleChange("title")}
                                placeholder="Review title"
                                style={globalStyles.input}
                                value={values.title}
                            />

                            {touched.title && errors.title && (
                                <Text style={globalStyles.error}>
                                    {errors.title}
                                </Text>
                            )}

                            <TextInput
                                multiline
                                onBlur={handleBlur("body")}
                                onChangeText={handleChange("body")}
                                placeholder="Review body"
                                style={globalStyles.input}
                                value={values.body}
                            />

                            {touched.body && errors.body && (
                                <Text style={globalStyles.error}>
                                    {touched.body && errors.body}
                                </Text>
                            )}

                            <TextInput
                                keyboardType="numeric"
                                onBlur={handleBlur("rating")}
                                onChangeText={handleChange("rating")}
                                placeholder="Rating (1-5)"
                                style={globalStyles.input}
                                value={values.rating}
                            />

                            {touched.rating && errors.rating && (
                                <Text style={globalStyles.error}>
                                    {touched.rating && errors.rating}
                                </Text>
                            )}

                            <Button
                                title="submit"
                                onPress={() => handleSubmit()}
                            />
                        </View>
                    )}
                </Formik>
            </View>
        </TouchableWithoutFeedback>
    );
}
