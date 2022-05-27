import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { Modal } from 'react-native-web';


const SearchScreen = ({ customStyle }) => {
    const [plans, setplans] = useState([
        {
            "Program": "BINFO 1th sem",
            "likes": 1,
            "dislikes": 1,
            "Courses": [
                "Mathematic Discrete",
                "Programming 1",
                "Calculus",
                "Technical English 1",
            ]
        },
        {
            "Program": "BINFO 2th sem",
            "likes": 1,
            "dislikes": 1,
            "Courses": []
        },
        {
            "Program": "BINFO 3th sem",
            "likes": 1,
            "dislikes": 1,
            "Courses": []
        },
        {
            "Program": "BINFO 4th sem",
            "likes": 1,
            "dislikes": 1,
            "Courses": []
        },
    ]);

    const [list, setlist] = useState();
    const [modalContent, setmodalContent] = useState([])
    const [showModal, setshowModal] = useState(false)

    return (
        <View style={customStyle.container}>
            <View style={customStyle.courseWrapper}>
                <View style={customStyle.titleWrapper}>
                    <Text style={customStyle.title}>Search & download</Text>
                </View>

                <Modal visible={showModal} style={{ alignItems: "center", justifyContent: "center", }} animationType="slide" transparent={true}>
                    <Pressable onPress={() => {setshowModal(false);setmodalContent([])}} style={{alignItems: "center", justifyContent: "center", flex: 1}}>
                        <View style={{backgroundColor:"grey", padding:10, borderColor:"lightgrey", borderWidth:2 }}>
                            {modalContent}
                        </View>
                    </Pressable>
                </Modal>

                <View>
                    {plans.map(element => {
                        return (
                            <Pressable key={element.Program} onPress={() => {
                                setmodalContent(
                                    element.Courses.map(course => {
                                        return ([...modalContent, <Text key={course} >{course}</Text>])
                                    }))
                                setshowModal(true)
                            }}>
                                <View style={customStyle.item}>
                                    <Text>Likes:{element.likes} Dislikes:{element.dislikes} Program: {element.Program}</Text>
                                </View>
                            </Pressable>
                        )
                    })
                    }
                </View>
            </View>
        </View>
    )
}

export default SearchScreen