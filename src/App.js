/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    TabNavigator,
    StackNavigator
} from 'react-navigation';
import * as Screens from './screens';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const stack = StackNavigator({
    Home: {
        screen: TabNavigator({
                ...AppRoutes,
            })
    }
});
