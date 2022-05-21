import React, { useContext, useState } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  StyleSheet, TextInput, KeyboardAvoidingView
} from 'react-native';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


const options = ['Database Management 2', 'SEP'];

const classrooms = [
  { room: '3.010' },
  { room: '3.040' },
  { room: '3.050' },
  { room: '2.070' },
  { room: '1.060' },
];
const weekdayList = [
  { label: "Monday" },
  { label: "Tuesday" },
  { label: "Wednesday" },
  { label: "Thursday" },
  { label: "Friday" },
  { label: "Saturday" },
  { label: "Sunday" }
];

const options2 = classrooms.map((option) => {
  const firstLetter = option.room[0];
  return {
    firstLetter: option.room[0],
    ...option,
  };
});

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
        <Stack spacing={0.6}>

          <Autocomplete
            disablePortal
            value={name}
            onChange={(event, newValue) => { setName(newValue); }}
            id="name-box"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Name" />}
          />
          <Autocomplete
            id="grouped"
            name={classroom}
            inputValue={classroom}
            isOptionEqualToValue={(option, value) => option.room === value}
            onInputChange={(event, newValue) => { setClassroom(newValue.toString()); }}
            options={options2.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.room || ""}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Classroom" />}
          />
          {/* <DatePicker
            // customInput={<TextInput style={customStyle.input} />}
            selected={time1}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            placeholderText='Time'
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          /> */}

          <TextField
            id="time"
            label=""
            type="time"
            defaultValue="07:30"
            selected={time1}
            onChange={(e) => setStartDate(e.target.value.toString())}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 60, // 1 min
            }}
            sx={{ width: 300 }}
          />

          <Autocomplete
            disablePortal
            id="weekday-dropdown"
            inputValue={weekday}
            onInputChange={(event, newValue) => { setWeekday(newValue); }}
            options={weekdayList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Day" />}
          />

          <input style={{ width: 55, height: 55, backgroundColor: '#FFF', borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderColor: '#C0C0C0', borderWidth: 1, }} type="submit" value="+" />
        </Stack>

      </form >

    </KeyboardAvoidingView >


  );
}

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