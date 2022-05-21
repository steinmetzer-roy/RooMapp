import React, { useContext } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import {
    Text, View
} from 'react-native';
import { FaEraser } from 'react-icons/fa';

const CourseDetails = ({ course, customStyle }) => {
    const hours = course.time1.toString().substring(11, 16);

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

export default CourseDetails;