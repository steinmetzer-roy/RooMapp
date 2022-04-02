import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Svg, Rect} from "react-native-svg";


import SvgImage from "../components/MapSvg"

const MapScreen = () => {

    return (
        <View>

            <Svg>
                <SvgImage height="100%" width="100%"/>
                <Rect x="0%" y="50%" width="100%" height="10%"/>
            </Svg>

        </View>
    )
}

const styles = StyleSheet.create({


});

export default MapScreen;