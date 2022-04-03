import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Svg, Rect, Text} from "react-native-svg";


import SvgImage from "../components/MapSvg"

const MapScreen = () => {
    let width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    height = height*0.7;
    width= width*0.7;

    console.log(height);
    console.log(width);

    return (
        <View>
            <View style={styles.titleView}>
                <Text style={styles.title}>
                    Map
                </Text >

            </View>
            <View style={styles.view}>

                <Svg  style={styles.svg} x="0" y="0" width={width} height={height} viewBox="0 0 400 1619.459">
                    <SvgImage  />
                    <Rect x="0%" y="50%" width="100%" height="10%"/>
                </Svg>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    svg : {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 20,


    },

    view : {
        alignItems: "center",
        justifyContent: "center",


    },

    titleView : {
        alignItems: "center",
        justifyContent: "center",
        margin: 20,


    },

    title : {
        alignItems: "center",
        justifyContent: "center",
        fontSize : 40,


    },

});

export default MapScreen;