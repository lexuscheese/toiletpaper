'use strict';

import React from 'react';
import {
    View,
    Text, StyleSheet, Image, Button,
    TouchableHighlight, Dimensions, ImageBackground,
} from 'react-native';

export default class singerFrag extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            src: [
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
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/singer.jpg')}
                    style={styles.backg}/>

                {this.state.src.map((link, index) => {
                    return (
                        <View key={index}
                              style={styles.container_2}>
                            <TouchableHighlight
                                style={styles.button}
                                onPress={
                                    () => {
                                        const gender = link.gender;
                                        console.log("Pressed Gender: " + gender);
                                        this.props.navigation.navigate("SingerList", {gender},);
                                    }
                                }>
                                <Image
                                    style={styles.image}
                                    source={link.pic}/>
                            </TouchableHighlight>
                        </View>
                    );
                })}

            </View>
        );
    }
};


const styles = StyleSheet.create({
    backg: {
        position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignContent: "center",
    },
    container_2: {
        flex: 1,
    },
    button: {
        flex: 1,
        margin:15,
        justifyContent: 'center',
        alignContent: "center",
    },
    image: {
        flex: 1,
        aspectRatio: 3,
        resizeMode: "contain",
    },

});




