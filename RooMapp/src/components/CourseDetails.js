import React, { useContext } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import {
    StyleSheet, Text, View
} from 'react-native';
import { FaEraser } from 'react-icons/fa';
import { format } from 'date-fns'


const CourseDetails = ({ course, customStyle }) => {
    // console.log(course.time1.substr(course.time1.length - 13));
    console.log(course.time1);
    const hours = course.time1.substring(11, 16);
    console.log(hours);

    const { dispatch } = useContext(CourseContext);
    const { goToMapScreen } = useContext(CourseContext);
    return (
        <View style={customStyle.item}>
            <View style={customStyle.square}></View>
            <View style={customStyle.itemLeft} onClick={() => goToMapScreen(course.classroom)}>
                <div> <Text> {course.name}</Text></div>
                <div ><Text> {course.classroom}</Text></div>
                <div ><Text> {hours}</Text></div>
                <div ><Text> {course.weekday}</Text></div>
            </View>
            <View><button onClick={() => dispatch({ type: 'REMOVE_COURSE', id: course.id })}><FaEraser /></button></View>
        </View>

    );
}
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEAED',
    },
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
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
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
});
*/
export default CourseDetails;