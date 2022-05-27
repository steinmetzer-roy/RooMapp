import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Pressable
} from 'react-native';
import CourseContextProvider from '../contexts/CourseContext';
import NewCourseForm from '../components/NewCourseForm';
import CourseList from '../components/CourseList';
import { Modal } from 'react-native-web';

const CourseScreen = ({ customStyle }) => {

    const [showModal, setshowModal] = useState(false)

    return (
        <View style={customStyle.container}>

            <View style={customStyle.courseWrapper}>
                <View style={customStyle.titleWrapper}>
                    <Text style={customStyle.title}>My Courses</Text>
                </View>
                <CourseContextProvider>
                    <CourseList customStyle={customStyle} />
                    <View style={{ flex: 1 }}></View>
                    <Modal 
                    visible={showModal} 
                    style={{ alignItems: "center", justifyContent: "center", flex:0}} 
                    animationType="slide" 
                    transparent={true}
                    >
                        <View style={{ backgroundColor: "grey", padding: 10, borderColor: "lightgrey", borderWidth: 2 }}>
                            <NewCourseForm customStyle={customStyle} setshowModal={setshowModal}/>
                        </View>
                    </Modal>
                    {/*<NewCourseForm customStyle={customStyle} />*/}
                    <Button style={{}} onPress={() => setshowModal(showModal?false:true)}></Button>
                </CourseContextProvider>
            </View>
        </View>
    );
}

export default CourseScreen;
