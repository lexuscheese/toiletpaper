'use strict';

import React, {Component} from "react";
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation'
import {
    Image,
} from 'react-native';
import singerFrag from "../Singer/SingerFrag";
import searchFrag from "../Search/SearchFrag";
import savedSongFrag from "../SavedSong/SavedSongFrag";
import studentFrag from "../Other/StudentFrag";
import mainFrag from "./MainFrag";
import singer from "../Singer/Singer";
import MyGrid from "../Other/mygrid";
import song from "../Song/Song";


class MainScreen extends Component {
    render() {
        return (
            <AppTabNavigator/>
        );
    }
}


const AppTabNavigator = TabNavigator({

        mainFrag: {
            screen: mainFrag,
            navigationOptions: {
                title: '熱門樂譜',
                Icon: ({tintColor}) => (
                    <Image
                        source={require('../../assets/images/frontpage.svg')}
                        style={[styles.icon, {tintColor: tintColor}]}
                    />
                ),
            },
        },
        singerFrag: {
            screen: StackNavigator({
                SingerMain:{screen:singerFrag,
                    navigationOptions:{
                    header:null,

                    }},
                SingerList:{screen:singer},
                SongList:{screen:song}
            }),
            navigationOptions: {
                title: '歌手選曲',
                icon:
                    ({tintColor}) => (
                        <Image
                            source={require('../../assets/images/singerlist.svg')}
                            style={[styles.icon, {tintColor: tintColor}]}
                        />
                    ),
            }
            },
        searchFrag: {
            screen: searchFrag,
            navigationOptions:
                {
                    title: '進階搜尋',
                    icon:
                        ({tintColor}) => (
                            <Image
                                source={require('../../assets/images/search.svg')}
                                style={[styles.icon, {tintColor: tintColor}]}
                            />
                        ),
                }
        },
        savedSongFrag: {
            screen: savedSongFrag,
            navigationOptions:
                {
                    title: '我的收藏',
                    icon:
                        ({tintColor}) => (
                            <Image
                                source={require('../../assets/images/save.svg')}
                                style={[styles.icon, {tintColor: tintColor}]}
                            />
                        ),
                }
        },
        studentFrag: {
            screen: studentFrag,
            navigationOptions:
                {
                    title: '學生專區',
                    icon:
                        ({tintColor}) => (
                            <Image
                                source={require('../../assets/images/student.svg')}
                                style={[styles.icon, {tintColor: tintColor}]}
                            />
                        ),
                }
        },
    },
    {
        tabBarOptions: {
            scrollEnabled: true,
            activeTintColor:
                '#580000',
        }
        ,
        'lazy':
            true,
        tabBarComponent:
        TabBarBottom,
        tabBarPosition:
            'bottom',
        swipeEnabled:
            false,
        showIcon:
            true,
    }
    )
;


export default MainScreen;