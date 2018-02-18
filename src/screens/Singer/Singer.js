'use strict';

import React from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';
import ApiUtils from "../../utils/apiUtils";


export default class singer extends React.Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            date: [],
        }
    }

    componentDidMount() {
        if (this.props.navigation.state.params.gender != null) {
            var url = "http://www.19chord.com/php/get/getSinger.php";
            fetch(url, {
                    method: 'GET',
                    body: {
                        gender: this.props.navigation.state.params.gender
                    },
                }
            )
                .then((response) => response.json())
                .then((response) => {
                    this.setState({isLoading: false,}, function () {
                            // do something with new state
                        console.warn("Success");
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



