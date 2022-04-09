import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FaEraser } from 'react-icons/fa';
import { courseData } from "../src/data.js";

const Course = (props) => {

    function sayHello() {
        alert('You clicked me!');
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                {/* TODO: allow many lines here (first for course name, second for room...) */}
                <Text style={styles.itemText}>{props.text}</Text>
                {/* <>
                    <div>
                        {courseData.map((data, key) => { // It maps over the courseData JSON array, which takes a callback function as argument. This function is then called for every stock inside the courseData array. Each time callback executes, it returns and renders a <div> displaying data for every company in a comma separated manner.
                            return (
                                <div key={key}>
                                    {data.name +
                                        " , " +
                                        data.room +
                                        " ," +
                                        data.time +
                                        ", " +
                                        data.weekday}
                                </div>
                            );
                        })}
                    </div>
                </> */}
            </View>
            <View><button onClick={sayHello}><FaEraser /></button></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:
    {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
});

export default Course;