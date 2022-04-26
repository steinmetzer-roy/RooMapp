import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import CourseContextProvider from '../contexts/CourseContext';
import NewCourseForm from '../components/NewCourseForm';
import CourseList from '../components/CourseList';

const CourseScreen = ({customStyle}) => {

    return (
        <View style={customStyle.container}>
            <View style={customStyle.courseWrapper}>
                <Text style={customStyle.sectionTitle}>My Courses</Text>
                <CourseContextProvider>
                    <CourseList customStyle={customStyle}/>
                    <NewCourseForm customStyle={customStyle}/>
                </CourseContextProvider>
            </View>
        </View>
    );
}
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEAED',
    },
    courseWrapper: {
        padding: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    items: {
        marginTop: 30,
    },
    writeCourseWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
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
});
*/
export default CourseScreen;
