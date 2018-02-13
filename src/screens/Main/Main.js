'use strict';

import React, { Component } from "react";
import {TabNavigator, TabBarBottom} from 'react-navigation'

import singerFrag from "../Singer/SingerFrag";
import searchFrag from "../Search/SearchFrag";
import savedSongFrag from "../SavedSong/SavedSongFrag";
import studentFrag from "../Other/StudentFrag";
import mainFrag from "./MainFrag";


class MainScreen extends Component {
    render() {
        return (
            <AppTabNavigator/>
        );
    }
}


const AppTabNavigator = TabNavigator({

        mainFrag:{
            screen:mainFrag,
            navigationOptions:{
                title:'熱門樂譜'

            }
        },
        singerFrag:{
            screen:singerFrag,
            navigationOptions:{
                title:'歌手選曲'
            }
        }
        searchFrag:{
            screen:searchFrag,
            navigationOptions:{
                title:'進階搜尋'
            }
        },
        savedSongFrag:{
            screen:savedSongFrag,
            navigationOptions:{
                title:'我的收藏'
            }
        },
        studentFrag:{
            screen:studentFrag,
            navigationOptions:{
                title:'學生專區'
            }
        },
    }, {
        tabBarOptions: {
            scrollEnabled: true,
            activeTintColor: '#e91e63',
            // activeTintColor: 'dodgerblue',
        },
        'lazy': true,
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
    });



export default MainScreen;