import React, { useContext } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import {
    StyleSheet, Text, View
} from 'react-native';
import { FaEraser } from 'react-icons/fa';

const CourseDetails = ({ course, customStyle }) => {
    const { dispatch } = useContext(CourseContext);
    const { goToMapScreen } = useContext(CourseContext);
    return (
        <View style={customStyle.item}>
            <View style={customStyle.square}></View>
            <View style={customStyle.itemLeft} onClick={() => goToMapScreen(course.classroom)}>
                <div> <Text> {course.name}</Text></div>
                <div ><Text> {course.classroom}</Text></div>
                <div ><Text> {course.time}</Text></div>
                <div ><Text> {course.weekday}</Text></div>
            </View>
            <View><button onClick={() => dispatch({ type: 'REMOVE_COURSE', id: course.id })}><FaEraser /></button></View>
        </View>

    );
}

export default CourseDetails;