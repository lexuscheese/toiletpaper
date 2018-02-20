'use strict';
// i love hitting J
import React, {Component} from 'react';
import {
    Button, StatusBar,
    Platform,
    StyleSheet, TouchableHighlight,
    Text, TextInput, Alert, RefreshControl,
    View, Dimensions, ListView, Image
} from 'react-native';
import Banner, {IndicaterAlign, IndicaterType} from 'react-native-whc-banner';

export default class mainFrag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            advertisements: [
                {
                    title: "Banner 1",
                    uri: 'http://www.19chord.com/frontpage/one.JPG',
                },
                {
                    title: "Banner 2",
                    uri: 'http://www.19chord.com/frontpage/two.JPG',
                },
                {
                    title: "Banner 3",
                    uri: 'http://www.19chord.com/frontpage/three.JPG'
                },
            ],

        };
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#580000'}
                           barStyle={'default'}
                           networkActivityIndicatorVisable={true}
                />

                <Banner style={styles.banner}
                        indicaterType={IndicaterType.dot}
                        indicaterAlign={IndicaterAlign.center}
                        autoLoop={true}
                        autoPlay={true}
                        height={200}
                        duration={1500}>
                    {this.state.advertisements.map((advertisement, index) => {
                        return (
                           // <TouchableHighlight
                             //   key={advertisement.uri} onPress={() => {
                               // Alert.alert(advertisement.title)
                           // }}>
                                <Image style={styles.image} source={{uri: advertisement.uri}}/>
                            // </TouchableHighlight>
                        );
                    })}
                </Banner>

                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.input}
                        placeholder={'直接輸入樂譜,請輸入歌曲'}/>
                    <Button
                        style={styles.button}
                        title='Search'
                        onPress={
                            () => {

                            }
                        }
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchBar: {
        height: 40,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        // borderWidth: 2,
        // borderRadius: 10,
        marginTop: 2,
        marginStart: 5
    },
    button: {
        flex: 1
    },
    view: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: 200,
        resizeMode: 'contain',
    },
    banner: {
        marginTop: Platform.OS === 'ios' ? 0 : 25,
        flexGrow: 1,
    },

});