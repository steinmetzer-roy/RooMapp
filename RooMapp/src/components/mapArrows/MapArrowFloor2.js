import React from 'react';
import {StyleSheet} from 'react-native';
import {Line, Polygon, G} from "react-native-svg";


const MapArrowFloor2 = (props) => {

//todo change this, copied from floor 3 for now
    let x = props.room.x;
    let y = props.room.y;


    //entrance/escalator
    const startY = 1235;
    const startX = 115;

    //x coordinates of rooms on left and right corridors
    const leftCorridorX = 115;
    const rightCorridorX = 285;

    //x coordinates of rooms that are not directly on a corridor but on another small hallway next to it
    const rightNotchX = 312;

    //x coordinates for the big rooms in the middle
    const middleRoomX = 145;

    let jsx;

    //make the tip of the arrow
    let points;
    if (props.room.dir === "left") {
        points = x + "," + (y - 5) + " " + x + "," + (y + 5) + " " + (x - 10) + "," + y;
    } else if (props.room.dir === "top") {
        points = (x - 5) + "," + (y) + " " + (x + 5) + "," + (y) + " " + (x) + "," + (y - 10);
    } else if (props.room.dir === "bottom") {
        points = (x - 5) + "," + (y) + " " + (x + 5) + "," + (y) + " " + (x) + "," + (y + 10);
    } else if (props.room.dir === "right") {
        points = x + "," + (y - 5) + " " + x + "," + (y + 5) + " " + (x + 10) + "," + y;
    }

    let triangle = <Polygon points={points} fill="#000000" stroke="#000000"/>;

    //rooms that are on the left corridor
    if (x === leftCorridorX) {
        jsx = <G>
            <Line x1={280} y1={startY} x2={285} y2={startY} style={styles.line}/>
            <Line x1={285} y1={startY} x2={285} y2={startY+50} style={styles.line}/>
            <Line x1={285} y1={startY+50} x2={startX} y2={startY+50} style={styles.line}/>
            <Line x1={startX} y1={startY + 50} x2={startX} y2={y} style={styles.line}/>
            {triangle}
        </G>;
    } else if (x === rightCorridorX) {
        //rooms that are in the right corridor
        jsx =
            <G>
                <Line x1={rightCorridorX} y1={startY} x2={rightCorridorX} y2={y} style={styles.line}/>
                {triangle}
            </G>

    } else if (x === rightNotchX) {
        //rooms that are in small hallways next to the right corridor
        jsx = <G>
            <Line x1={rightCorridorX} y1={startY} x2={rightCorridorX} y2={y} style={styles.line}/>
            <Line x1={rightCorridorX} y1={y} x2={x} y2={y} style={styles.line}/>
            {triangle}
        </G>
    } else if (x === middleRoomX && y === 1700) {
        //bottom room in the middle
        jsx = <G>
            <Line x1={280} y1={startY} x2={285} y2={startY} style={styles.line}/>
            <Line x1={285} y1={startY} x2={285} y2={startY+50} style={styles.line}/>
            <Line x1={285} y1={startY+50} x2={startX} y2={startY+50} style={styles.line}/>
            <Line x1={leftCorridorX} y1={startY+50} x2={leftCorridorX} y2={1750} style={styles.line}/>
            <Line x1={leftCorridorX} y1={1750} x2={middleRoomX} y2={1750} style={styles.line}/>
            <Line x1={middleRoomX} y1={1750} x2={x} y2={y} style={styles.line}/>
            {triangle}
        </G>
    } else if (x === middleRoomX && y === 120) {
        //top room in the middle
        jsx = <G>
            <Line x1={280} y1={startY} x2={285} y2={startY} style={styles.line}/>
            <Line x1={285} y1={startY} x2={285} y2={startY+50} style={styles.line}/>
            <Line x1={285} y1={startY+50} x2={startX} y2={startY+50} style={styles.line}/>
            <Line x1={leftCorridorX} y1={startY+50} x2={leftCorridorX} y2={50} style={styles.line}/>
            <Line x1={leftCorridorX} y1={50} x2={middleRoomX} y2={50} style={styles.line}/>
            <Line x1={middleRoomX} y1={50} x2={x} y2={y} style={styles.line}/>
            {triangle}
        </G>
    } else if (x === middleRoomX) {
        //other rooms in the middle
        jsx = <G>
            <Line x1={280} y1={startY} x2={285} y2={startY} style={styles.line}/>
            <Line x1={285} y1={startY} x2={285} y2={startY+50} style={styles.line}/>
            <Line x1={285} y1={startY+50} x2={startX} y2={startY+50} style={styles.line}/>
            <Line x1={leftCorridorX} y1={startY+50} x2={leftCorridorX} y2={y} style={styles.line}/>
            <Line x1={leftCorridorX} y1={y} x2={x} y2={y} style={styles.line}/>
            {triangle}
        </G>
    } else if (x === 165) {
        //big room just top of the escalator
        jsx = <G>
            <Line x1={280} y1={startY} x2={285} y2={startY} style={styles.line}/>
            <Line x1={285} y1={startY} x2={285} y2={startY+50} style={styles.line}/>
            <Line x1={285} y1={startY+50} x2={startX} y2={startY+50} style={styles.line}/>
            <Line x1={leftCorridorX} y1={startY+50} x2={leftCorridorX} y2={y} style={styles.line}/>
            <Line x1={leftCorridorX} y1={y} x2={x} y2={y} style={styles.line}/>
            {triangle}
        </G>
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

export default MapArrowFloor2;