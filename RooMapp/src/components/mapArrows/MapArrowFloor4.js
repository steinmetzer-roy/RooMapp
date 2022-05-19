import React from 'react';
import {StyleSheet} from 'react-native';
import {Line, Polygon, G} from "react-native-svg";


const MapArrowFloor4 = (props) => {


    let x = props.room.x;
    let y = props.room.y;

    //entrance/escalator
    const startY = 1230;
    const startX = 113;

    //x coordinates of rooms on left and right corridors
    const leftCorridorX = 113;
    const rightCorridorX = 286;

    //x coordinates of rooms that are not directly on a corridor but on another small hallway next to it
    const rightNotchX = 313;
    const leftNotchX = 85;

    //x coordinates for some big rooms in the middle
    const middleRoomX = 148;

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

    //if room is not on 4th floor return nothing
     if (props.room.room.substring(0,1) !== "4") {
        jsx =<G>
        </G>;
        return jsx;
    }



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
    }  else if (x === leftNotchX) {
        //rooms that are in small hallways next to the left corridor
        jsx = <G>
            <Line x1={leftCorridorX} y1={startY} x2={leftCorridorX} y2={y} style={styles.line}/>
            <Line x1={leftCorridorX} y1={y} x2={x} y2={y} style={styles.line}/>
            {triangle}
        </G>
    }else if (x === 253) {
        //room all the way top in the middle right
        //and room all the way on bottom in the middle right
        jsx = <G>
            <Line x1={280} y1={startY} x2={285} y2={startY} style={styles.line}/>
            <Line x1={rightCorridorX} y1={startY} x2={rightCorridorX} y2={y} style={styles.line}/>
            <Line x1={rightCorridorX} y1={y} x2={253} y2={y} style={styles.line}/>
            {triangle}
        </G>
    } else if (x === 168 && y === 1170) {
        //middle room just on top of the escalator
        jsx = <G>
            <Line x1={280} y1={startY} x2={285} y2={startY} style={styles.line}/>
            <Line x1={285} y1={startY} x2={285} y2={1170} style={styles.line}/>
            <Line x1={285} y1={1170} x2={168} y2={1170} style={styles.line}/>
            {triangle}
        </G>

    } else if (x === middleRoomX) {
        //middle room just on top of the escalator
        jsx = <G>
            <Line x1={280} y1={startY} x2={285} y2={startY} style={styles.line}/>
            <Line x1={285} y1={startY} x2={285} y2={1170} style={styles.line}/>
            <Line x1={285} y1={1170} x2={leftCorridorX} y2={1170} style={styles.line}/>
            <Line x1={leftCorridorX} y1={1170} x2={leftCorridorX} y2={y} style={styles.line}/>
            <Line x1={leftCorridorX} y1={y} x2={x} y2={y} style={styles.line}/>
            {triangle}
        </G>

    } else if (x === 250 && y === 1280) {
        //middle right room just bottom of the escalator
        jsx = <G>
            <Line x1={280} y1={startY} x2={285} y2={startY} style={styles.line}/>
            <Line x1={285} y1={startY} x2={285} y2={1170} style={styles.line}/>
            <Line x1={285} y1={1170} x2={leftCorridorX} y2={1170} style={styles.line}/>
            <Line x1={leftCorridorX} y1={1170} x2={leftCorridorX} y2={y} style={styles.line}/>
            <Line x1={leftCorridorX} y1={y} x2={x} y2={y} style={styles.line}/>
            {triangle}
        </G>

    } else
    {
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

export default MapArrowFloor4;