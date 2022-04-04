import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FaEraser } from 'react-icons/fa';

const Course = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                {/* TODO: allow many lines here (first for course name, second for room...) */}
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View></View><FaEraser />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
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
    itemText: {
        maxWidth: '80%',
    },
});

export default Course;