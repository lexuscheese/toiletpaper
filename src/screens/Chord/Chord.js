'use strict';
import React from 'react';
import {
    View, ListView, ScrollView,
    Text, StyleSheet, Alert,
} from 'react-native';
import api from '../../utils/apiUtils';
import {NavigationActions} from "react-navigation";

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class chord extends React.Component<{}> {
    static navigationOptions = ({ navigation }) => ({
        title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? '': navigation.state.params.title,
        headerStyle: { backgroundColor: "white" },
    });

    constructor(props) {
        super(props);
        this.state = {
            song: [{
                chrodsheet: ""
            }],
            textsize:15,
            scrollSpeed:1,
            oKey:"C",
            currentKey:"C",
        };
    };


    componentDidMount() {
        if (this.props.navigation.state.params.id != null) {
            api.getChord(this.props.navigation.state.params.id).then((res) => {
                this.setState({
                    isLoading: false,
                    song: res[0],
                    oKey: getKey(res[0].okey),
                });
                this.props.navigation.setParams({ title: this.state.song.song });
                console.log("Resource: " + res);
            }).catch(error => {
                this.props.navigation.dispatch(NavigationActions.back());
                Alert.alert("請再試！", null, null);
                console.log(error);
            });
        }
    }


    render() {
        let result = getChord(this.state.song.chordsheet,this.state.currentKey);
        console.log("Song Id: " + this.props.navigation.state.params.id);
        console.log(this.state);
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>
                        {result}
                    </Text>
                </ScrollView>
            </View>)
    };
};

function getChord(chord,key){
    return chord
}

function getKey(key){
    return key
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text:{
        textAlign: 'justify',
        lineHeight: 30,
    },
});