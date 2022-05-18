import React, { useContext, useState } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  StyleSheet, TextInput, KeyboardAvoidingView
} from 'react-native';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const options = ['Database Management 2', 'SEP'];

const NewCourseForm = ({ customStyle }) => {

  const [time1, setStartDate] = useState('');
  const { dispatch } = useContext(CourseContext); //context we want is the course one
  const [name, setName] = useState('');
  const [classroom, setClassroom] = useState('');
  const [time, setTime] = useState('');
  const [weekday, setWeekday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_COURSE', course: {
        name, classroom, time1, weekday
      }
    });
    setName('');
    setClassroom('');
    setTime('');
    setStartDate('');
    setWeekday('');
  }
  // onChange is equal to some kind of a function that takes in an event object "e" and we update the state of "name" from line 6
  return ( //creating the template

    <KeyboardAvoidingView>

      <form onSubmit={handleSubmit} >
        {/* <TextInput style={customStyle.input} placeholder="Course Name" value={name}
          onChange={(e) => setName(e.target.value)} /> */}
        <Autocomplete
          disablePortal
          value={name}
          onChange={(event, newValue) => {
            setName(newValue);
          }}
          id="name-box"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Name" />}
        />
        {/* <TextInput style={customStyle.input} placeholder="Classroom Number" value={classroom}
          onChange={(e) => setClassroom(e.target.value)} /> */}
        <div>
          <select value={classroom} onChange={(e) => setClassroom(e.target.value)}>
            <option value="3.010">3.010</option>
            <option value="3.040">3.040</option>
            <option value="3.050">3.050</option>
            <option value="3.070">3.070</option>
            <option value="3.080">3.080</option>
            <option value="3.110">3.110</option>
            <option value="3.120">3.120</option>
            <option value="3.160">3.160</option>
            <option value="3.170">3.170</option>
            <option value="3.180">3.180</option>
            <option value="3.190">3.190</option>
            <option value="3.200">3.200</option>
            <option value="3.210">3.210</option>
            <option value="3.220">3.220</option>
            <option value="3.230">3.230</option>
            <option value="3.240">3.240</option>
            <option value="3.330">3.330</option>
            <option value="3.350">3.350</option>
            <option value="3.370">3.370</option>
            <option value="3.380">3.380</option>
            <option value="3.390">3.390</option>
            <option value="3.500">3.500</option>
            <option value="3.510">3.510</option>
            <option value="3.520">3.520</option>
            <option value="3.530">3.530</option>
            <option value="3.540">3.540</option>
          </select>
        </div>
        <DatePicker
          customInput={<TextInput style={customStyle.input} />}
          selected={time1}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          placeholderText='Time'
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
        {/* <TextInput style={customStyle.input} placeholder="Weekday" value={weekday}
          onChange={(e) => setWeekday(e.target.value)} /> */}
        <div>
          <select value={weekday} onChange={(e) => setWeekday(e.target.value)}>
            <option value="mon">Monday</option>
            <option value="tue">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thu">Thursday</option>
            <option value="fri">Friday</option>
            <option value="sat">Saturday</option>
            <option value="sun">Sunday</option>
          </select>
        </div>
        <input style={{ width: 55, height: 55, backgroundColor: '#FFF', borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderColor: '#C0C0C0', borderWidth: 1, }} type="submit" value="+" />
      </form >

    </KeyboardAvoidingView >


  );
}

const options1 = [
  { label: 'Database Management 2' },
  { label: 'SEP' },
];

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    marginTop: 10,
  },
  addWrapper: {
    width: 60,
    marginTop: 10,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
*/
export default NewCourseForm;