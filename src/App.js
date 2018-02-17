import React from 'react';
import {StackNavigator} from 'react-navigation';
import MainScreen from "./screens/Main/Main";
import singer from "./screens/Singer/Singer";

const Navigation = StackNavigator({
    Home: {
        screen: MainScreen,
        navigationOptions: {
            title: 'Home'
            , header: null
        },
    },
    Singer:{screen: singer},
});
export default Navigation;


