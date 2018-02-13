'use strict';

import React from 'react';
import {View,
    Text,StyleSheet,
} from 'react-native';

export default class savedSongFrag extends React.Component<{}> {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    SavedFrag
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


