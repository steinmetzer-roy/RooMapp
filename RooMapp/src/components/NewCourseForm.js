import React, { useContext, useEffect, useState } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import "react-datepicker/dist/react-datepicker.css";
import {
  StyleSheet, TextInput, KeyboardAvoidingView
} from 'react-native';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { ping_server, copy_db_entries } from '../../DBhelper';


let options = ['Database Management 2', 'Algorithms 3', 'SEP', 'Networks 2', 'Software Testing', 'Interaction Design'];

const classrooms = [
  { room: '3.010' },
  { room: '3.040' },
  { room: '3.050' },
  { room: '2.070' },
  { room: '1.060' },
];
const weekdayList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
  // { label: "Monday" },
  // { label: "Tuesday" },
  // { label: "Wednesday" },
  // { label: "Thursday" },
  // { label: "Friday" },
  // { label: "Saturday" },
  // { label: "Sunday" }
];

const options2 = classrooms.map((option) => {
  const firstLetter = option.room[0];
  return {
    firstLetter: option.room[0],
    ...option,
  };
});


const NewCourseForm = ({ customStyle }) => {

  const { dispatch } = useContext(CourseContext); //context we want is the course one
  const [name, setName] = useState('');
  const [classroom, setClassroom] = useState('');
  const [weekday, setWeekday] = useState('');
  const [time1, setStartDate] = useState('');

  const [optionss, setoptionss] = useState(['Database Management 2', 'Algorithms 3', 'SEP', 'Networks 2', 'Software Testing', 'Interaction Design']);
  const [refreshed, setrefreshed] = useState(false)

  const handleSubmit = (e) => {

    if (name !== "" && classroom !== "" && weekday !== "" && time1 !== "") {
      setName('Software Testing');
      setClassroom('1.060');
      setStartDate("08:00");
      setWeekday('Wed');
      e.preventDefault();
      dispatch({
        type: 'ADD_COURSE', course: {
          name, classroom, time1, weekday
        }
      });
    } else {
      alert("Please fill all the fields");
    }


  }

  function updateOptions() {
    ping_server().then(a => {
      if (a === "Server is up") {
        console.log("OK")
        copy_db_entries().then(a => {
          console.log(a.entries[0].name);
          for (let index = 0; index < a.entries.length; index++) {
            setoptionss(arr => [...arr, a.entries[index].name])
          }
        })
      } else {
        console.log("NOK")
      }
    }).catch(console.log("Couldn't connect to server"))
  }



  return (

    <KeyboardAvoidingView>
      {
        useEffect(() => {
          if (refreshed === false) {
            updateOptions();
            setrefreshed(true);
          }
        })
      }
      <form onSubmit={handleSubmit} >
        <Stack spacing={0.6}>
          <Autocomplete
            style={StyleSheet.flatten([customStyle.drawerButtonBackgroundStyle, customStyle.drawerNavStyle])}
            id="namebox"
            freeSolo
            disablePortal
            value={name}
            onChange={(event, newValue) => { setName(newValue); }}
            options={optionss}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Name" />}
          />

          <Autocomplete
            id="grouped"
            style={StyleSheet.flatten([customStyle.drawerButtonBackgroundStyle, customStyle.drawerNavStyle])}
            name={classroom}
            inputValue={classroom}
            // isOptionEqualToValue={(option, value) => option.room === value}
            onInputChange={(event, newValue) => { setClassroom(newValue.toString()); }}
            options={options2.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.room || ""}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Classroom" />}
            selectOnFocus={true}
            clearOnBlur={true}
          />

          <TextField
            id="time"
            style={StyleSheet.flatten([{ flexDirection: 'row', flex: 1 }, customStyle.drawerButtonBackgroundStyle, customStyle.drawerNavStyle])}
            label=""
            type="time"
            value={time1}
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
            id="weekday-dropdown"
            style={StyleSheet.flatten([customStyle.drawerButtonBackgroundStyle, customStyle.drawerNavStyle])}
            disablePortal
            value={weekday}
            onChange={(event, newValue) => { setWeekday(newValue); }}
            options={weekdayList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Day" />}
          />

          <input style={{ width: 55, height: 55, backgroundColor: '#EBE9E8', borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderColor: '#C0C0C0', borderWidth: 1, }} type="submit" value="+" />

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