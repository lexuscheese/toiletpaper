'use strict';

import React from 'react';
import {
    View, Image, TouchableHighlight,
    Text, StyleSheet,
} from 'react-native';
import {Linking} from "react-navigation";

export default class studentFrag extends React.Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            ig: {
                title: "ig",
                scr: require("../../assets/images/ig.png"),
                highlight: require("../../assets/images/ig_red.png"),
                url_1: "http://anthelionmusic.com/",
                url_2: "http://instagram.com/_u/anthelionmusic/",
                package: "com.instagram.android",
            },
            web: {
                title: "web",
                scr: require("../../assets/images/ie.png"),
                highlight: require("../../assets/images/ie_red.png"),
                url: "http://anthelionmusic.com/",
            },
            whatsapp: {
                title: "whatsapp",
                scr: require("../../assets/images/whspp.png"),
                highlight: require("../../assets/images/whspp_red.png"),
                phone: "67671066",
                package: "com.whatsapp.",
            },


            youtube: {
                title: "youtube",
                scr: require("../../assets/images/ytube.png"),
                highlight: require("../../assets/images/ytube_red.png"),
                url: "http://youtube.com/channel/UCJB-CxXYSl_53-PPKPlTKZg",
                package: "com.google.android.youtube",
            },
            facebook: {
                title: "facebook",
                scr: require("../../assets/images/facebook.png"),
                highlight: require("../../assets/images/fb_red.png"),
                url: "https://www.facebook.com/n/anthelionmusic/",
                package: "android.intent.action.VIEW",
            },
        }
    };


    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/images/classroom.jpg')} style={styles.backgroundImage}/>
                <View style={styles.firstColumn}>

                    <TouchableHighlight //Instagram
                        style={styles.button}
                        onPress={()=>{
                            Linking.openURL(this.state.ig.url_2);
                        }}>
                        <Image
                            source={this.state.ig.highlight}
                            style={styles.image}/>
                    </TouchableHighlight>


                    <TouchableHighlight //Website
                        style={styles.button}
                        onPress={()=>{
                            Linking.openURL(this.state.web.url);
                        }}>
                        <Image
                            source={this.state.web.highlight}
                            style={styles.image}/>
                    </TouchableHighlight>


                    <TouchableHighlight //Whatsapp
                        style={styles.button}
                        onPress={()=>{

                        }}>
                        <Image
                            source={this.state.whatsapp.highlight}
                            style={styles.image}/>
                    </TouchableHighlight>


                </View>
                <View style={styles.secondColumn}>


                    <TouchableHighlight //youtube
                        style={styles.button}
                        onPress={()=>{
                            Linking.openURL(this.state.youtube.url);
                        }}>
                        <Image
                            source={this.state.youtube.highlight}
                            style={styles.image}/>
                    </TouchableHighlight>


                    <TouchableHighlight //facebook
                        style={styles.button}
                        onPress={()=>{
                            Linking.openURL(this.state.facebook.url);
                        }}>
                        <Image
                            source={this.state.facebook.highlight}
                            style={styles.image}/>
                    </TouchableHighlight>
                </View>

                <View style={styles.space}/>

            </View>
        );
    }
}
;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    firstColumn: {
        flex: 4,
        justifyContent:"space-between",
        alignContent:"center",
    },
    secondColumn: {
        flex: 4,
        justifyContent:"space-around",
        alignContent:"center",
    },
    space: {
        flex: 3
    },
    button:{
        flex: 1,
    },
    image: {
        flex: 1,
        aspectRatio: 0.5,
        resizeMode: "contain",
    },
    backgroundImage: {
        position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
    }

});