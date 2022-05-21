import {Pressable, Text, View, Image, Dimensions} from "react-native";
import React from "react";
import {roomInfo} from "../components/data/RoomData";

//these are the elements inside the modal
const RoomScreen = ({ customStyle, modalRoom, setShowModal }) => {

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 2160 / 2880)*0.2;
    const imageWidth = dimensions.width*0.2;

    let imagePath = require("../../assets/rooms/3210  1.jpg");

    return (<View style={customStyle.modalView}>
        <View style={customStyle.modal}>
            <Text style={customStyle.title}>
                Room: {modalRoom}
            </Text >
            <View style={{flexDirection: "row", width: imageWidth*2}}>
                <View style={{ margin: 15, justifyContent: "center"}}>
                    <Text style={{fontSize: 18, justifyContent: "center"}}>
                        Number of seats: {roomInfo.find((elements => elements.room === modalRoom)).seats}
                    </Text>
                    <Text style={{fontSize: 18, justifyContent: "center"}}>
                        Projectors: {roomInfo.find((elements => elements.room === modalRoom)).projectors}
                    </Text>
                    <Text style={{fontSize: 18, justifyContent: "center"}}>
                        Computers: {roomInfo.find((elements => elements.room === modalRoom)).computers}
                    </Text>
                </View>

                <View style={{ margin: 15, justifyContent: "center"}}>
                    <Text style={{fontSize: 18}}>
                        Access: {roomInfo.find((elements => elements.room === modalRoom)).access}
                    </Text>
                    <Text style={{fontSize: 18}}>
                        Other: {roomInfo.find((elements => elements.room === modalRoom)).other}
                    </Text>
                </View>
                <Image style={{ height: imageHeight, width: imageWidth, resizeMode: "contain", alignSelf: "center", borderRadius: 5,margin: 5
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

//3210  1.jpg

//"../../assets/rooms/"+modalRoom.slice(0,1)+modalRoom.slice(2,5) +"  1.jpg"