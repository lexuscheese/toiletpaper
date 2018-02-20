'use strict';

import React from 'react';
import {
    View,
    Text, StyleSheet, TouchableHighlight, Image, ImageBackground, Dimensions,
} from 'react-native';
import GridView from 'react-native-gridview';
import api from '../../utils/apiUtils';


const ds = new GridView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class singer extends React.Component<{}> {
    static navigationOptions;


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            singer: {
                id: "0001",
                singer_zh: "Eason Chan|陳奕訊",
                singer_ed: "Eason Chan",
                src: "http:/www.19chord.com/hk_pic/Eason_Chan.png",
                gender: "M",
            }
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
                        data: res,
                    }
                );
            }).catch(error => {
                console.error(error);
            });
        }
    }

    _renderItem(item, sectionID, rowID, itemIndex, itemID) {
        return (
            <TouchableHighlight
                key={null}
                style={styles.button}
                onPress={
                    () => {
                        console.warn("success: " + this.state.data.id)
                    }
                }>
                <ImageBackground
                    resizeMode="contain"
                    style={styles.container}
                    source={{url: this.state.singer.src}}>
                    <Text style={styles.text}>
                        {this.state.singer.singer_zh}
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
        );
    }


    render() {
        console.log("Data: ", this.state.data);
        return (
            <View style={styles.container}>
                {/*<GridView*/}
                    {/*dataSource={this.state.data}*/}
                    {/*itemsPerRow={2}*/}
                    {/*renderItem={(item, sectionID, rowID, itemIndex, itemID) => {*/}
                        {/*return (*/}
                            {/*<View style={{flex: 1, backgroundColor: '#8F8', borderWidth: 1}}>*/}
                                {/*<Text>{`${item} (${sectionID}-${rowID}-${itemIndex}-${itemID})`}</Text>*/}
                            {/*</View>*/}
                        {/*);*/}
                    {/*}}*/}
                {/*/>*/}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        height: 80,
        flexWrap: 'wrap'
    },
    image: {
        width: Dimensions.get('window').width / 2,
        height: 200,
    },
    text: {
        color: "white"
    }
});



