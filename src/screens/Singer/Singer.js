'use strict';

import React from 'react';
import {View,
    Text,StyleSheet,
} from 'react-native';


export default class singer extends React.Component<{}> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    Singer Page in +{this.state.navigator.params}!
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



