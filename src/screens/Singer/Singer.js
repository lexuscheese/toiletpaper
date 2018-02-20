'use strict';

import React from 'react';
import {
    View, ListView,
    Text, StyleSheet, TouchableHighlight, Image, ImageBackground, Dimensions,
} from 'react-native';
import GridView from 'react-native-gridview';
import api from '../../utils/apiUtils';


const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class singer extends React.Component<{}> {
    static navigationOptions;


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            singer: ds,

        };
        switch (this.props.navigation.state.params.gender) {
            case 'M':
                this.navigationOptions = {
                    title: "男歌手"
                };
                break;
            case 'F':
                this.navigationOptions = {
                    title: "女歌手"
                };
                break;
            case 'B':
                this.navigationOptions = {
                    title: "樂隊"
                };
                break;
            case 'G':
                this.navigationOptions = {
                    title: "組合"
                };
                break;
            default:
                this.navigationOptions = {
                    title: "null"
                };
        }
    }

    componentDidMount() {
        if (this.props.navigation.state.params.gender != null) {
            api.getSinger(this.props.navigation.state.params.gender).then((res) => {
                this.setState({
                        isLoading: false,
                        singer: ds.cloneWithRows(res),
                    }
                );
            }).catch(error => {
                console.error(error);
            });
        }
    }





    render() {
        console.log("Data: ", this.state.singer);
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.singer}
                    renderRow={this._renderRow}
                />
            </View>
        );
    }
    _renderRow = (rowData) => {
        return (
            <TouchableHighlight
                key={null}
                style={styles.item}
                onPress={
                    () => {
                        const singer = rowData.singer_en;
                        console.log("Pressed singer: " + singer);
                        this.props.navigation.navigate("Chord", {singer},);
                    }
                }>
                <ImageBackground
                    resizeMode="contain"
                    style={styles.image}
                    source={{url: rowData.src}}>
                    <Text style={styles.text}>
                        {rowData.singer_zh}
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listRowContent: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        margin: 10,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        height: 80,
        flexWrap: 'wrap'
    },
    image: {
        width: Dimensions.get('window').width / 2,
        height: 200,
    }, productText: {
        height:20,
        width:50,
        flex: 1,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        color: "white"
    }

});



