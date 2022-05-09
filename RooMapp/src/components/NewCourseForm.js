import React, { useContext, useState } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  StyleSheet, TextInput, KeyboardAvoidingView
} from 'react-native';

const NewCourseForm = ({ customStyle }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { dispatch } = useContext(CourseContext); //context we want is the course one
  const [name, setName] = useState('');
  const [classroom, setClassroom] = useState('');
  const [time, setTime] = useState('');
  const [weekday, setWeekday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_COURSE', course: {
        name, classroom, time, weekday
      }
    });
    setName('');
    setClassroom('');
    setTime('');
    setWeekday('');
  }
  // onChange is equal to some kind of a function that takes in an event object "e" and we update the state of "name" from line 6
  return ( //creating the template
    <KeyboardAvoidingView>
      <form onSubmit={handleSubmit} >
        <TextInput style={customStyle.input} placeholder="Course Name" value={name}
          onChange={(e) => setName(e.target.value)} />
        <TextInput style={customStyle.input} placeholder="Classroom Number" value={classroom}
          onChange={(e) => setClassroom(e.target.value)} />
        <TextInput style={customStyle.input} placeholder="Time" value={time}
          onChange={(e) => setTime(e.target.value)} />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
        <TextInput style={customStyle.input} placeholder="Weekday" value={weekday}
          onChange={(e) => setWeekday(e.target.value)} />
        <input style={{ width: 55, height: 55, backgroundColor: '#FFF', borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderColor: '#C0C0C0', borderWidth: 1, }} type="submit" value="+" />
      </form >

    </KeyboardAvoidingView >


  );
}

export default NewCourseForm;