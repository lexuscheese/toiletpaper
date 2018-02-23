'use strict';

import React from 'react';
import {
    View, ListView,
    Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableHighlight, Alert,
} from 'react-native';
import api from '../../utils/apiUtils';
import formatNumber from "../../utils/textUtils";
import {NavigationActions} from "react-navigation";


const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class song extends React.Component<{}> {
    static navigationOptions = ({ navigation }) => ({
        title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? '': navigation.state.params.title,
        headerStyle: { backgroundColor: "white" },
    });

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            song: ds,
            songH: ds,
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({ title: this.props.navigation.state.params.rowData.singer_zh });
        if (this.props.navigation.state.params.rowData.singer_en != null) {
            api.getSong(this.props.navigation.state.params.rowData.singer_en).then((res) => {
                this.setState({
                        isLoading: false,
                        song: ds.cloneWithRows(res),
                    }
                );
            }).catch(error => {
                console.error(error);
            });
            api.getSongH(this.props.navigation.state.params.rowData.singer_en).then((res) => {
                this.setState({
                        isLoading: false,
                        songH: ds.cloneWithRows(res),
                    }
                );
            }).catch(error => {
                this.props.navigation.dispatch(NavigationActions.back());
                Alert.alert("請再試！", null, null);
                console.log(error);
            });
        }
    }

    render() {
        console.log("Song: ", this.state.song);
        console.log("SongH: ", this.state.songH);
        return (
            <View style={styles.container}>
                <View style={{alignSelf: 'flex-end', backgroundColor: 'white'}}>
                    <Text style={{flexWrap: "wrap",}}>
                        最新歌曲|Latest Songs
                    </Text>
                </View>
                <View style={styles.songListH}>
                    <ListView
                        horizontal={true}
                        dataSource={this.state.songH}
                        renderRow={this._renderRowH}
                    />
                </View>
                <View style={styles.songList}>
                    <ListView
                        dataSource={this.state.song}
                        renderRow={this._renderRow}
                    />
                </View>
            </View>)
    };

    _renderRowH = (rowData) => {
        return (
            <View style={styles.songH}>
                <Image
                    style={{
                        position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
                        width: undefined,
                        height: undefined,
                        resizeMode: 'cover',
                    }}
                    borderRadius={8}
                    source={require("../../assets/images/hotsong.png")}/>
                <TouchableHighlight style={styles.container}
                                    onPress={()=>{
                                        const id = rowData.id;
                                        console.log("Pressed song: " + id);
                                        this.props.navigation.navigate("Chord", {id},);
                                    }}>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <View
                        style={styles.titleH}>
                        <Text style={styles.titleTextH}>
                            {rowData.song}
                        </Text>

                    </View>
                    <View
                        style={styles.contentH}>
                        <Text
                            style={styles.contentTextH}>
                            {rowData.years}
                        </Text>
                        <Text
                            style={styles.contentTextH}>
                            {rowData.okey}
                        </Text>
                    </View>
                </View>
                </TouchableHighlight>
            </View>

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
                onPress={()=>{
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
        );
    };

    componentWillUnmount(){
        this.setState({song:undefined,songHL:undefined});
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    songListH: {
        flex: 1,
    },
    songList: {
        flex: 2,
        width: Dimensions.get('window').width
    },
    songH: {
        width: 100,
        margin: 5,
        borderColor: "gray",
        borderRadius: 10,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center"
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
    imageH: {},
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