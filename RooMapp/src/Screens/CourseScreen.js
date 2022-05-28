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
import { FaEraser, FaPlus } from 'react-icons/fa';
import { grey } from '@mui/material/colors';

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
                        animationType="slide"
                        transparent={true}
                    >
                        <View style={customStyle.modal}>
                            <NewCourseForm customStyle={customStyle} setshowModal={setshowModal} />
                        </View>
                    </Modal>
                    <Pressable style={customStyle.callCourseFormButton} onPress={() => setshowModal(showModal ? false : true)}>
                        <FaPlus color={"#C0C0C0"}></FaPlus>
                    </Pressable>
                </CourseContextProvider>
            </View>
        </View>
    );
}

export default CourseScreen;
