import React, {useState} from 'react';
import {View, StyleSheet, Alert, Pressable, Text} from 'react-native';
import {Svg, Rect} from "react-native-svg";


import SvgImage from "../components/MapSvg"

const MapScreen = (props) => {

    const [selectedRoom,setSelectedRoom] = useState();

    if (props.name !== undefined) {
        setSelectedRoom(props.room);
    }

    let width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    let hh = height*0.3;

    height = height*0.7;
    width= width*0.7;



    const onPressFunction = () => {
        console.log("test");

    }

    return (
        <View style={{flexDirection: "column"}}>
            <View height={10} style={styles.head}>
                <Text style={styles.title}>
                    Map
                </Text >

            </View>
            <View style={styles.body}>

                <View style={styles.leftSideView}>
                    <Text>
                        Left side
                    </Text>
                </View>

                <Svg  style={styles.svg} x="0" y="0" width={width} height={height} viewBox="0 0 400 1619.459">
                    <SvgImage  />
                    <Rect x="0%" y="50%" width="100%" height="10%"/>
                </Svg>

                <View style={styles.rightSideView}>
                    <Text>
                        Right side
                    </Text>

                    <Pressable onPress={onPressFunction}
                                style={({pressed}) => [
                                    {backgroundColor: pressed ? "#dddddd" : "#00ff00", margin: 10,}
                                ]}
                    >
                        <Text> Button</Text>
                    </Pressable>

                </View>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    svg : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,


    },

    body : {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#5555ff",
        flexDirection: "row",





    },

    head : {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#000fff",




    },

    title : {
        alignItems: "center",
        justifyContent: "center",
        fontSize : 40,



    },

    rightSideView : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0000ff",
        flexDirection:"column",
        height : "50%",
        margin : 20,


    },

    leftSideView : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff00ff",
        flexDirection:"column",
        height : "50%",
        margin : 20,


    },

});

export default MapScreen;