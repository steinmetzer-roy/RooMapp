import { View, Text, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Modal } from 'react-native-web';
import { copy_db_entries, ping_server } from '../../DBhelper';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';


const SearchScreen = ({ customStyle }) => {

    function updateOptions() {
        ping_server().then(a => {
            if (a === "Server is up") {
                console.log("OK")
                copy_db_entries().then(a => {
                    for (let i = 0; i < a.entries.length; i++) {
                        //console.log(a.entries[i])
                        if (a.entries[i].program !== undefined) {
                            setplans([...plans, a.entries[i]])
                            //console.log("entered")
                            for (let j = 0; j < a.entries[i].courses.length; j++) {
                                //console.log(a.entries[i].courses[j])
                                setmodalContent([...modalContent, <Text key={a.entries[i].courses[j].name} >{a.entries[i].courses[j].name}</Text>])
                            }
                        }
                    }
                    console.log(plans)
                })
            } else {
                console.log("NOK")
            }
        }).catch(console.log("Couldn't connect to server"))
    }

    const [plans, setplans] = useState([
        {
            "program": "BINFO 1th sem",
            "likes": 1,
            "dislikes": 1,
            "courses": [
                "Mathematic Discrete",
                "Programming 1",
                "Calculus",
                "Technical English 1",
            ]
        }
    ]);

    const [list, setlist] = useState();
    const [modalContent, setmodalContent] = useState([])
    const [showModal, setshowModal] = useState(false)
    const [loaded, setloaded] = useState(false)

    //updateOptions();
    if (!loaded) {
        updateOptions();
        setloaded(true);
    }

    return (

        <View style={customStyle.container}>
            <View style={customStyle.courseWrapper}>
                <View style={customStyle.titleWrapper}>
                    <Text style={customStyle.title}>Programs</Text>
                </View>

                <Modal visible={showModal} style={{ alignItems: "center", justifyContent: "center", }} animationType="slide" transparent={true}>
                    <Pressable onPress={() => { setshowModal(false); setmodalContent([]) }} style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                        <View style={{ backgroundColor: "grey", padding: 10, borderColor: "lightgrey", borderWidth: 2 }}>
                            {modalContent}
                        </View>
                    </Pressable>
                </Modal>

                <View>
                    {plans.map(element => {
                        return (
                            <View key={element.program} style={customStyle.item}>
                                <Text>
                                    <FaThumbsUp></FaThumbsUp> {element.likes}
                                    <View style={{ padding: 8 }}></View>
                                    <FaThumbsDown></FaThumbsDown> {element.dislikes}
                                </Text>
                                <Pressable onPress={() => {
                                    if (element.courses !== undefined) {
                                        setmodalContent(
                                            element.courses.map(course => {
                                                let jsx = [];
                                                if (course.name !== undefined) {
                                                    return <Text key={course.name}>
                                                        <table>
                                                            <td>{course.name}</td>
                                                            <td>{course.classroom}</td>
                                                            <td>{course.time}</td>
                                                            <td>{course.weekday}</td>
                                                        </table>
                                                    </Text>
                                                } else {
                                                    return ([...modalContent, <Text key={course} >{course}</Text>])
                                                }
                                            }))
                                        setshowModal(true)
                                    }
                                }}>
                                    <Text style={{ alignSelf: 'center' }}> Program: {element.program} </Text>
                                </Pressable>
                                <View style={customStyle.square}></View>
                            </View>

                        )
                    })
                    }
                </View>
            </View>
        </View>
    )
}

export default SearchScreen