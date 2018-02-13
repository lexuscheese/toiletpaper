'use strict';

import React from 'react';
import {View,Text,
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
        flex: 1

    },

});