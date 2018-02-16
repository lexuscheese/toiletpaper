'use strict';

import React from 'react';
import {
    View,
    Text, StyleSheet, Image,
} from 'react-native';

export default class studentFrag extends React.Component<{}> {
    render() {
        return (
            <View style = {styles.container}>
                <Image source={require('../../assets/images/classroom.jpg')} style={styles.backgroundImage} />


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