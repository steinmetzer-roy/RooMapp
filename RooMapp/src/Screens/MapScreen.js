import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Pressable, Text, Modal, ScrollView} from 'react-native';
import Floor3 from "../components/floors/floor3"
import Floor2 from "../components/floors/floor2"
import Floor4 from "../components/floors/floor4"
import {useFocusEffect} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-web";
import { GestureHandlerRootView, PanGestureHandler} from "react-native-gesture-handler";


const MapScreen = ({navigation, route}) => {

    //rooms to be used as input(for testing purposes)
    const testRooms = [
        "3.010",
        "3.040",
        "room4",
        "3.070",
        "room3",
        "3.110",
        "room11",
        "room6",
        "room8",
        "room9",

        "3.190",
        "3.200",
        "room1",
        "3.220",
        "3.230",
        "room5",
        "3.330",
        "room2",
        "3.350",
        "3.370",
        "3.380",
        "room7",
        "3.500",
        "room12",
        "3.520",
        "3.530",
        "3.540",


    ];

    //todo verify room names
    //todo find direction of escalator exit

    //names of the rooms with associated coordinates on the svg
    const roomCoords = [
        {room: "3.010", x: 85, y: 905, dir: "bottom"},
        {room: "3.040", x: 85, y: 900, dir: "top"},
        {room: "3.050", x: 85, y: 685, dir: "top"},
        {room: "3.070", x: 110, y: 475, dir: "left"},
        {room: "3.080", x: 110, y: 450, dir: "left"},
        {room: "3.110", x: 85, y: 160, dir: "bottom"},
        {room: "3.120", x: 85, y: 160, dir: "top"},

        {room: "3.160", x: 285, y: 30, dir: "right"},
        {room: "3.170", x: 312, y: 240, dir: "top"},
        {room: "3.180", x: 312, y: 240, dir: "bottom"},
        {room: "3.190", x: 285, y: 450, dir: "right"},
        {room: "3.200", x: 285, y: 475, dir: "right"},
        {room: "3.210", x: 312, y: 685, dir: "top"},
        {room: "3.220", x: 312, y: 685, dir: "bottom"},
        {room: "3.230", x: 312, y: 955, dir: "top"},
        {room: "3.240", x: 312, y: 955, dir: "bottom"},

        {room: "3.330", x: 85, y: 1285, dir: "bottom"},
        {room: "3.350", x: 110, y: 1778, dir: "left"},

        {room: "3.370", x: 285, y: 1778, dir: "right"},
        {room: "3.380", x: 285, y: 1400, dir: "right"},
        {room: "3.390", x: 312, y: 1285, dir: "bottom"},

        {room: "3.500", x: 165, y: 1175, dir: "top"},
        {room: "3.510", x: 145, y: 530, dir: "bottom"},
        {room: "3.520", x: 145, y: 120, dir: "bottom"},
        {room: "3.530", x: 145, y: 1290, dir: "bottom"},
        {room: "3.540", x: 145, y: 1700, dir: "top"},


    ];
    //room that the arrow is pointing to
    const [selectedRoom, setSelectedRoom] = useState(roomCoords[0].room);
    //whether the modal is shown with the room information
    const [showModal, setShowModal] = useState(false);
    //what room information is shown in the modal
    const [modalRoom, setModalRoom] = useState(roomCoords[0].room);
    //what floor is showing right now
    const [floor, setFloor] = useState(3);

    //execute this when focusing this component
    useFocusEffect(React.useCallback(() => {

        if (route.params && route.params.room) {
            let room = route.params.room;
            if (roomCoords.find(element => element.room === room)) {
                setSelectedRoom(room);
            } else {
                setSelectedRoom(roomCoords[0].room);
                console.log("This room does not exist!");
            }

        } else {
            setSelectedRoom(roomCoords[0].room);
            console.log("This room does not exist!");

        }

        adaptViewBox();


    }, [route.params]))


    //set height and width
    let height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let listHeight = height * 0.3;
    let listWidth = width * 0.18;
    height = height * 0.8;

    //get x and y position of selectedRoom
    const test = roomCoords.find(elements => elements.room === selectedRoom);
    let y = test.y;

    let vb;
    //change viewBox to only display top or bottom part of the map
    if (y <= 1200) {
        vb = {x: 0, y: 0, w: 400, h: 1300};
    } else {
        vb = {x: 0, y: 1200, w: 400, h: 600};
    }

    const [viewBox, setViewBox] = useState(vb);

    //adapt the viewBox to the selectedRoom
    const adaptViewBox = () => {
        //get x and y position of selectedRoom
        const currentRoom = roomCoords.find(elements => elements.room === selectedRoom);

        let y = currentRoom.y;

        let vb;
        //change viewBox to only display top or bottom part of the map

        if (y <= 1200) {
            vb = {x: 0, y: 0, w: 400, h: 1300};
        } else {
            vb = {x: 0, y: 1200, w: 400, h: 600};
        }
        setViewBox(vb);

    }

    //loops through the available rooms for testing purposes
    const onPressFunctionTest = () => {
        let index = testRooms.findIndex(elements => elements === selectedRoom);
        setSelectedRoom(testRooms[(index + 1) % roomCoords.length]);
    }

    //resets the viewBox
    const onPressFunction = () => {
        setViewBox(vb);
    }

    //call adaptViewBox whenever selectedRoom changes
    useEffect(() => {
        adaptViewBox();
    }, [selectedRoom]);

    //checks if room is a valid room and sets selectedRoom
    const verifyAndChangeSelectedRoom = (room) => (e) => {
        let b = roomCoords.find(elements => elements.room === room);
        if (b) {
            setSelectedRoom(b.room);
        } else {
            console.log("Could not find room");
        }
    }

    //checks if room is a valid room and sets setShowModal to true
    const verifyAndShowModal = (room) => (e) => {
        e.preventDefault();
        if (roomCoords.find(elements => elements.room === room)) {
            setModalRoom(room);
            setShowModal(true);
        } else {
            console.log("Could not find room");
        }

    }

    //todo fix zooming out
    const zoom = (e) => {
        //position of the mouse relative to the page
        let mouseX = e.pageX;
        let mouseY = e.pageY;
        //position of the svg relative to the page
        let svgX = e.currentTarget.getBoundingClientRect().x;
        let svgY = e.currentTarget.getBoundingClientRect().y;

        //position of the mouse relative to the svg as a ratio
        let relativeX = (mouseX - svgX) / e.currentTarget.getBoundingClientRect().width;
        let relativeY = (mouseY - svgY) / e.currentTarget.getBoundingClientRect().height;
        //modifier to give targeting with the mouse more weight
        let modifier = 2.5;


        let x = viewBox.x;
        let y = viewBox.y;
        let w = viewBox.w;
        let h = viewBox.h;
        let ratio = w / h;


        w = w + e.deltaY / 4 * ratio;
        h = h + e.deltaY / 4;

        x = x - e.deltaY / 8 * ratio * relativeX * modifier;
        y = y - e.deltaY / 8 * relativeY * modifier;

        let v = {x: x, y: y, w: w, h: h};
        setViewBox(v);

    }

    //get data from localstorage
    const getLocalData = () => {
        let localData = localStorage.getItem('courses');
        localData = localData ? JSON.parse(localData) : [];
        return localData;

    }

    const localData = getLocalData();

    const createListItems = () => {

        let jsx = <View style={{flexDirection: "column"}}>
            <View style={{alignItems: "center", flexDirection: "row", borderBottom: "solid"}} key={0}>
                <Text style={styles.listItem}>
                    Course
                </Text>
                <Text style={styles.listItem}>
                    Room
                </Text>
                <Text style={styles.listItem}>
                    Time
                </Text>
                <Text style={styles.listItem}>
                    Weekday
                </Text>
            </View>

            {localData.map(function (item, index) {
                return <TouchableOpacity style={{alignItems: "center", flexDirection: "row"}} key={index + 1}
                                         onPress={verifyAndChangeSelectedRoom(item.classroom)}>
                    <Text style={styles.listItem}>
                        {item.name}
                    </Text>
                    <Text style={styles.listItem}>
                        {item.classroom}
                    </Text>
                    <Text style={styles.listItem}>
                        {item.time}
                    </Text>
                    <Text style={styles.listItem}>
                        {item.weekday}
                    </Text>
                </TouchableOpacity>
            })

            }

        </View>;

        return jsx;


    }

    //creates the style for the outermost view from the list
    const createListViewStyle = () => {
        return {
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
            height: listHeight,
            width: listWidth,
            margin: 10,
        }
    };

    //renders the proper floor
    const renderFloor = () => {

        if (floor === 2)
            return <Floor2 style={styles.svg} height={height} preserveAspectRatio="xMidYMid meet"
                           viewBox={viewBox.x + " " + viewBox.y + " " + viewBox.w + " " + viewBox.h}/>
        else if (floor === 4)
            return <Floor4 style={styles.svg} height={height} preserveAspectRatio="xMidYMid meet"
                           viewBox={viewBox.x + " " + viewBox.y + " " + viewBox.w + " " + viewBox.h}/>
        else
            return <Floor3 style={styles.svg} height={height} preserveAspectRatio="xMidYMid meet"
                        viewBox={viewBox.x + " " + viewBox.y + " " + viewBox.w + " " + viewBox.h}
                        room={roomCoords.find(elements => elements.room === selectedRoom)}
                        onClick={verifyAndChangeSelectedRoom}
                        onDoubleClick={(room) => verifyAndShowModal(room)}
                        onWheel={(e) => zoom(e)}
                />



    };


    return (

        <View style={{flexDirection: "column"}}>
            <Modal animationType="fade"
                   transparent={true}
                   visible={showModal}
            >
                <View style={styles.modalView}>
                    <View style={styles.modal}>
                        <Text style={{fontSize: 50}}>
                            Room: {modalRoom}
                        </Text>
                        <Pressable onPress={() => setShowModal(false)}
                                   style={({pressed}) => [
                                       {backgroundColor: pressed ? "#a0ff0a" : "#00ff00", margin: 10,},
                                       styles.button
                                   ]}
                        >
                            <Text>
                                Exit
                            </Text>
                        </Pressable>
                    </View>
                </View>


            </Modal>
            <View height={10} style={styles.head}>
                <Text style={styles.title}>
                    Maison du Savoir Floor {floor}
                </Text>

            </View>
            <View style={styles.body}>

                <View style={styles.leftSideView}>

                </View>
                <View style={styles.middleView}>

                    <GestureHandlerRootView>


                    <PanGestureHandler onHandlerStateChange={(evt) => {
                        let { nativeEvent } = evt;
                        //movement from left to right, ie previous floor
                        if (nativeEvent.translationX > 30) {

                            if (floor === 2) {
                                console.log("Already on lowest floor");
                            } else {
                                console.log("Decreased floor");
                                setFloor(floor - 1);
                            }
                        //movement from right to left, ie next floor
                        } else if (nativeEvent.translationX < - 30) {
                            if (floor === 4) {
                                console.log("Already on highest floor");
                            } else {
                                setFloor(floor + 1);
                                console.log("Increased floor");
                            }
                        }
                    }}>
                        <View>
                            {renderFloor()}
                        </View>

                    </PanGestureHandler>
                    </GestureHandlerRootView>

                </View>


                <View style={styles.rightSideView}>
                    <Text style={{margin: 10, fontSize: 25, color: "#FFFFFF"}}>
                        Room {selectedRoom} selected!
                    </Text>

                    <ScrollView style={createListViewStyle()}>
                        {createListItems()}
                    </ScrollView>

                    <Pressable onPress={onPressFunction}
                               style={({pressed}) => [
                                   {backgroundColor: pressed ? "#a0ff0a" : "#00ff00", margin: 10,},
                                   styles.button
                               ]}
                    >
                        <Text style={{textAlign: "center"}}> Reset map</Text>
                    </Pressable>


                </View>

            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    svg: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#000000",


    },

    body: {
        alignItems: "start",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#5555ff",
        flexDirection: "row",


    },

    head: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#000fff",


    },

    title: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 40,
        color: "#FFFFFF",


    },
    //"fake margin" made with borders of the same color as the outer component
    //because box-sizing doesnt work...
    rightSideView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0000ff",
        flexDirection: "column",
        borderWidth: 20,
        borderColor: "#5555ff",


    },

    middleView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0000ff",
        flexDirection: "column",
        borderWidth: 20,
        borderColor: "#5555ff",

    },

    leftSideView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff00ff",
        flexDirection: "column",
        borderWidth: 20,
        borderColor: "#5555ff",

    },

    button: {
        height: 40,
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,

    },

    modal: {
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00ff00",
    },

    modalView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#00000099"
    },

    listItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        textAlign: "center",
    },


});

export default MapScreen;