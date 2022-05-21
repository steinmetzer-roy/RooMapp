import {Pressable, Text, View, Image, Dimensions, StyleSheet} from "react-native";
import React from "react";
import {roomInfo} from "../components/data/RoomData";

//these are the elements inside the modal
const RoomScreen = ({customStyle, modalRoom, setShowModal}) => {

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 2160 / 2880) * 0.2;
    const imageWidth = dimensions.width * 0.2;

    let imagePath;
    try {
        imagePath = require("../../assets/rooms/"+modalRoom.slice(0,1)+modalRoom.slice(2,5) +" 1.jpg");
    } catch (e) {
        console.log("Could not find image for room " + modalRoom);
        imagePath = "";
    }


    return (<View style={customStyle.modalView}>
        <View style={customStyle.modal}>
            <Text style={customStyle.title}>
                Room: {modalRoom}
            </Text>
            <View style={{flexDirection: "row", width: imageWidth * 2}}>
                <View style={styles.view}>
                    <Text style={styles.text}>
                        Number of seats: {roomInfo.find((elements => elements.room === modalRoom)).seats}
                    </Text>
                    <Text style={styles.text}>
                        Projectors: {roomInfo.find((elements => elements.room === modalRoom)).projectors}
                    </Text>
                    <Text style={styles.text}>
                        Computers: {roomInfo.find((elements => elements.room === modalRoom)).computers}
                    </Text>
                </View>

                <View style={styles.view}>

                    <Text style={styles.text}>
                        Access: {roomInfo.find((elements => elements.room === modalRoom)).access}
                    </Text>


                    <Text style={styles.text}>
                        Other: {roomInfo.find((elements => elements.room === modalRoom)).other}
                    </Text>
                </View>
                <Image style={{
                    height: imageHeight,
                    width: imageWidth,
                    resizeMode: "contain",
                    alignSelf: "center",
                    borderRadius: 5,
                    margin: 5
                }} source={imagePath}/>
            </View>


            <Pressable onPress={() => setShowModal(false)}
                       style={({pressed}) => [
                           {backgroundColor: pressed ? "#a0ff0a" : "#00ff00", margin: 10,},
                           customStyle.button
                       ]}
            >
                <Text>
                    Exit
                </Text>
            </Pressable>
        </View>
    </View>);
}

export default RoomScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        flex: 1,
        textAlign: "center"
    },

    view: {
        margin: 15,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
});

