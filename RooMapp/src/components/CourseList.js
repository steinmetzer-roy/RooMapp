//tutorial followed to create this file: https://www.youtube.com/watch?v=TiPMmgp9vcc&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=17&ab_channel=TheNetNinja
//https://github.com/iamshaunjp/react-context-hooks/blob/lesson-17/booklist/src/components/BookList.js

import React, { useContext } from 'react'; //useContext is a hook
import CourseDetails from './CourseDetails';
import { CourseContext } from '../contexts/CourseContext';
import {
    View, Text
} from 'react-native';


const CourseList = ({ customStyle }) => { //this is a functional component
    const { courses } = useContext(CourseContext); //we want to use the course context inside here

    const dayOfWeekName = new Date().toLocaleString(
        'default', { weekday: 'long' }
    );

    return courses.length ? ( //we need to cycle thro these courses and output something; we check if the courses array has any length
        <div>
            <View>
                <Text style={[customStyle.titleWrapper,{alignSelf:'center', marginTop:10, paddingHorizontal:20, paddingVertical:5}]}>Today's Menu</Text>
                {courses.map(course => { //map thro the courses
                    if (dayOfWeekName.startsWith(course.weekday)) {
                        return (<CourseDetails course={course} key={course.id} customStyle={customStyle} />);
                    }
                })}
                <Text style={[customStyle.titleWrapper,{alignSelf:'center', marginTop:10, paddingHorizontal:20, paddingVertical:5}]}>Future Menu</Text>
                {
                courses.map(course => { //map thro the courses
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