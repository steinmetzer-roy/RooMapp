import React from 'react';
import {StyleSheet} from 'react-native';
import {Line, Polygon, G} from "react-native-svg";


const MapArrow = (props) => {
    const roomCoords = [
        {room: "room1", x: 124, y: 1580},
        {room: "room2", x: 124, y: 1320}
    ];

    const test = roomCoords.find(elements => elements.room === props.room)

    let x = test.x;
    let y = test.y;

    let points = "124," + (y - 5) + " 124," + (y + 5) + " 114," + y;
    //points="124,1575 124,1585 114,1580"

    console.log(x, y);

    return (
        <G>
            <Line x1="124" y1="1100" x2="124" y2={y} style={styles.line}/>
            <Polygon points={points} fill="#000000" stroke="#000000"/>
        </G>
    );

}

//using width: 3
//left corridor: x=124
//escalator: y= 1100
const styles = StyleSheet.create({
    line: {
        stroke: "#FF0000",
        strokeWidth: 3,
    },
});

export default MapArrow;