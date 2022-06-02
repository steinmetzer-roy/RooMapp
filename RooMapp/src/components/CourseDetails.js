// CourseDetails holds all the necessary information to be able to display the courses after they have been added using the form

import React, { useContext } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import {
    Text, View
} from 'react-native';
import { FaEraser } from 'react-icons/fa';

const CourseDetails = ({ course, customStyle }) => {

    // dispatching is a way to trigger a state change
    const { dispatch } = useContext(CourseContext);

    const { goToMapScreen } = useContext(CourseContext);

    // what shows up in the list is defined here (names of courses, what time they takes place, etc.)
    return (
        <View style={customStyle.item}>
            <View style={customStyle.square}></View>
            <View style={customStyle.itemLeft} onClick={() => goToMapScreen(course.classroom)}>
                <div> <Text> {course.name}</Text></div>
                <div> <Text> {course.classroom}</Text></div>
                <div> <Text> {course.time1}</Text></div>
                <div> <Text> {course.weekday}</Text></div>
            </View>
            <View><button onClick={() => dispatch({ type: 'REMOVE_COURSE', id: course.id })}><FaEraser /></button></View>
        </View>
    );
}

export default CourseDetails;