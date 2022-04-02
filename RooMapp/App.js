import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapScreen from "./src/Screens/MapScreen.js";

export default function App() {


  return (
      <View>
        <MapScreen>

        </MapScreen>
      </View>

  );
}

const styles = StyleSheet.create({


});
