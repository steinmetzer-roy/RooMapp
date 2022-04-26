//Custom Screens
import CourseScreen from './src/Screens/CourseScreen';
import MapScreen from './src/Screens/MapScreen';
import SwipeGesture from './src/components/SwipeGesture';
//Dependencies for Sidebar and Screenhandling
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Default React Components
import React,{useState} from 'react';
import { Button, Text, View } from 'react-native';
//Module
import { styles, stylesDarkMode } from './src/module/Styles';

const Drawer = createDrawerNavigator();

export default function App() {

    const [customStyle, setcustomStyle] = useState(stylesDarkMode)
    
    const DrawerEl = props =>
        <>
            <Button title='CourseScreen' onPress={() => { props.navigation.navigate('CourseScreen') }}></Button>
            <Button title='MapScreen' onPress={() => { props.navigation.navigate('MapScreen') }}></Button>
            <Button title='DarkMode' onPress={() => { customStyle == styles ? setcustomStyle(stylesDarkMode) : setcustomStyle(styles)}}></Button>
        </>

    return (
        <NavigationContainer>
            <Drawer.Navigator useLegacyImplementation screenOptions={{ headerTransparent: true, headerTitle: "" }} drawerContent={props => DrawerEl(props)}>
                <Drawer.Screen name="CourseScreen" children={({navigation}) => <SwipeGesture child={<CourseScreen customStyle={customStyle}></CourseScreen>} navigation={navigation}></SwipeGesture>} />
                <Drawer.Screen name="MapScreen" children={({navigation,route}) => <SwipeGesture child={<MapScreen navigation={navigation} route={route}></MapScreen>} navigation={navigation}></SwipeGesture>} />
                <Drawer.Screen name="DarkMode" component={() => { }} />
            </Drawer.Navigator>
        </NavigationContainer >
    );
}
