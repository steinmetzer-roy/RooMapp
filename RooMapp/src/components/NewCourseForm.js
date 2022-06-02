//NewCourseForm defines what the form looks like and what it does

import React, { useContext, useEffect, useState } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import { StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { ping_server, copy_db_entries } from '../../DBhelper';
import { roomInfo } from './data/RoomData'

//List of rooms is shared between different files
const classrooms = roomInfo

const weekdayList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//The following code allows to have the rooms sorted floor by floor - all 2nd floor courses are bundled together, etc.
const options2 = classrooms.map((option) => {
  const firstNumber = option.room[0]; //We look at all the rooms and save the first number (e.g. "3" for "3.010") in const firstNumber
  return {
    firstNumber: option.room[0],
    ...option,
  };
});


const NewCourseForm = ({ customStyle, setshowModal }) => {

  const { dispatch } = useContext(CourseContext);
  const [name, setName] = useState('');
  const [classroom, setClassroom] = useState('');
  const [weekday, setWeekday] = useState('');
  const [time1, setStartDate] = useState('');

  //Courses shown when database is not connected
  const [optionss, setoptionss] = useState(['Database Management 2', 'Algorithms 3', 'SEP', 'Networks 2', 'Software Testing', 'Interaction Design']);

  const [refreshed, setrefreshed] = useState(false)


  const handleSubmit = (e) => {

    //Submitting is only allowed if all the fields of the form are filled in
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
      setshowModal(false)
    } else {
      alert("Please fill all the fields");
    }

  }

  function updateOptions() {
    ping_server().then(a => {
      if (a === "Server is up") {
        //console.log("OK")
        copy_db_entries().then(a => {
          //console.log(a.entries[0].name);
          /*for (let index = 0; index < a.entries.length; index++) {
            setoptionss(arr => [...arr, a.entries[index].name])
          }*/
        })
      } else {
        //console.log("NOK")
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
        {/* How much space there is between the name text box and room text box */}
        <Stack spacing={0.6}>
          <Autocomplete
            id="name-box"
            style={StyleSheet.flatten([customStyle.drawerButtonBackgroundStyle, customStyle.drawerNavStyle])}
            freeSolo
            disablePortal
            value={name}
            //invoked whenever you select the display options in the popup
            onChange={(event, newValue) => { setName(newValue); }}
            //"options" is what we see in the popup box
            options={optionss}
            //the width of the text box
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Name" />}
          />

          <Autocomplete
            id="grouped-rooms"
            style={StyleSheet.flatten([customStyle.drawerButtonBackgroundStyle, customStyle.drawerNavStyle])}
            name={classroom}
            disablePortal
            inputValue={classroom}
            //invoked whenever you type in search field
            onInputChange={(event, newValue) => { setClassroom(newValue.toString()); }}
            //in the popup box, we want to have sorting by floors: 2nd floor separated from 3rd floor
            options={options2.sort((a, b) => -b.firstNumber.localeCompare(a.firstNumber))}
            //the grouping is done according to the "first number" (e.g. "3" in "3.010")
            groupBy={(option) => option.firstNumber}
            getOptionLabel={(option) => option.room || ""}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Classroom" />}
            selectOnFocus={true}
            clearOnBlur={true}
          />

          <TextField
            id="time"
            style={StyleSheet.flatten([customStyle.drawerButtonBackgroundStyle, customStyle.drawerNavStyle])}
            label=""
            type="time"
            value={time1}
            onChange={(e) => setStartDate(e.target.value.toString())}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 60, // 60 steps stands for 60 seconds, so we allow the user to insert a time with 1 minute precision (also possible to allow only 12.00, 12.15, 12.30, 12.45, etc.)
            }}
            sx={{ width: 300 }}
            className={time1}
            fullWidth
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

          <input style={{ width: 55, height: 55, backgroundColor: '#EBE9E8', borderRadius: 60, justifyContent: 'center', alignSelf: 'center', borderColor: '#C0C0C0', borderWidth: 1, }} type="submit" value="+" />

        </Stack>

      </form >

    </KeyboardAvoidingView >


  );
}

export default NewCourseForm;