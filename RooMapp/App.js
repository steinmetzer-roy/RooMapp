
import React from 'react';
import {StyleSheet, View } from 'react-native';
import MapScreen from "./src/Screens/MapScreen.js";

export default function App() {


  return (
      <View style={styles.body}>
        <MapScreen>

        </MapScreen>
      </View>

  );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "stretch",
        justifyContent : "flex-start",
        backgroundColor : "#000000",

    }


});
