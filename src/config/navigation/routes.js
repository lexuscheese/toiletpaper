import {FontIcons} from '../../assets/icons';
import * as Screens from '../../screens/index';
import _ from 'lodash';

export const MainRoutes = [
    {
        id: 'LatestFrag',
        title: '熱門樂譜',
        icon: FontIcons.login,
        screen: Screens.LatestFrag,
        children: []
    },
    {
        id: 'SingerFrag',
        title: '歌手選曲',
        icon: FontIcons.login,
        screen: Screens.SingerFrag,
        children: []
    },
    {
        id: 'SearchFrag',
        title: '進階搜尋',
        icon: FontIcons.login,
        screen: Screens.SearchFrag,
        children: []
    },
    {
        id: 'SavedSongFrag',
        title: '我的收藏',
        icon: FontIcons.login,
        screen: Screens.SavedSongFrag,
        children: []
    },
    {
        id: 'StudentFrag',
        title: '我的收藏',
        icon: FontIcons.login,
        screen: Screens.StudentFrag,
        children: []
    },
];

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
    id: 'GridV2',
    title: 'Start',
    screen: Screens.GridV2,
    children: []
},);

export const MenuRoutes = menuRoutes;