import React, {useState} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import SvgImage from "../components/MapSvg"


const MapScreen = (props) => {

    //rooms to be used as input(for testing purposes)
    const testRooms = [
        "room1",
        "room2",
        "room3",
        "room4",
        "room5",
    ];

    //names of the rooms with associated coordinates on the svg
    const roomCoords = [
        {room: "room1", x: 110, y: 1778, dir: "left"},
        {room: "room2", x: 110, y: 1482, dir: "left"},
        {room: "room3", x: 110, y: 450, dir: "left"},
        {room: "room4", x: 85, y: 685, dir: "top"},
        {room: "room5", x: 85, y: 1285, dir: "bottom"},
    ];

    const [selectedRoom, setSelectedRoom] = useState(testRooms[2]);


    if (props.name !== undefined) {
        setSelectedRoom(props.room);
    }
    //set width/height
    let width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


    height = height * 0.7;
    width = width * 0.7;

    //get x and y position of selectedRoom
    const test = roomCoords.find(elements => elements.room === selectedRoom);
    console.log(test);

    let x = test.x;
    let y = test.y;
    let viewBox;

    //change viewbox to only display top or bottom part of the map
    if (y < 1100) {
        viewBox = "0 0 400 1300";
    } else {
        viewBox = "0 1200 400 600";
    }

    const onPressFunction = () => {
        let index = testRooms.findIndex(elements => elements === selectedRoom);
        setSelectedRoom(testRooms[(index + 1) % roomCoords.length]);
    }

    //original viewBox="0 0 400 1619.459"
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

                    <SvgImage style={styles.svg} height={height} preserveAspectRatio="xMidYMid meet"
                              viewBox={viewBox} room={roomCoords.find(elements => elements.room === selectedRoom)}/>


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
                        <Text> Switch room, {selectedRoom} chosen!</Text>
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