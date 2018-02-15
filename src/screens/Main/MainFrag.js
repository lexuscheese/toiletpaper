'use strict';

import React from 'react';
import {View,Text,StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';
const dataSource = [
    {'img':'http://www.19chord.com/frontpage/one.JPG'},
    {'img':'http://www.19chord.com/frontpage/two.JPG'},
    {'img':'http://www.19chord.com/frontpage/three.JPG'},
    {'img':'http://www.19chord.com/frontpage/four.JPG'},
    {'img':'http://www.19chord.com/frontpage/five.JPG'},
];

export default class mainFrag extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
            <Text>
                MainFrag
            </Text>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },

});