import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Text, Modal, ScrollView } from 'react-native';
import Floor3 from "../components/floors/Floor3"
import Floor2 from "../components/floors/Floor2"
import Floor4 from "../components/floors/Floor4"
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import { roomInfo } from "../components/data/RoomData";


const MapScreen = ({ navigation, route, customStyle }) => {

    //todo verify direction of escalator exits

    //names of the rooms with associated coordinates on the svg
    const roomCoords = roomInfo;


    //room that the arrow is pointing to
    const [selectedRoom, setSelectedRoom] = useState(roomCoords[0].room);
    //whether the modal is shown with the room information
    const [showModal, setShowModal] = useState(false);
    //what room information is shown in the modal
    const [modalRoom, setModalRoom] = useState(roomCoords[0].room);
    //what floor is showing right now
    const [floor, setFloor] = useState(2);

    //execute this when focusing this component
    useFocusEffect(React.useCallback(() => {
        if (route.params && route.params.room) {
            let room = route.params.room;
            if (roomCoords.find(element => element.room === room)) {
                setSelectedRoom(room);
                setFloor(parseInt(room.substring(0, 1)));
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
        vb = { x: 0, y: 0, w: 400, h: 1300 };
    } else {
        vb = { x: 0, y: 1200, w: 400, h: 600 };
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
            vb = { x: 0, y: 0, w: 400, h: 1300 };
        } else {
            vb = { x: 0, y: 1200, w: 400, h: 600 };
        }
        setViewBox(vb);

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
            setFloor(parseInt(b.room.substring(0, 1)));
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

        let v = { x: x, y: y, w: w, h: h };
        setViewBox(v);

    }

    //get data from localstorage
    const getLocalData = () => {
        let localData = localStorage.getItem('courses');
        localData = localData ? JSON.parse(localData) : [];
        return localData;

    }

    //get location cords translated
    const getCords = new Promise(resolve => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve);
            console.log("geolocation accepted")
        } else {
            console.log("geolocation denied")
        }
    })

    function translate(pos) {
        let crd = pos.coords;

        let rotationAngle = 2.902482546;

        //let x = 49.504297768442406 -49.5044028479121;
        //let y = 5.9489314079671125 -5.9477025091986;

        let x = crd.latitude - 49.5044028479121;
        let y = crd.longitude - 5.9477025091986;
        console.log(x + " " + y);

        let xtr = x * Math.cos(rotationAngle) + y * Math.sin(rotationAngle) + Math.abs(2 * x);
        let ytr = -x * Math.sin(rotationAngle) + y * Math.cos(rotationAngle);
        console.log(xtr + " " + ytr);

        let newPos = { xtr: xtr, ytr: ytr };
        console.log(newPos);
        return newPos;
    }

    const localData = getLocalData();

    const createListItems = () => {

        let jsx =
            <View style={{ flexDirection: "column" }}>
                <View style={{ alignItems: "center", flexDirection: "row", borderBottom: "solid" }} key={0}>
                    <Text style={customStyle.listItem} >
                        Course
                    </Text>
                    <Text style={customStyle.listItem}>
                        Room
                    </Text>
                    <Text style={customStyle.listItem} >
                        Time
                    </Text>
                    <Text style={customStyle.listItem}>
                        Weekday
                    </Text>
                </View>

                {localData.map(function (item, index) {
                    return <TouchableOpacity style={{ alignItems: "center", flexDirection: "row" }} key={index + 1} onPress={verifyAndChangeSelectedRoom(item.classroom)}>
                        <Text style={customStyle.listItem} >
                            {item.name}
                        </Text>
                        <Text style={customStyle.listItem}>
                            {item.classroom}
                        </Text>
                        <Text style={customStyle.listItem} >
                            {item.time}
                        </Text>
                        <Text style={customStyle.listItem}>
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
            borderColor: '#C0C0C0',
            borderWidth: 2,
        }
    };

    //renders the proper floor
    const renderFloor = () => {

        if (floor === 2)
            return <Floor2 style={customStyle.svg} height={height} preserveAspectRatio="xMidYMid meet"
                viewBox={viewBox.x + " " + viewBox.y + " " + viewBox.w + " " + viewBox.h}
                room={roomCoords.find(elements => elements.room === selectedRoom)}
                onClick={verifyAndChangeSelectedRoom}
                onDoubleClick={(room) => verifyAndShowModal(room)}
                onWheel={(e) => zoom(e)} />
        else if (floor === 4)
            return <Floor4 style={customStyle.svg} height={height} preserveAspectRatio="xMidYMid meet"
                viewBox={viewBox.x + " " + viewBox.y + " " + viewBox.w + " " + viewBox.h}
                room={roomCoords.find(elements => elements.room === selectedRoom)}
                onClick={verifyAndChangeSelectedRoom}
                onDoubleClick={(room) => verifyAndShowModal(room)}
                onWheel={(e) => zoom(e)} />
        else
            return <Floor3 style={customStyle.svg} height={height} preserveAspectRatio="xMidYMid meet"
                viewBox={viewBox.x + " " + viewBox.y + " " + viewBox.w + " " + viewBox.h}
                room={roomCoords.find(elements => elements.room === selectedRoom)}
                onClick={verifyAndChangeSelectedRoom}
                onDoubleClick={(room) => verifyAndShowModal(room)}
                onWheel={(e) => zoom(e)}
            />



    };


    return (
        <View style={{ flex: 1, backgroundColor: '#EBEAED' }}>
            <View style={{ flexDirection: "column" }}>
                <Modal animationType="fade"
                    transparent={true}
                    visible={showModal}
                >
                    <View style={customStyle.modalView}>
                        <View style={customStyle.modal}>
                            <Text style={{ fontSize: 50 }}>
                                Room: {modalRoom}
                            </Text>
                            <Pressable onPress={() => setShowModal(false)}
                                style={({ pressed }) => [
                                    { backgroundColor: pressed ? "#a0ff0a" : "#00ff00", margin: 10, },
                                    customStyle.button
                                ]}
                            >
                                <Text>
                                    Exit
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                {/*Head*/}
                <View style={customStyle.courseWrapper}>
                    <View style={customStyle.titleWrapper}>
                        <Text style={customStyle.title}>
                            Maison du Savoir Floor {floor}
                        </Text>
                    </View>
                </View>

                {/*Body*/}
                <View style={customStyle.body}>

                    {/*left side*/}
                    <View style={customStyle.leftSideView && { display: 0 }}>
                    </View>

                    <View style={customStyle.middleView}>

                        <GestureHandlerRootView>


                            <PanGestureHandler onHandlerStateChange={(evt) => {
                                let { nativeEvent } = evt;
                                //movement from left to right, ie previous floor
                                if (nativeEvent.translationX > 30) {

                                    if (floor === 2) {

                                    } else {

                                        setFloor(floor - 1);
                                    }
                                    //movement from right to left, ie next floor
                                } else if (nativeEvent.translationX < - 30) {
                                    if (floor === 4) {

                                    } else {
                                        setFloor(floor + 1);

                                    }
                                }
                            }}>
                                <View>
                                    {renderFloor()}
                                </View>

                            </PanGestureHandler>
                        </GestureHandlerRootView>

                    </View>

                    {/*right side*/}
                    <View style={customStyle.rightSideView}>
                        <Text style={{ margin: 10, fontSize: 25, color: "#FFFFFF" }}>
                            Room {selectedRoom} selected!
                        </Text>

                        <ScrollView style={createListViewStyle()}>
                            {createListItems()}
                        </ScrollView>

                        <Pressable onPress={onPressFunction}
                            style={({ pressed }) => [
                                { backgroundColor: pressed ? "#a0ff0a" : "#00ff00", margin: 10, },
                                customStyle.button
                            ]}
                        >
                            <Text style={{ textAlign: "center" }}> Reset map</Text>
                        </Pressable>


                    </View>


                </View>
            </View>
        </View>

    )
}

export default MapScreen;