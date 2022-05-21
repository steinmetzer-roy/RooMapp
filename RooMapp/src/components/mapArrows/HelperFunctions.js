import {Polygon} from "react-native-svg";
import React from "react";

export const makeArrowJSX = (room) => {
    //this function makes the tip of the arrow, ie the black triangle

    let points;
    let x = room.x;
    let y = room.y;

    if (room.dir === "left") {
        points = x + "," + (y - 5) + " " + x + "," + (y + 5) + " " + (x - 10) + "," + y;
    } else if (room.dir === "top") {
        points = (x - 5) + "," + (y) + " " + (x + 5) + "," + (y) + " " + (x) + "," + (y - 10);
    } else if (room.dir === "bottom") {
        points = (x - 5) + "," + (y) + " " + (x + 5) + "," + (y) + " " + (x) + "," + (y + 10);
    } else if (room.dir === "right") {
        points = x + "," + (y - 5) + " " + x + "," + (y + 5) + " " + (x + 10) + "," + y;
    } else return null;

    return <Polygon points={points} fill="#000000" stroke="#000000"/>;

};