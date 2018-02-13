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

        HomeTab:{
            screen:mainFrag,

        },
        SingerListTab:{
            screen:singerFrag,
        },
        SearchTab:{
            screen:searchFrag,

        },
        SaveTab:{
            screen:savedSongFrag,

        },
        StudentTab:{
            screen:studentFrag,

        },},
    {
        tabBarOptions: {
            // activeTintColor: 'dodgerblue',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,

    });



export default MainScreen;