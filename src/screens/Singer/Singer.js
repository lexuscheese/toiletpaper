'use strict';

import React from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';
import ApiUtils from "../../utils/apiUtils";


export default class singer extends React.Component<{}> {
    static navigationOptions;


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            date: [],
        };
        switch (this.props.navigation.state.params.gender) {
            case 'M':
                this.navigationOptions ={
                    title: "男歌手"
                };
                break;
            case 'F':
                this.navigationOptions ={
                    title: "女歌手"
                };
                break;
            case 'B':
                this.navigationOptions ={
                    title: "樂隊"
                };
                break;
            case 'G':
                this.navigationOptions ={
                    title: "組合"
                };
                break;
            default:
                this.navigationOptions ={
                    title: "null"
                };
        }
    }

    componentDidMount() {
        if (this.props.navigation.state.params.gender != null) {
            var url = "http://www.19chord.com/php/get/getSinger.php?gender=" + this.props.navigation.state.params.gender;
            fetch(url)
                // .then((response) => response.json())
                .then((response) => {
                    this.setState({isLoading: false,}, function () {
                            // do something with new state
                            console.warn("Success："+response.toString()+"/n in "+ url);
                        }
                    );
                }).catch(error => {
                console.error(error);
            });
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {this.props.navigation.state.params.gender}
                </Text>
            </View>
        );
    }
}
;

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },

    });



