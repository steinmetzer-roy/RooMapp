import React from 'react';
import {StyleSheet} from 'react-native';
import {Line, Polygon, G} from "react-native-svg";
import {makeArrowJSX} from "./HelperFunctions";


const MapArrowFloor3 = (props) => {


    let x = props.room.x;
    let y = props.room.y;

    //entrance/escalator
    const startY = 1235;
    const startX = 110;

    //x coordinates of rooms on left and right corridors
    const leftCorridorX = 110;
    const rightCorridorX = 285;

    //x coordinates of rooms that are not directly on a corridor but on another small hallway next to it
    const leftNotchX = 85;
    const rightNotchX = 312;

    //x coordinates for the big rooms in the middle
    const middleRoomX = 145;

    let jsx;


    let triangle = makeArrowJSX(props.room);

    //if room is on the 4th floor draw arrow from escalator to escalator
    if (props.room.room.substring(0,1) === "4") {
        let p = leftCorridorX + "," + (startY - 5) + " " + leftCorridorX + "," + (startY + 5) + " " + (leftCorridorX + 10) + "," + startY;
        jsx = <G>
            <Line x1={rightCorridorX} y1={startY} x2={rightCorridorX} y2={1180} style={styles.line}/>
            <Line x1={rightCorridorX} y1={1180} x2={leftCorridorX} y2={1180} style={styles.line}/>
            <Line x1={leftCorridorX} y1={1180} x2={leftCorridorX} y2={startY} style={styles.line}/>
            <Polygon points={p} fill="#000000" stroke="#000000"/>;
        </G>;
        return jsx;
    }
    else if (props.room.room.substring(0,1) !== "3") {
        //if not on 3rd floor either draw nothing
         jsx = <G>

        </G>
        return jsx;
    }

    //rooms that are on the left corridor just next to it
    if (x === leftCorridorX) {
        jsx = <G>
            <Line x1={280} y1={startY} x2={285} y2={startY} style={styles.line}/>
            <Line x1={285} y1={startY} x2={285} y2={startY+50} style={styles.line}/>
            <Line x1={285} y1={startY+50} x2={startX} y2={startY+50} style={styles.line}/>
            <Line x1={startX} y1={startY + 50} x2={startX} y2={y} style={styles.line}/>
            {triangle}
        </G>;
    } else if (x === leftNotchX) {
        //rooms that are in small hallways next to the left corridor
        jsx = <G>
            <Line x1={280} y1={startY} x2={285} y2={startY} style={styles.line}/>
            <Line x1={285} y1={startY} x2={285} y2={startY+50} style={styles.line}/>
            <Line x1={285} y1={startY+50} x2={startX} y2={startY+50} style={styles.line}/>
            <Line x1={startX} y1={startY+50} x2={startX} y2={y} style={styles.line}/>
            <Line x1={startX} y1={y} x2={x} y2={y} style={styles.line}/>
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

export default MapArrowFloor3;