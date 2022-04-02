import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Image} from "react-native-web";

const MapScreen = () => {

    return (
        <View>
            <Image source={require('@../../assets/map-floor3.png')}/>
        </View>
    )
}

export default MapScreen;