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
            date: [],
        }
    }

    componentDidMount() {
        fetch("http://www.19chord.com/php/get/getSinger.php", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    gender: this.props.navigation.state.params.gender,
                }
            ).then(ApiUtils.checkStatus).then((response) => {
                const statusCode = response.status;
                const data = response.json();
                return Promise.all([statusCode, data]).then(res => ({
                    statusCode: res[0],
                    data: res[1]
                }));
            }).then((res) => {
                const {statusCode, data} = res;
                console.log("statusCode", statusCode);
                console.log("data", data);
                console.warn("data:" +data+ " and statusCode: "+data);
            }).catch(error => {
                console.error(error);
                return {name: "network error", description: ""}
            })
        });
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
};

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },

    });



