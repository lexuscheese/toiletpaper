'use strict';
// i love hitting J
import React from 'react';
import {View,Text,StyleSheet,
} from 'react-native';

export default class mainFrag extends React.Component<{}> {
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