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
    alert('This will soon delete the item (when API (or another solution) is working)');
}

class RegisterForm extends Component {

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
                <label for="fname">Name: </label>
                <br /><br />
                <TextInput style={styles.input} id="fname" type="text" value={this.state.firstName} onChange={this.firstNameChange} />
                <br /><br />
                <label for="lname">Number: </label>
                <br /><br />
                <TextInput style={styles.input} id="lname" type="text" value={this.state.lastName} onChange={this.lastNameChange} />
                <br /><br />
                <label for="email">Time: </label>
                <br /><br />
                <TextInput style={styles.input} id="email" type="text" value={this.state.email} onChange={this.emailChange} />
                <br /><br />
                <label for="contact">Day of week: </label>
                <br /><br />
                <TextInput style={styles.input} id="contact" type="text" value={this.state.contact} onChange={this.contactChange} />
                <br /><br />
                <SubmitButton />
            </form>
        );
    }
}

const CourseScreen = () => {
    const [course, setCourse] = useState();
    const [classroom, setClassroom] = useState(); //TODO: search how to save data like this: ['SEP', '3.070', '14:00', 'Wednesday'] instead of "SEP, 3.070, 14:00, Wednesday" which is currently possible
    const [time, setTime] = useState();
    const [weekday, setWeekday] = useState();
    const [courseItems, setCourseItems] = useState([]); //"courseItems" is the name of the state (to track what was written in the input field), "setCourseItems" is the function we will use to set that state. If I do "setCourseItems("SEP")" then everytime I refer to courseItems, it will refer to "SEP". State is used when things change often in the app
    const [classroomItems, setClassroomItems] = useState([]);

    const handleAddCourse = () => { //log the course that we have stored at state, "onChangeText={text => setCourse(text)}" - will grab whatever the text is and will set the course to be that text
        Keyboard.dismiss();
        setCourseItems([...courseItems, course])
        setClassroomItems([...classroomItems, classroom])
        setCourse('');
        console.log(course + " - " + classroom + " - " + time + " - " + weekday);
    }

    const deleteCourseFromList = (index) => {
        let itemsCopy = [...courseItems];
        itemsCopy.splice(index, 1);
        setCourseItems(itemsCopy)
    }

    return (
        <View style={styles.container}>

            {/* My Courses */}
            <View style={styles.courseWrapper}>
                <Text style={styles.sectionTitle}>My Courses</Text>

                <View style={styles.items}>
                    {/*This is where the courses will go*/}
                    {/*Jim: similar code to this:"onPress={() => deleteCourseFromList(key)" (inside of "TouchableOpacity") should take us to your page */}

                    {
                        courseData.map((data, key) => {
                            return (
                                <TouchableOpacity key={key} onPress={() => deleteCourseFromList(key)}>
                                    <View style={styles.item}>

                                        <View style={styles.itemLeft}>
                                            <View style={styles.square}></View>
                                            <Text>{data.room + "   " + data.time + "   " + data.weekday + "   " + data.name}</Text>
                                        </View>
                                        <View><button onClick={APIcodeToDelete}><FaEraser /></button></View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <View style={styles.items}>
                    {/*This is where the courses will go*/}
                    {
                        courseItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => deleteCourseFromList(index)}>
                                    <Course text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View> {/*TODO: make this a separate screen, leave a "go back" button here only*/}
            {/* Write course info here*/}
            <RegisterForm />

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "Padding" : "height"} //TODO: Search if necessary
                style={styles.writeCourseWrapper}
            >
                {/* TODO: put on separate lines */}
                <form>
                    {/* "value={course}" allows seeing the real time changes*/}
                    <br /><br />
                    <TextInput style={styles.input} placeholder={'Course name'} value={course} onChangeText={text => setCourse(text)} />
                    <br /><br />
                    <TextInput style={styles.input} placeholder={'Room number'} value={classroom} onChangeText={text => setClassroom(text)} />
                    <br /><br />
                    <TextInput style={styles.input} placeholder={'Time'} value={time} onChangeText={text => setTime(text)} />
                    <br /><br />
                    <TextInput style={styles.input} placeholder={'Day of the week'} value={weekday} onChangeText={text => setWeekday(text)} />
                    <br /><br />

                    <TouchableOpacity onPress={() => handleAddCourse()}>
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
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
