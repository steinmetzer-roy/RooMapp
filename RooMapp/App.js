import CourseScreen from './src/Screens/CourseScreen';
import SideBar from './src/Screens/SideBarScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            {/* Add screen as followed to the top of all Stack.Screen to have it shown first: 
            <Stack.Screen name="YOURSCREENNAME" component={SCREENCOMPONENTNAME} options={{ headerShown:1}}/>
            
            -name: freely choosable
            -component: name of the component
            -headerShown: to disable header insert 0
            
            */ }
            
            <Stack.Screen name="CourseScreen" component={CourseScreen} options={{ headerShown:1}}/>
            <Stack.Screen name="SideBar" component={SideBar} options={{ headerShown:1}}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
