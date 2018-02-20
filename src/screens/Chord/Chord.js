'use strict';

import React from 'react';
import {
    View, ListView,
    Text, StyleSheet, TouchableHighlight, Image, ImageBackground, Dimensions,
} from 'react-native';
import api from '../../utils/apiUtils';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class chord extends React.Component<{}> {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render() {

        return (
            <View style={styles.container}>
                <Text>Chord</Text>
            </View>)
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
});