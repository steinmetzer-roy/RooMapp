import React, { useState } from 'react';
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

const CourseScreen = () => {
    const [course, setCourse] = useState();
    const [classroom, setClassroom] = useState(); //TODO: search how to save data like this: ['SEP', '3.070', '14:00', 'Wednesday'] instead of "SEP, 3.070, 14:00, Wednesday" which is currently possible
    const [time, setTime] = useState();
    const [weekday, setWeekday] = useState();
    const [courseItems, setCourseItems] = useState([]); //"courseItems" is a list of courses

    const handleAddCourse = () => {
        Keyboard.dismiss();
        setCourseItems([...courseItems, course])
        setCourse('');
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
                    {
                        courseItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => deleteCourseFromList(index)}>
                                    {/* Jim/Roy: add code to go to the next page / "more info about a specific" here under onPress, probably */}
                                    <Course text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View> {/*TODO: make this a separate screen, leave a "go back" button here only*/}
            {/* Write course info here*/}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "Padding" : "height"} //TODO: Search if necessary and why an error here?
                style={styles.writeCourseWrapper}
            >
                {/* TODO: put on separate lines */}
                <TextInput style={styles.input} placeholder={'Course name'} value={course} onChangeText={text => setCourse(text)} />
                <TextInput style={styles.input} placeholder={'Room number'} value={course} onChangeText={text => setCourse(text)} />
                <TextInput style={styles.input} placeholder={'Time'} value={course} onChangeText={text => setCourse(text)} />
                <TextInput style={styles.input} placeholder={'Day of the week'} value={course} onChangeText={text => setCourse(text)} />

                <TouchableOpacity onPress={() => handleAddCourse()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
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

});

export default CourseScreen;
