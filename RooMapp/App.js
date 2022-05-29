//Custom Screens
import CourseScreen from './src/Screens/CourseScreen';
import MapScreen from './src/Screens/MapScreen';
import ProgramScreen from './src/Screens/ProgramScreen';
import SwipeGesture from './src/components/SwipeGesture';
//Dependencies for Sidebar and Screenhandling
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Default React Components
import React, { useState } from 'react';
import { Button, Text, View, Pressable, StyleSheet } from 'react-native';
//Modules
import { courseStyle, courseStyleDarkMode } from './src/module/CourseStyles';
import { mapStyle, mapStyleDarkMode } from './src/module/MapStyles';
import { copy_db_entries, ping_server } from './DBhelper';
import { Autocomplete, TextField } from '@mui/material';
import { roomInfo } from './src/components/data/RoomData';

const Drawer = createDrawerNavigator();

export default function App() {

    const [courseCustomStyle, setCourseCustomStyle] = useState(courseStyle)
    const [mapCustomStyle, setMapCustomStyle] = useState(mapStyle)

    const classrooms = roomInfo
    const [classroom, setClassroom] = useState('');

    const options2 = classrooms.map((option) => {
        const firstLetter = option.room[0];
        return {
            firstLetter: option.room[0],
            ...option,
        };
    });

    const DrawerEl = props =>
        <>
            <Autocomplete
                id="grouped"
                style={StyleSheet.flatten([courseCustomStyle.drawerButtonBackgroundStyle, courseCustomStyle.drawerNavStyle, { flex: 0 }])}
                name={classroom}
                inputValue={classroom}
                disablePortal
                onInputChange={(event, newValue) => { setClassroom(newValue.toString()); }}
                options={options2.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.room || ""}
                renderInput={
                    (params) =>
                        <TextField {...params}
                            label="Search Classroom"
                            onSubmit={e => { console.log("hello"); }}
                        />}
                selectOnFocus={true}
                clearOnBlur={true}
                onKeyDown={e => {
                    if (e.code.toLowerCase().includes('enter') && e.target.value) {
                        props.navigation.navigate('MapScreen',{room:classroom})
                    }
                }}

            />
            <Pressable onPress={() => { props.navigation.navigate('CourseScreen') }}>
                <View style={courseCustomStyle.drawerButtonBackgroundStyle}>
                    <Text style={courseCustomStyle.drawerButtonTitleStyle}>Courses</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { props.navigation.navigate('MapScreen') }}>
                <View style={courseCustomStyle.drawerButtonBackgroundStyle}>
                    <Text style={courseCustomStyle.drawerButtonTitleStyle}>Map</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { props.navigation.navigate('ProgramsScreen') }}>
                <View style={courseCustomStyle.drawerButtonBackgroundStyle}>
                    <Text style={courseCustomStyle.drawerButtonTitleStyle}>Programs</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => {
                courseCustomStyle == courseStyle ? setCourseCustomStyle(courseStyleDarkMode) : setCourseCustomStyle(courseStyle);
                mapCustomStyle == mapStyle ? setMapCustomStyle(mapStyleDarkMode) : setMapCustomStyle(mapStyle)
            }}>
                <View style={courseCustomStyle.drawerButtonBackgroundStyle}>
                    <Text style={courseCustomStyle.drawerButtonTitleStyle}>Dark Mode</Text>
                </View>
            </Pressable>
            <Pressable style={{ display: 0 }} onPress={() => {
                ping_server().then(a => console.log(a)).catch(a => console.log(a));
                copy_db_entries().then(a => console.log(a)).catch(a => console.log(a));
            }}>
                <View style={courseCustomStyle.drawerButtonBackgroundStyle}>
                    <Text style={courseCustomStyle.drawerButtonTitleStyle}>Server Testing</Text>
                </View>
            </Pressable>
        </>

    return (
        <NavigationContainer >
            <Drawer.Navigator useLegacyImplementation screenOptions={{ headerTransparent: true, headerTitle: "", headerShown: false, drawerStyle: courseCustomStyle.drawerNavStyle }} drawerContent={props => DrawerEl(props)}>
                <Drawer.Screen name="CourseScreen" children={({ navigation }) => <SwipeGesture child={<CourseScreen customStyle={courseCustomStyle}></CourseScreen>} navigation={navigation}></SwipeGesture>} />
                <Drawer.Screen name="MapScreen" children={({ navigation, route }) => <SwipeGesture child={<MapScreen navigation={navigation} route={route} customStyle={mapCustomStyle}></MapScreen>} navigation={navigation}></SwipeGesture>} />
                <Drawer.Screen name="ProgramsScreen" children={({ navigation }) => <SwipeGesture child={<ProgramScreen customStyle={courseCustomStyle} navigation={navigation} ></ProgramScreen>} navigation={navigation}></SwipeGesture>} />
            </Drawer.Navigator>
        </NavigationContainer >
    );
}