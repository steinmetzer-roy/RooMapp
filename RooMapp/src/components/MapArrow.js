import React from 'react';
import {StyleSheet} from 'react-native';
import {Line, Polygon, G} from "react-native-svg";


const MapArrow = (props) => {


    let x = props.arrowx;
    let y = props.arrowy;



    let jsx;

    //left corridor
    if (x === 110) {
        //points for the triangle/polygon
        let points = "110," + (y - 5) + " 110," + (y + 5) + " 100," + y;
        jsx = <G>
                <Line x1="110" y1="1235" x2="110" y2={y} style={styles.line}/>
                <Polygon points={points} fill="#000000" stroke="#000000"/>
            </G>;
    }


    console.log(x, y);

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