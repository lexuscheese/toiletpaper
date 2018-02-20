'use strict';

import React from 'react';
import {
    View, ListView,
    Text, StyleSheet, ImageBackground,
} from 'react-native';
import api from '../../utils/apiUtils';
import formatNumber from "../../utils/textUtils";

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class song extends React.Component<{}> {
    static navigationOptions = {
        title: ''
        // , header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            song: ds,
            songH: ds,
        };
    };

    componentDidMount() {
        if (this.props.navigation.state.params.singer != null) {
            api.getSong(this.props.navigation.state.params.singer).then((res) => {
                this.setState({
                        isLoading: false,
                        song: ds.cloneWithRows(res),
                    }
                );
            }).catch(error => {
                console.error(error);
            });
            api.getSongH(this.props.navigation.state.params.singer).then((res) => {
                this.setState({
                        isLoading: false,
                        songH: ds.cloneWithRows(res),
                    }
                );
            }).catch(error => {
                console.error(error);
            });
        }
    }

    render() {
        console.log("Song: ", this.state.song);
        console.log("SongH: ", this.state.songH);
        return (
            <View style={styles.container}>
                <View style={{alignSelf:'flex-end'}}>
                    <Text style={{flexWrap:"wrap"}}>
                    最新歌曲
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
                <ImageBackground
                    style={styles.imageH}
                    source={require("../../assets/images/hotsong.png")}>
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
                </ImageBackground>
            </View>

        );
    };


    _renderRow = (rowData) => {
        return (
            <View/>
        );
    };


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    songListH: {
        height: 180,

    },
    songList: {
        flex: 1,
    },
    songH: {
        width: 100,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        borderColor:"gray",
        borderRadius: 10,
        borderWidth:2
    },
    imageH: {
    },
    titleH: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    contentH: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },


    song: {},
    titleTextH: {
        justifyContent: "center",
        fontSize: formatNumber(14),
        color:"white"
    },

    contentTextH: {
        alignContent: "center",
        fontSize: formatNumber(10),
        color:"white"
    }

});