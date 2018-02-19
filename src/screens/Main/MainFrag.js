'use strict';
// i love hitting J
import React, {Component} from 'react';
import {
    Button, StatusBar,
    Platform, ScrollView,
    StyleSheet, TouchableHighlight,
    Text, TextInput, Alert, RefreshControl,
    View, Dimensions, ListView, Image
} from 'react-native';
import Banner, {IndicaterAlign, IndicaterType} from 'react-native-whc-banner';
const {
    width = 0,
} = Dimensions.get('window');

export default class mainFrag extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#580000'}
                           barStyle={'default'}
                           networkActivityIndicatorVisable={true}
                />

                <Banner style={styles.banner}
                        indicaterType={IndicaterType.number_title}
                        indicaterAlign={IndicaterAlign.right}
                        titles={['react-native banner', 'ios native banner', 'android native banner']}
                        autoLoop={true}
                        autoPlay={true}
                        duration={1500}>
                    <TouchableHighlight onPress={() => {
                        Alert.alert('banner2')
                    }}>
                        <Image style={{width: 200, height: 200}} source={{uri: 'http://www.19chord.com/frontpage/three.JPG'}}
                               />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                        Alert.alert('banner1')
                    }}>
                        <Image style={{width: 200, height: 200}} source={{uri: 'http://www.19chord.com/frontpage/two.JPG'}}
                               />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                        Alert.alert('banner3')
                    }}>
                        <Image style={{width: 200, height: 200}} source={{uri: 'http://www.19chord.com/frontpage/one.JPG'}}
                               resizeMode={'stretch'}/>
                    </TouchableHighlight>
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
    }}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchBar: {
        marginTop: Platform.OS === 'ios' ? 0 : 25,
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
    banner: {
        marginTop:1,
        flexGrow: 1,
    },

});