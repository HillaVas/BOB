import React, {Component} from 'react';

import {View} from 'react-native';

import {Scene} from 'react-native-router-flux';

import HomeToolbar from './HomeToolbar';

import Match from './MatchView'
import Watch from './WatchView'
import Prize from './PrizeView'
import Winner from './WinnerView'

export default class Home extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>

                <HomeToolbar />
                <Scenes/>
            </View>
        )
    }
}

const Scenes = () => (
    <Scene key='tabs' tabs>
        <Scene key='matchTab' hideNavBar title='مسابقه' component={Match}/>
        <Scene key='winnerTab' hideNavBar title='برنده' component={Winner}/>
        <Scene key='prizeTab' hideNavBar title='جایزه' component={Prize}/>
        <Scene key='watchTab' hideNavBar title='ببین' component={Watch}/>
    </Scene>

);