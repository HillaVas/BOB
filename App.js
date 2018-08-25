/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    AppState
} from 'react-native';

import * as firebase from 'firebase';

import {Scene, Router, Lightbox} from 'react-native-router-flux';

import Profile from './source/components/views/Profile';
import Video from './source/components/views/Video';
import VideoPlay from './source/components/views/VideoPlay';
import Splash from './source/components/views/Splash';
import Login from './source/components/views/Login';

import Match from './source/components/views/MatchView'
import Watch from './source/components/views/WatchView'
import Prize from './source/components/views/PrizeView'
import Winner from './source/components/views/WinnerView'
import Question from './source/components/views/QuestionView'

import BaseLightBox from './source/components/views/dialogs/BaseLightBox';

import Icon from 'react-native-vector-icons/Ionicons'

const config = {
    apiKey: "AIzaSyB_d7jzoXlxtFl850ACtuWSUIuLom2yX_o",
    authDomain: "iranplannerbob.firebaseapp.com",
    databaseURL: "https://iranplannerbob.firebaseio.com",
    projectId: "iranplannerbob",
    storageBucket: "iranplannerbob.appspot.com",
    messagingSenderId: "573199410229"
};
const firebaseApp = firebase.initializeApp(config);

class TabIcon extends Component {
    render() {
        var color = this.props.focused ? 'white' : 'grey';
        var size = this.props.focused ? 28 : 19;
        var iconName = this.props.iconName;

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Icon name={iconName} size={size} color={color}/>
                <Text style={{
                    color: color,
                    fontFamily: 'IRANSansMobile',
                    fontSize: 11,
                    marginBottom: -9
                }}>{this.props.title}</Text>
            </View>
        );
    }
}

const App = () => (

    <Router>
        <Lightbox>
            <Scene key='root' hideNavBar>
                <Scene key='tab' showLabel={false} swipeEnabled={false} tabs tabBarPosition='bottom' type='reset'
                       tabBarStyle={{backgroundColor: '#252f38', height: 55}}>
                    <Scene key='matchTab' hideNavBar title='مسابقه' iconName={'ios-game-controller-a'} icon={TabIcon}
                           component={Match}/>
                    <Scene key='winnerTab' hideNavBar title='برنده' iconName={'ios-flame'} icon={TabIcon}
                           component={Winner}/>
                    <Scene key='prizeTab' hideNavBar title='جایزه' iconName={'ios-ice-cream'} icon={TabIcon}
                           component={Prize}/>
                    <Scene key='watchTab' hideNavBar title='ببین' iconName={'ios-videocam'} icon={TabIcon}
                           component={Watch}/>
                </Scene>
                <Scene key='profile' component={Profile}/>
                <Scene key='video' component={Video}/>
                <Scene key='videoPlay' component={VideoPlay}/>
                <Scene key='splash' initial component={Splash}/>
                <Scene key='login' component={Login}/>
                <Scene key='question' component={Question}/>
            </Scene>

            <Scene key='lightBox' component={BaseLightBox}/>

        </Lightbox>
    </Router>
);

export default App;


