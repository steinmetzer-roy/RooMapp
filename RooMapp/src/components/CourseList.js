//tutorial followed to create this file: https://www.youtube.com/watch?v=TiPMmgp9vcc&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=17&ab_channel=TheNetNinja
//https://github.com/iamshaunjp/react-context-hooks/blob/lesson-17/booklist/src/components/BookList.js

import React, { useContext } from 'react'; //useContext is a hook
import CourseDetails from './CourseDetails';
import { CourseContext } from '../contexts/CourseContext';
import {
    View,
} from 'react-native';


const CourseList = () => { //this is a functional component
    const { courses } = useContext(CourseContext); //we want to use the course context inside here
    return courses.length ? ( //we need to cycle thro these courses and output something; we check if the courses array has any length
        <div>
            <View>
                {courses.map(course => { //map thro the courses
                    return (<CourseDetails course={course} key={course.id} />);
                })}
            </View>
        </div>
    ) : (
        <div style={{ fontFamily: "Arial", fontSize: 14, paddingTop: 13 }} > No courses to go to. Hello free time :).</ div>
    );
}


export default CourseList;