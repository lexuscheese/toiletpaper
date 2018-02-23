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
import api from '../../utils/apiUtils';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import formatNumber from "../../utils/textUtils";

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

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
            latest:ds,
            browser:ds,
        };

    }

    componentWillMount() {
        api.getLatest().then((res) => {
            this.setState({
                    latest: ds.cloneWithRows(res),
                }
            );
        }).catch(error => {
            this.props.navigation.dispatch(NavigationActions.back());
            Alert.alert("請再試！", null, null);
            console.log(error);
        });
        api.getBrowser().then((res) => {
            this.setState({
                    browser: ds.cloneWithRows(res),
                }
            );
        }).catch(error => {
            this.props.navigation.dispatch(NavigationActions.back());
            Alert.alert("請再試！", null, null);
            console.log(error);
        });
        console.log(this.state.browser);
        console.log(this.state.latest);
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
                <ScrollableTabView
                    style={{marginTop: 20,}}
                    tabBarActiveTextColor='#580000'
                    tabBarInactiveTextColor='grey'
                    tabBarTextStyle={{fontSize: 14}}
                    tabBarUnderlineStyle={styles.lineStyle}
                >
                    <View tabLabel='熱門瀏覽'>
                        <ListView
                            dataSource={this.state.browser}
                            renderRow={this._renderRow}
                        />
                    </View>
                    <View tabLabel='最新樂譜'>
                        <ListView
                            dataSource={this.state.latest}
                            renderRow={this._renderRow}
                        />
                    </View>
                </ScrollableTabView>
            </View>

        );
    }

    _renderTest = (rowData) => {
        return (
            <Text>{rowData.song}</Text>
        );
    };

    _renderRow = (rowData) => {
        return (
            <View style={styles.song}>
                <Image
                    style={{
                        position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
                        width: undefined,
                        height: undefined,
                        resizeMode: 'cover',
                    }}
                    borderRadius={8}
                    source={require("../../assets/images/girl_plate.png")}
                />
                <TouchableHighlight style={styles.container}
                                    onPress={() => {
                                        const id = rowData.id;
                                        console.log("Pressed song: " + id);
                                        this.props.navigation.navigate("Chord", {id},);
                                    }}>
                    <View style={{
                        flexDirection: "row",
                        flex: 1,
                    }}>
                        <Image
                            style={{flex: 1, resizeMode: 'contain', alignSelf: 'stretch',}}
                            source={require("../../assets/images/ic_guitar.png")}
                        />


                        <View style={styles.title}>
                            <Text style={styles.titleTextH}>
                                {rowData.song}
                            </Text>
                            <Text style={styles.titleTextH}>
                                {rowData.okey} ({rowData.years})
                            </Text>
                        </View>

                        <View style={styles.content}>
                            <Text
                                style={styles.contentTextH}>
                                作曲家: {rowData.composer}
                            </Text>
                            <Text
                                style={styles.contentTextH}>
                                填詞人:{rowData.lyricist}
                            </Text>
                        </View>

                    </View>
                </TouchableHighlight>
            </View>
        )
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
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
    lineStyle: {
        width: Dimensions.get('window').width / 2,
        height: 1,
        backgroundColor: 'black',
    },
    song: {
        flex: 1,
        height: 60,
        margin: 2,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "gray",
        borderRadius: 10,
        borderWidth: 2,
    },
    title: {
        flex: 2,
        justifyContent: "center",
        alignContent: "center",
    },
    content: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    titleH: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    contentH: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    titleTextH: {
        alignContent: "center",
        fontSize: formatNumber(14),
        color: "white",
        flexWrap: 'wrap',
    },

    contentTextH: {
        alignContent: "center",
        fontSize: formatNumber(10),
        color: "white",
        flexWrap: 'wrap',
    }
});