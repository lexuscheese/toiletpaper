import React from 'react';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation'
import singer from "./screens/Singer/Singer";
import singerFrag from "./screens/Singer/SingerFrag";
import studentFrag from "./screens/Other/StudentFrag";
import mainFrag from "./screens/Main/MainFrag";
import song from "./screens/Song/Song";
import savedSongFrag from "./screens/SavedSong/SavedSongFrag";
import searchFrag from "./screens/Search/SearchFrag";
import chord from "./screens/Chord/Chord";
import {Image} from "react-native";


const Navigation = StackNavigator({
    Home: {
        screen: TabNavigator({

                mainFrag: {
                    screen: mainFrag,
                    navigationOptions: {
                        title: '熱門樂譜',
                        Icon: ({tintColor}) => (
                            <Image
                                source={require('./assets/images/frontpage.svg')}
                                style={[styles.icon, {tintColor: tintColor}]}
                            />
                        ),
                    },
                },
                singerFrag: {
                    screen: StackNavigator({
                        SingerMain: {
                            screen: singerFrag,
                            navigationOptions: {
                                header: null,

                            }
                        },
                        SingerList: {screen: singer},
                        SongList: {screen: song}
                    }),
                    navigationOptions: {
                        title: '歌手選曲',
                        icon:
                            ({tintColor}) => (
                                <Image
                                    source={require('./assets/images/singerlist.svg')}
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
                                        source={require('./assets/images/search.svg')}
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
                                        source={require('./assets/images/save.svg')}
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
                                        source={require('./assets/images/student.svg')}
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
                animationEnabled: false,
            }
        ),
        navigationOptions: {
            header: null
        },
    },
    Chord: {
        screen: chord, navigationOptions: {
            title: '歌名'
        }
    },
});
export default Navigation;


