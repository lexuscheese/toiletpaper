'use strict';

import React from 'react';
import {
    View,
    Text, StyleSheet, Image, Button,
    TouchableHighlight,
} from 'react-native';

export default class singerFrag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: [
                {
                    gender: "M",
                    pic: require("../../assets/images/hk_malegrey.png"),
                    highlight: require("../../assets/images/hk_malered.png"),
                },
                {
                    gender: "F",
                    pic: require("../../assets/images/hk_femalegrey.png"),
                    highlight: require("../../assets/images/hk_femalered.png"),
                },
                {
                    gender: "B",
                    pic: require("../../assets/images/hk_bandgrey.png"),
                    highlight: require("../../assets/images/hk_bandred.png"),
                },
                {
                    gender: "G",
                    pic: require("../../assets/images/hk_groupgrey.png"),
                    highlight: require("../../assets/images/hk_groupgrey.png"),
                },
            ]
        }
    }


    onPressButton = (gender)=> {
        console.log("Pressed Gender: "+gender+"!");
    };

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/singer.jpg')}
                    style={styles.backgroundImage}>
                </Image>
                {this.state.link.map((link, index) => {
                    return (
                        <TouchableHighlight
                            style={styles.button}
                            onPress={this.onPressButton(link.gender)}>
                            <Image style={styles.advertisementContent}
                                   source={{uri: link.pic}}/>
                        </TouchableHighlight>
                    );
                })}
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },
    button: {
        width: 50,
        height: 50,
    },

});




