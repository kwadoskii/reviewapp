import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Draw = createDrawerNavigator();
const DrawNavigator = () => (
    <Draw.Navigator>
        <Draw.Screen name="Reviews" component={HomeStack} />
        <Draw.Screen name="About App" component={AboutStack} />
    </Draw.Navigator>
)

export default function Drawer() {
    return (
        <NavigationContainer>
            <DrawNavigator />
        </NavigationContainer>
    )
}