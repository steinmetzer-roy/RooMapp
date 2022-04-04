import React, { useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Touchable
} from 'react-native';

const SideBar = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate('CourseScreen')}}>
            <Image 
            source={require("../../assets/burger-menu.png")} 
            style={{width:64,height:64,backgroundColor:"grey"}}
            />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "blue",
    }
});

export default SideBar;

