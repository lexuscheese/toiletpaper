'use strict';
import React from 'react';
import {
    View, ListView,
    Text, StyleSheet, TouchableHighlight, Image, ImageBackground, Dimensions, Alert,
} from 'react-native';
import api from '../../utils/apiUtils';
import {NavigationActions} from "react-navigation";

export default class chord extends React.Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            song:[]
        };
    };

    componentDidMount() {
        if (this.props.navigation.state.params.id != null) {
            api.getChord(this.props.navigation.state.params.id).then((res) => {
                this.setState({
                        isLoading: false,
                        song: res,
                    }
                );
            }).catch(error => {
                this.props.navigation.dispatch(NavigationActions.back());
                Alert.alert("請再試！",null,null);
                console.log(error);
            });
        }
    }


    render() {
        console.log("Song Id: "+this.props.navigation.state.params.id);
        console.log(this.state.song);
        return (
            <View style={styles.container}>
                <Text>
                    {}
                }</Text>
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