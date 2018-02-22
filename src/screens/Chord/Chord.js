'use strict';
import React from 'react';
import {
    View, ListView,
    Text, StyleSheet, Alert,
} from 'react-native';
import api from '../../utils/apiUtils';
import {NavigationActions} from "react-navigation";

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class chord extends React.Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            song: [],
            ds:ds,
            song_temp: [{
                0: [{
                    type: "",
                    id: "dsad",
                    ds: "sa"
                }]
            }],


        };
    };


    componentDidMount() {
        if (this.props.navigation.state.params.id != null) {
            api.getChord(this.props.navigation.state.params.id).then((res) => {
                this.setState({
                    isLoading: false,
                    song: this.state.song.concat(res),
                    ds:ds.cloneWithRows(res),
                });
                console.log("Resource: " + res);
            }).catch(error => {
                this.props.navigation.dispatch(NavigationActions.back());
                Alert.alert("請再試！", null, null);
                console.log(error);
            });
        }
    }


    render() {
        console.log("Song Id: " + this.props.navigation.state.params.id);
        console.log("Song: " + this.state.song.value);
        console.log("ds: " + ds);
        console.log("Song_temp: " + this.state.song_temp.value);
        return (
            <View style={styles.container}>
                {(() => {
                    if (this.state.song.chordsheet !== undefined) {
                        return (
                            <Text>
                                {this.state.song.chordsheet}
                            </Text>
                        );
                    }
                })}


            </View>)
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});