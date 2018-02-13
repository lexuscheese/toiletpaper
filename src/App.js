import React from 'react';
import {StackNavigator} from 'react-navigation';
import MainScreen from "./screens/Main/Main";


const Navigation = StackNavigator({
    Home: {
        screen: MainScreen
    }
}, {
    headerMode: 'none',
});
export default class App extends React.Component {
    render() {
        return (
            <Navigation/>
        );
    }
}


