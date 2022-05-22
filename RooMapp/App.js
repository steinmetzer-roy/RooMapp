//Custom Screens
import CourseScreen from './src/Screens/CourseScreen';
import MapScreen from './src/Screens/MapScreen';
import SwipeGesture from './src/components/SwipeGesture';
//Dependencies for Sidebar and Screenhandling
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Default React Components
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
//Modules
import { courseStyle, courseStyleDarkMode } from './src/module/CourseStyles';
import { mapStyle } from './src/module/MapStyles';
import { TouchableOpacity } from 'react-native-web';
import { copy_db_entries, ping_server } from './DBhelper';

const Drawer = createDrawerNavigator();

export default function App() {

    const [courseCustomStyle, setCourseCustomStyle] = useState(courseStyle)
    const [mapCustomStyle, setMapCustomStyle] = useState(mapStyle)

    const DrawerEl = props =>
        <>
            <TouchableOpacity onPress={() => { props.navigation.navigate('CourseScreen') }}>
                <View style={courseCustomStyle.drawerButtonBackgroundStyle}>
                    <Text style={courseCustomStyle.drawerButtonTitleStyle}>CourseScreen</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { props.navigation.navigate('MapScreen') }}>
                <View style={courseCustomStyle.drawerButtonBackgroundStyle}>
                    <Text style={courseCustomStyle.drawerButtonTitleStyle}>MapScreen</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                 courseCustomStyle == courseStyle ? setCourseCustomStyle(courseStyleDarkMode) : setCourseCustomStyle(courseStyle); 
                 mapCustomStyle == mapStyle ? setMapCustomStyle(mapStyleDarkMode) : setMapCustomStyle(mapStyle)  
                 }}>
                <View style={courseCustomStyle.drawerButtonBackgroundStyle}>
                    <Text style={courseCustomStyle.drawerButtonTitleStyle}>DarkMode</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                ping_server().then(a => console.log(a)).catch(a => console.log(a));
                copy_db_entries().then(a => console.log(a)).catch(a => console.log(a));
            }}>
                <View style={courseCustomStyle.drawerButtonBackgroundStyle}>
                    <Text style={courseCustomStyle.drawerButtonTitleStyle}>Server Testing</Text>
                </View>
            </TouchableOpacity>
        </>

    return (
        <NavigationContainer >
            <Drawer.Navigator useLegacyImplementation screenOptions={{ headerTransparent: true, headerTitle: "", headerShown: false, drawerStyle: courseCustomStyle.drawerNavStyle }} drawerContent={props => DrawerEl(props)}>
                <Drawer.Screen name="MapScreen" children={({ navigation, route}) => <SwipeGesture child={<MapScreen navigation={navigation} route={route} customStyle={mapCustomStyle}></MapScreen>} navigation={navigation}></SwipeGesture>} />
                <Drawer.Screen name="CourseScreen" children={({ navigation }) => <SwipeGesture child={<CourseScreen customStyle={courseCustomStyle}></CourseScreen>} navigation={navigation}></SwipeGesture>} />
            </Drawer.Navigator>
        </NavigationContainer >
    );
}