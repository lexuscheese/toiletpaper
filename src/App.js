import React from 'react';
import {
    TabNavigator,
    StackNavigator
} from 'react-navigation';
import {withRkTheme} from 'react-native-ui-kitten';
import * as Screens from './screens';
// import track from './config/analytics';

import {AppLoading, Font} from 'expo';
import {View} from "react-native";
import MainScreen from "./screens/Main/Main";



function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

let SideMenu = withRkTheme(Screens.SideMenu);


export default class App extends React.Component {
    state = {
        loaded: false
    };

    componentWillMount() {
        this._loadAssets();
    }

    _loadAssets = async() => {
        await Font.loadAsync({
            'fontawesome': require('./assets/fonts/fontawesome.ttf'),
            'icomoon': require('./assets/fonts/icomoon.ttf'),
            'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),
            'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
            'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
            'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
            'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        });
        this.setState({loaded: true});
    };

    render() {
        if (!this.state.loaded) {
            return <AppLoading />;
        }

        return (
            <View style={{flex: 1}}>
                <KittenApp
                    onNavigationStateChange={(prevState, currentState) => {
                        const currentScreen = getCurrentRouteName(currentState);
                        const prevScreen = getCurrentRouteName(prevState);

                        // if (prevScreen !== currentScreen) {
                        //     track(currentScreen);
                        // }
                    }}
                />
            </View>
        );
    }
}

const KittenApp = StackNavigator({
    Home: {
        screen: MainScreen
    }
}, {
    headerMode: 'none',
});


Expo.registerRootComponent(App);
