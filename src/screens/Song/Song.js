'use strict';

import React from 'react';
import {
    View, ListView,
    Text, StyleSheet, TouchableHighlight, Image, ImageBackground, Dimensions,
} from 'react-native';
import api from '../../utils/apiUtils';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class song extends React.Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            song: ds,
            songH:ds,
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
                <Text>{this.props.navigation.state.params.singer}</Text>
            </View>)
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
});