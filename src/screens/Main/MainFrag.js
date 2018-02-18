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
import Swiper from 'react-native-swiper';

const circleSize = 8;
const circleMargin = 5;

export default class mainFrag extends React.Component {

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableHighlight onPress={() => Alert.alert('You touch Product',
                null, null)}>
                <View style={styles.row}>
                    <Image
                        source={rowData.image}
                        style={styles.productImage}
                    />
                    <View style={styles.productText}>
                        <Text style={styles.productTitle}>
                            {rowData.title}
                        </Text>
                        <Text style={styles.productSubTitle}>
                            {rowData.subtitle}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    };


    constructor(props) {
        super(props);
        this.state = {
            advertisements: [
                {
                    url: 'https://www.gettyimages.no/gi-resources/images/Homepage/Hero/US/SEP2016/prestige-476863311.jpg'
                },
                {
                    url: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
                },
                {
                    url: 'http://demo.qodeinteractive.com/passage/wp-content/uploads/2013/07/revolution-05-center.jpg'
                },
            ],
            currentPage: 0,
            // dataSource: ds.cloneWithRows([
            //     {
            //         image: require('../../image/MedRes.JPG'),
            //         title: 'Product 1',
            //         subtitle: 'Detail 1'
            //     },
            //     {
            //         image: require('../../image/MedRes.JPG'),
            //         title: 'Product 2',
            //         subtitle: 'Detail 2'
            //     },
            //     {
            //         image: require('../../image/MedRes.JPG'),
            //         title: 'Product 3',
            //         subtitle: 'Detail 3'
            //     },
            //     {
            //         image: require('../../image/MedRes.JPG'),
            //         title: 'Product 4',
            //         subtitle: 'Detail 4'
            //     },
            //     {
            //         image: require('../../image/MedRes.JPG'),
            //         title: 'Product 5',
            //         subtitle: 'Detail 5'
            //     }
            // ]),

            searchText: '',
            isRefreshing: false
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
                    <Swiper
                        ref={"scrollView"}
                        loop={true}
                        autoplay={true}
                    >{this.state.advertisements.map((advertisement, index) => {
                        return (
                            <TouchableHighlight
                                key={index}>
                                <Image
                                    style={styles.advertisementContent}
                                    source={{uri: advertisement.url}}/>
                            </TouchableHighlight>
                        );
                    })}</Swiper>
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
                {/*<View style={styles.products}>*/}
                {/*<TouchableHighlight onPress={() => Alert.alert('You touch', null, null)}>*/}
                {/*<ListView*/}
                {/*dataSource={this.state.dataSource}*/}
                {/*renderRow={this._renderRow}*/}
                {/*renderSeparator={this._renderSeparator}*/}
                {/*refreshControl={this._renderRefreshControl()}*/}
                {/*/>*/}
                {/*</TouchableHighlight>*/}
                {/*</View>*/}
            </View>
        );
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={'${sectionID}-${rowID}'} style={styles.divider}/>
        );
    }

    _renderRefreshControl() { //Refreash Control
        return (
            <RefreshControl
                refreashing={this.state.isRefreshing}
                onRefresh={this._onRefresh}
                tintColor={'#FF0000'}
                titleColor={'#0000FF'}
                title={'Refreshing, Waiting...'}>
            </RefreshControl>
        )
    }

    _onRefresh = () => { //refreash action
        this.setState({isRefreshing: true});
        setTimeout(() => {
            const products = Array.from(new Array(10)).map((value, index) =>
                ({
                    // image: require('../../image/MedRes.JPG'),
                    title: 'new Product ' + index,
                    subtitle: 'new Detail ' + index
                }));
            this.setState({isRefreshing: false, dataSource: ds.cloneWithRows(products)});
        }, 2000);
    };
};
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

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
    advertisement: {
        height: 180,
    },
    products: {
        flex: 1,
    },

    advertisementContent: {
        width: Dimensions.get('window').width,
        height: 180
    },
    indicator: {
        position: 'absolute',
        top: 160,
        flexDirection: 'row'
    },
    circle: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'grey',
        marginHorizontal: circleMargin
    },
    circleSelected: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'white',
        marginHorizontal: circleMargin
    },
    row: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    productImage: {
        marginLeft: 10,
        width: 40,
        height: 20
    },
    productText: {
        flex: 1,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10
    },
    productTitle: {
        flex: 3,
        fontSize: 16
    },
    productSubTitle: {
        flex: 2,
        fontSize: 14,
        color: 'grey'
    },
    divider: {
        height: 1,
        width: Dimensions.get('window').width - 5,
        marginLeft: 5,
        backgroundColor: 'lightgray'
    }
});