//Custom Screens
import CourseScreen from './src/Screens/CourseScreen';
import MapScreen from './src/Screens/MapScreen';
//Dependencies for Sidebar and Screenhandling
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Default React Components
import React, { useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator useLegacyImplementation>
                <Drawer.Screen name="MapScreen" component={MapScreen} />
                <Drawer.Screen name="CourseScreen" component={CourseScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
