import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import { View, Text } from "react-native";

const Gestures = ({ navigation, child }) => {

    return (<GestureHandlerRootView style={{ flex: 1 }}>
        <PanGestureHandler onGestureEvent={(evt) => {
            let { nativeEvent } = evt;
            if (nativeEvent.translationX > 30 && nativeEvent.x - nativeEvent.translationX < 30) {
                navigation.openDrawer();
            }
        }}>
            <View style={{ flex: 1 }}>
                {child}
            </View>
        </PanGestureHandler>
    </GestureHandlerRootView >
    )
}

export default Gestures;

