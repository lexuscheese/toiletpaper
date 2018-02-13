import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import * as Screens from '../index';
import {TabNavigator, TabView, TabBarBottom} from 'react-navigation'
import mainFrag from "./MainFrag";
import singerFrag from "../Singer/SingerFrag";
import searchFrag from "../Search/SearchFrag";
import savedSongFrag from "../SavedSong/SavedSongFrag";
import studentFrag from "../Other/StudentFrag";


class MainScreen extends Component {

    render() {
        return (
            <AppTabNavigator/>
        );
    }
}
export default MainScreen;

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
            activeTintColor: 'dodgerblue',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,

    });

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }

});

