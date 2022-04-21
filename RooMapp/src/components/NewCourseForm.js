import React, { useContext, useState } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import {
  StyleSheet, TextInput, KeyboardAvoidingView
} from 'react-native';

const NewCourseForm = () => {
  const { dispatch } = useContext(CourseContext); //context we want is the course one
  const [name, setName] = useState('');
  const [classroom, setClassroom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, classroom);
    dispatch({
      type: 'ADD_COURSE', course: {
        name, classroom
      }
    });
    setName('');
    setClassroom('');
  }
  // onChange is equal to some kind of a function that takes in an event object "e" and we update the state of "name" from line 6
  return ( //creating the template
    <KeyboardAvoidingView>
      <form onSubmit={handleSubmit}>
        <TextInput style={styles.input} placeholder="course name" value={name}
          onChange={(e) => setName(e.target.value)} />
        <TextInput style={styles.input} placeholder="classroom number" value={classroom}
          onChange={(e) => setClassroom(e.target.value)} />
        <input style={{ width: 55, height: 55, backgroundColor: '#FFF', borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderColor: '#C0C0C0', borderWidth: 1, }} type="submit" value="+" />
      </form >
    </KeyboardAvoidingView >
  );
}

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

export default NewCourseForm;