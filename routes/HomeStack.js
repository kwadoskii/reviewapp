import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
    }}>
        <Stack.Screen 
            name="Reviews" 
            component={Home}
            options= {{ headerTitle: ({children}) => <Header name={children}/> }}
            />
        <Stack.Screen 
            name="ReviewDetails" 
            component={ReviewDetails} 
            options={({ route }) => ({ title: route.params.title })} />
    </Stack.Navigator>
)

export default function HomeStack() {
    return (
        <StackNavigator />
    )
}