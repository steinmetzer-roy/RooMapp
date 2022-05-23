import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import CourseContextProvider from '../contexts/CourseContext';
import NewCourseForm from '../components/NewCourseForm';
import CourseList from '../components/CourseList';
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

const CourseScreen = ({ customStyle }) => {

    return (
        <View style={customStyle.container}>
            <View style={customStyle.courseWrapper}>
                <View style={customStyle.titleWrapper}>
                    <Text style={customStyle.title}>My Courses</Text>
                </View>
                <CourseContextProvider>
                    <SimpleBarReact style={{ maxHeight: 300 }}>
                        <CourseList customStyle={customStyle} />
                    </SimpleBarReact>
                    <View style={{ flex: 1 }}></View>
                    <NewCourseForm customStyle={customStyle.formBoxStyle} />
                </CourseContextProvider>
            </View>
        </View>
    );
}

export default CourseScreen;
