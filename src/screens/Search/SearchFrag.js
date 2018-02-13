'use strict';

import React from 'react';
import {View,
    Text,StyleSheet,
} from 'react-native';


export default class searchFrag extends React.Component<{}> {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    SearchFrag
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



