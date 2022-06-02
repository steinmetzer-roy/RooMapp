//CourseList defines how the list that displays the courses looks like

//tutorial followed to create this file: https://www.youtube.com/watch?v=TiPMmgp9vcc&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=17&ab_channel=TheNetNinja
//https://github.com/iamshaunjp/react-context-hooks/blob/lesson-17/booklist/src/components/BookList.js

import React, { useContext } from 'react';
import CourseDetails from './CourseDetails';
import { CourseContext } from '../contexts/CourseContext';
import { View, Text } from 'react-native';

const CourseList = ({ customStyle }) => {
    const { courses } = useContext(CourseContext);

    const dayOfWeekName = new Date().toLocaleString(
        'default', { weekday: 'long' }
    );

    return courses.length ? ( //we need to cycle through the courses and output something; we check if the courses array has any length
        <div>
            <View>
                <Text style={[customStyle.titleWrapper, { alignSelf: 'center', marginTop: 10, paddingHorizontal: 20, paddingVertical: 5 }]}>Today's Menu</Text>
                {courses.map(course => { //map through the courses
                    if (dayOfWeekName.startsWith(course.weekday)) {
                        return (<CourseDetails course={course} key={course.id} customStyle={customStyle} />);
                    }
                })}
                <Text style={[customStyle.titleWrapper, { alignSelf: 'center', marginTop: 10, paddingHorizontal: 20, paddingVertical: 5 }]}>Future Menu</Text>
                {
                    courses.map(course => { //map through the courses
                        if (!dayOfWeekName.startsWith(course.weekday)) {
                            return (<CourseDetails course={course} key={course.id} customStyle={customStyle} />);
                        }
                    })}
            </View>
        </div>
    ) : (
        <div style={{ fontFamily: "Arial", fontSize: 14, paddingTop: 13 }} > No courses to go to! Hello free time :)</ div>
    );
}


export default CourseList;