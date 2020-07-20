import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';

import Drawer from './routes/Drawer';


const getFonts = () => Font.loadAsync({
    'lucida': require('./assets/fonts/Lfax.ttf'),
    'lucida-bold': require('./assets/fonts/Lfaxd.ttf')
});


export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (fontsLoaded) {
        return (
            <>
                <Drawer />
                <StatusBar style="auto" />
            </>
        );
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        )        
    }    
}