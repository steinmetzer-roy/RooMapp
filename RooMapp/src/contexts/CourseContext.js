//tutorial followed: https://github.com/iamshaunjp/react-context-hooks/blob/lesson-16/booklist/src/contexts/BookContext.js
//https://www.youtube.com/watch?v=v1s_rbZbqQI&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=16&ab_channel=TheNetNinja
//https://www.youtube.com/watch?v=SOnMln3W0U8&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=21&ab_channel=TheNetNinja
import React, { createContext, useReducer, useEffect } from 'react';
import { courseReducer } from '../reducers/courseReducer';

export const CourseContext = createContext(); //this creates our context

const CourseContextProvider = (props) => {
    //when you first log in there are no courses, hense []; third argument in useReducer is to make sure localStorage persists
    const [courses, dispatch] = useReducer(courseReducer, [], () => {
        const localData = localStorage.getItem('courses');
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('courses', JSON.stringify(courses));
    }, [courses]);

    const goToMapScreen = (classroom) => {
        console.log("You clicked on course, this will eventually take you to the map")
    };

    return (
        <CourseContext.Provider value={{ courses, dispatch, goToMapScreen }}>
            {props.children}
        </CourseContext.Provider>
    );
}

export default CourseContextProvider;