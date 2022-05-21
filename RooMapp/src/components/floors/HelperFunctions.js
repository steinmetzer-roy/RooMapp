import {roomInfo} from "../data/RoomData";
import {G} from "react-native-svg";

export const createClickableSvgRects = (floor, onClick, onDoubleClick) => {
//generates clickable <rect> elements for each room from the given floor

    let rooms = roomInfo;

    let jsx = <G>{rooms.map(function (element, index) {
        if (element.room.substring(0,1) === floor && element.rectX && element.rectY && element.rectW && element.rectH) {
            return <rect x={element.rectX} y={element.rectY} width={element.rectW} height={element.rectH} opacity="0%" color="#ffffff" onClick={onClick(element.room)}
                         onDoubleClick={onDoubleClick(element.room)}
                         style={{cursor: "pointer"}}
                            key={index}/>
        }

    })}</G>;

    return jsx;

};