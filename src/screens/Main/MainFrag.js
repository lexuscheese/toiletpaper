'use strict';
// i love hitting J
import React, {Component} from 'react';
import {
    Button, StatusBar,
    Platform,
    StyleSheet, TouchableHighlight,
    Text, TextInput, Alert, RefreshControl,
    View, Dimensions, ListView, Image, ScrollView
} from 'react-native';
import Banner, {IndicaterAlign, IndicaterType} from 'react-native-whc-banner';

export default class mainFrag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            advertisements: [
                {
                    title: "Banner 1",
                    url: 'https://www.gettyimages.no/gi-resources/images/Homepage/Hero/US/SEP2016/prestige-476863311.jpg'
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
            currentPage: 0,
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#580000'}
                           barStyle={'default'}
                           networkActivityIndicatorVisable={true}
                />

                <View style={styles.advertisement}>
                    <ScrollView
                        ref={"scrollView"}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                    >{this.state.advertisements.map((advertisement, index) => {
                        return (
                            <TouchableHighlight
                                key={index}
                                onPress={() => Alert.alert('You touch', null, null)}>
                                <Image style={styles.advertisementContent}
                                       source={{uri: advertisement.url}}/>
                            </TouchableHighlight>
                        );
                    })}</ScrollView>
                </View>

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
    };


    componentDidMount() {
        this._startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    _startTimer() {
        this.interval = setInterval(() => {
            var nextPage = this.state.currentPage + 1;

             if (nextPage >= this.state.advertisements.length) {
                nextPage = 0;
                // console.log("Max. page over")
            }
            this.setState({currentPage: nextPage});
            const offSetX = nextPage * Dimensions.get('window').width;
            this.refs.scrollView.scrollResponderScrollTo({x: offSetX, y: 0, animated: true});
        }, 5000);
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
    advertisementContent: {
        flex: 1,
        width: Dimensions.get('window').width,
        resizeMode: 'cover',
        height: 200,
    },
    advertisement: {
        marginTop: Platform.OS === 'ios' ? 0 : 25,
        // flexGrow: 1,
        height: 200,
    },

});