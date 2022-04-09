import React, {useState} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';


import SvgImage from "../components/MapSvg"
const testRooms = [
    {room: "room1", xy: [124,1580]},
    {room: "room2", xy: [124,1200]}
];
const MapScreen = (props) => {

    const [selectedRoom, setSelectedRoom] = useState(testRooms[1]);



    if (props.name !== undefined) {
        setSelectedRoom(props.room);
    }

    let width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


    height = height * 0.7;
    width = width * 0.7;

    const onPressFunction = () => {
        if (selectedRoom === testRooms[0]) {
            setSelectedRoom(testRooms[1]);
        } else {
            setSelectedRoom(testRooms[0]);
        }

    }

    //viewBox="0 0 400 1619.459"
    //top part: viewBox="0 0 400 1200"
    //bottom part: viewBox="0 1000 400 600"
    return (
        <View style={{flexDirection: "column"}}>
            <View height={10} style={styles.head}>
                <Text style={styles.title}>
                    Map
                </Text>

            </View>
            <View style={styles.body}>

                <View style={styles.leftSideView}>
                    <Text>
                        Left side
                    </Text>
                </View>
                <View style={styles.middleView}>

                    <SvgImage  style={styles.svg} height={height} preserveAspectRatio="xMidYMid meet"
                               viewBox="0 1000 400 600" room={selectedRoom}/>


                </View>


                <View style={styles.rightSideView}>
                    <Text>
                        Right side
                    </Text>

                    <Pressable onPress={onPressFunction}
                               style={({pressed}) => [
                                   {backgroundColor: pressed ? "#dddddd" : "#00ff00", margin: 10,}
                               ]}
                    >
                        <Text> Switch room, {selectedRoom.room} chosen!</Text>
                    </Pressable>

                </View>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    svg: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,


    },

    body: {
        alignItems: "start",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#5555ff",
        flexDirection: "row",


    },

    head: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#000fff",


    },

    title: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 40,


    },
    //"fake margin" made with borders of the same color as the outer component
    //because box-sizing doesnt work...
    rightSideView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0000ff",
        flexDirection: "column",
        borderWidth: 20,
        borderColor: "#5555ff",


    },

    middleView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0000ff",
        flexDirection: "column",
        borderWidth: 20,
        borderColor: "#5555ff",

    },

    leftSideView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff00ff",
        flexDirection: "column",
        borderWidth: 20,
        borderColor: "#5555ff",

    },

});

export default MapScreen;