import React from 'react';
import {StyleSheet} from 'react-native';
import {Line, Polygon, G} from "react-native-svg";


const MapArrow = (props) => {


    let x = props.room.x;
    let y = props.room.y;

    //entrance
    const startY = 1235;
    const startX = 110;

    //
    const leftCorridorX = 110;

    //x coords of rooms that are not directly on the left corridor but on another small hallway next to it
    const leftNotchX = 85;

    let jsx;

    //make the tip of the arrow
    let points;
    if (props.room.dir === "left") {
        points = x + "," + (y - 5) + " " + x + "," + (y + 5) + " " + (x - 10) + "," + y;
    } else if (props.room.dir === "top") {
        points = (x - 5) + "," + (y) + " " + (x + 5) + "," + (y) + " " + (x) + "," + (y - 10);
    } else if (props.room.dir === "bottom") {
        points = (x - 5) + "," + (y) + " " + (x + 5) + "," + (y) + " " + (x) + "," + (y + 10);
    }

    let triangle = <Polygon points={points} fill="#000000" stroke="#000000"/>;

    //rooms that are on the left corridor just next to it
    if (x === leftCorridorX) {
        jsx = <G>
            <Line x1={startX} y1={startY} x2={startX} y2={y} style={styles.line}/>
            {triangle}
        </G>;
    } else if (x === leftNotchX) {
        //rooms that are in small hallways next to the left corridor
        jsx = <G>
            <Line x1={startX} y1={startY} x2={startX} y2={y} style={styles.line}/>
            <Line x1={startX} y1={y} x2={x} y2={y} style={styles.line}/>
            {triangle}
        </G>;

    } else {
        jsx = <G>

        </G>
    }

    return (
        jsx
    );

}

const styles = StyleSheet.create({
    line: {
        stroke: "#FF0000",
        strokeWidth: 3,
    },
});

export default MapArrow;