//TODO: make sure that the item that was deleted also disappears from the UI without needing to refresh
import React, { useState, Component } from 'react';
import Course from '../../components/Course';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { render } from 'react-dom';
import { courseData } from "../data.js";
import { FaEraser } from 'react-icons/fa';


const SubmitButton = (props) => {
    return <button type="submit">Submit</button>;
}

function APIcodeToDelete() {
    // alert('This will soon delete the item (when API (or another solution) is working)');
}

class RegisterForm extends Component { //look into how to delete this code, it was needed to try out an earlier version

    constructor(props) {

        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            contact: ''
        };

        this.firstNameChange = this.firstNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.contactChange = this.contactChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    firstNameChange(event) {
        this.setState({
            firstName: event.target.value
        });
        console.log(event.target.value);
    }

    lastNameChange(event) {
        this.setState({
            lastName: event.target.value
        });
    }

    emailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    contactChange(event) {
        this.setState({
            contact: event.target.value
        });
    }

    handleSubmit(event) {
        console.log("form has been submitted: ");
        console.log(this.state.firstName + " - " + this.state.lastName + " - " + this.state.email + " - " + this.state.contact);
        event.preventDefault();
    }


    render() {
        return (

            <form onSubmit={this.handleSubmit}>

            </form>
        );
    }
}

const CourseScreen = () => {
    const [course, setCourse] = useState();
    const [classroom, setClassroom] = useState();
    const [time, setTime] = useState();
    const [weekday, setWeekday] = useState();
    const [courseItems, setCourseItems] = useState([]); //"courseItems" is the name of the state (to track what was written in the input field), "setCourseItems" is the function we will use to set that state. If I do "setCourseItems("SEP")" then everytime I refer to courseItems, it will refer to "SEP". State is used when things change often in the app
    const [classroomItems, setClassroomItems] = useState([]);
    var obj = { "course": course, "classroom": classroom, "time": time, "weekday": weekday };

    const handleAddCourse = () => { //log the course that we have stored at state, "onChangeText={text => setCourse(text)}" - will grab whatever the text is and will set the course to be that text
        Keyboard.dismiss();
        setCourseItems([...courseItems, course])//needed now that I have JSON?
        setClassroomItems([...classroomItems, classroom])//needed now that I have JSON?
        setCourse('');
        setClassroom('');
        setTime('');
        setWeekday('');
        console.log(course + " - " + classroom + " - " + time + " - " + weekday);
        var userInput = obj; //user enters name, room, time, day
        var arryOfArrays = JSON.parse(window.localStorage.getItem('savedCourses')); //I take what is already in local storage, I don't want to overwrite existing data
        if (!arryOfArrays) { arryOfArrays = []; } //if user is entering courses for the first time, give them an empty array
        arryOfArrays.push(userInput); //push the latest input into an array of courses that were there in the past
        var arryOfArraysStringified = JSON.stringify(arryOfArrays); //needed to convert into a format local storage likes
        localStorage.setItem("savedCourses", arryOfArraysStringified); //save the new version: all old courses + the latest addition
        window.location.reload(false);
    }

    // const coursesFromStorage = JSON.parse(window.localStorage.getItem('savedCourses')); //I take what is already in local storage, so that when the page is opened, the courses already in storage would show up in the list
    const coursesFromStorage = [{}, { course: "Testing", classroom: "1000", time: "13", weekday: "Mon" }];

    const deleteCourseFromList = (toDelete) => { //needs to be changed 
        // let itemsCopy = [...courseItems];
        // itemsCopy.splice(key, 1);
        // setCourseItems(itemsCopy)
        console.log(toDelete); // 0, 1, 2 or 3
        var arryOfArrays = JSON.parse(window.localStorage.getItem('savedCourses')); //I take what is already in local storage, I don't want to overwrite existing data
        console.log(arryOfArrays);
        arryOfArrays.splice(toDelete, 1) //delete 1 item, at position "toDelete"
        var arryOfArraysStringified = JSON.stringify(arryOfArrays); //needed to convert into a format local storage likes
        localStorage.setItem("savedCourses", arryOfArraysStringified); //save the new version: all old courses + the latest addition
        window.location.reload(false);
    }

    return (
        <View style={styles.container}>

            <View style={styles.courseWrapper}>
                <Text style={styles.sectionTitle}>My Courses</Text>

                <View style={styles.items}>
                    {
                        coursesFromStorage.map((data, key) => {
                            return (
                                <TouchableOpacity key={key} onPress={() => deleteCourseFromList(key)}>
                                    <View style={styles.item}>

                                        <View style={styles.itemLeft}>
                                            <View style={styles.square}></View>
                                            <Text>{data.classroom + "   " + data.time + "   " + data.weekday + "   " + data.course}</Text>
                                        </View>
                                        <View><button onClick={() => deleteCourseFromList(key)}><FaEraser /></button></View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

            </View>
            <RegisterForm />

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "Padding" : "height"} //TODO: Search if necessary
                style={styles.writeCourseWrapper}
            >
                <form>
                    <br /><br />
                    <TextInput id="testInput" style={styles.input} placeholder={'Course name'} value={course} onChangeText={text => setCourse(text)} />
                    <br /><br />
                    <TextInput style={styles.input} placeholder={'Room number'} value={classroom} onChangeText={text => setClassroom(text)} />
                    <br /><br />
                    <TextInput style={styles.input} placeholder={'Time'} value={time} onChangeText={text => setTime(text)} />
                    <br /><br />
                    <TextInput style={styles.input} placeholder={'Day of the week'} value={weekday} onChangeText={text => setWeekday(text)} />
                    <br /><br />

                    <TouchableOpacity onPress={() => handleAddCourse()}>
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </form>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEAED',
    },
    courseWrapper: {
        padding: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    items: {
        marginTop: 30,
    },
    writeCourseWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:
    {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

});

export default CourseScreen;
