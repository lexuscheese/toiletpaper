'use strict';

import React from 'react';
import {
    View, ListView,Alert,
    Text, StyleSheet, TouchableHighlight, Image, ImageBackground, Dimensions,
} from 'react-native';
import api from '../../utils/apiUtils';
import {NavigationActions} from "react-navigation";


const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class singer extends React.Component<{}> {
    static navigationOptions = ({navigation}) => ({
        title: typeof(navigation.state.params) === 'undefined' || typeof(navigation.state.params.title) === 'undefined' ? '' : navigation.state.params.title,
        headerStyle: {backgroundColor: "white"},
    });



    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            singer: ds,
        };
        this.setTitle();
    }

    setTitle() {
        let title = "";
        switch (this.props.navigation.state.params.gender) {
            case 'M':
                title = "男歌手";
                break;
            case 'F':
                title = "女歌手";
                break;
            case 'B':
                title = "樂隊";
                break;
            case 'G':
                title = "組合";
                break;
            default:
                this.navigationOptions = {
                    title: "null"
                };
        }
        this.props.navigation.setParams({title: title});
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
                this.props.navigation.dispatch(NavigationActions.back());
                Alert.alert("請再試！",null,null);
                console.log(error);
            });
        }
    }


    render() {
        console.log("Data: ", this.state.singer);
        return (
            <View style={styles.container}>
                <ListView
                    contentContainerStyle={styles.listRowContent}
                    dataSource={this.state.singer}
                    renderRow={this._renderRow}
                />
            </View>
        );
    }

    _renderRow = (rowData) => {
        return (
            <View style={styles.item}>
                <TouchableHighlight
                    key={null}
                    style={styles.container}
                    onPress={
                        () => {
                            const singer = rowData.singer_en;
                            console.log("Pressed singer: " + singer);
                            this.props.navigation.navigate("SongList", {rowData},);
                        }
                    }>
                    <View style={{
                        flex: 1, alignItems: "center",
                        justifyContent: "center", borderColor: 'gray',
                        borderWidth: 2,
                        borderRadius: 10,
                    }}>
                        <Image
                            resizeMode="cover"
                            style={styles.image}
                            source={{url: rowData.src}}/>
                        <View style={{
                            flex: 1, alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <Text style={styles.text}>
                                {rowData.singer_zh}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    };

    componentWillUnmount() {
        this.setState({singer: null});
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listRowContent: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        margin: 5,
        flexWrap: 'wrap',
        width: Dimensions.get('window').width / 2 - 10,
        height: 80,
    },
    image: {
        position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
    }, productText: {
        height: 20,
        width: 50,
        flex: 1,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        color: "white"
    }

});



