import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const MapScreen = () => {

    return (
        <View>
            <Image style={styles.image}
                   source={require('../../assets/map-floor3.png')}/>
            <Text>
                Helloaa
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image : {
      width: 500,
      height:500,
    },

});

export default MapScreen;