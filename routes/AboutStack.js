import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About';
import Header from '../shared/Header';

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
        headerTitle: ({children}) => <Header name={children} />
    }}>
        <Stack.Screen name="About" component={About}/>
    </Stack.Navigator>
)

export default function AboutStack() {
    return (
        <StackNavigator />
    )
}