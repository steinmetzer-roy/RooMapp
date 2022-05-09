import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import CourseContextProvider from '../contexts/CourseContext';
import NewCourseForm from '../components/NewCourseForm';
import CourseList from '../components/CourseList';

const CourseScreen = ({ customStyle }) => {

    return (
        <View style={customStyle.container}>
            <View style={customStyle.courseWrapper}>
                <View style={customStyle.titleWrapper}>
                    <Text style={customStyle.title}>My Courses</Text>
                </View>
                <CourseContextProvider>
                    <CourseList customStyle={customStyle} />
                    <NewCourseForm customStyle={customStyle} />
                </CourseContextProvider>
            </View>
        </View>
    );
}

export default CourseScreen;
