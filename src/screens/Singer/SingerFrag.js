'use strict';

import React from 'react';
import {
    View,
    Text, StyleSheet, Image, Button,
    TouchableHighlight,Dimensions,ImageBackground,
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
        };
    }



    render() {
        return (
            <ImageBackground
                source={require('../../assets/images/singer.jpg')}
                style={styles.container}>

                {this.state.link.map((link, index) => {
                    return (
                        <TouchableHighlight
                            key={index}
                            style={styles.button}
                            onPress={
                                ()=>{
                                    const gender = link.gender;
                                    console.log("Pressed Gender: "+gender);
                                    this.props.navigation.navigate("SingerList", {gender},);
                                }
                            }>
                            <Image
                                resizeMode="contain"
                                style={styles.image}
                                source={link.pic}/>
                        </TouchableHighlight>
                    );
                })}
            </ImageBackground>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-around',
    },
    button:{
        flex:1,
        alignItems: 'stretch',
        justifyContent: 'center',

    },
    image: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width - 10,
        height: Dimensions.get('window').height/8,
    },

});




