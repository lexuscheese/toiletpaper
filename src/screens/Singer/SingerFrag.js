'use strict';

import React from 'react';
import {
    View,
    Text, StyleSheet, Image, Button,
} from 'react-native';

export default class singerFrag extends React.Component<{}> {
    render() {
        return (
            <View style = {styles.container}>
                <Image source={require('../../assets/images/singer.jpg')} style={styles.backgroundImage} />



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
    backgroundImage:{
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    }


});




