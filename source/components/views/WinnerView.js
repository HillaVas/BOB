import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    Dimensions,
    AsyncStorage
} from 'react-native';

import styles from './../styles/StyleWinner';

import HomeToolbar from './HomeToolbar';
import TimerCountdown from 'react-native-timer-countdown'

export default class WinnerView extends Component {

    constructor() {
        super();

        this.state = {
            counter: true,
            prize: 'ghghd',
            winner: 'amin ahrabian',
            remaining: 0
        };
    }

    componentWillMount() {
        AsyncStorage.getItem('awardToday', (error, result)=> {
            this.setState({
                prize: result
            })
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <HomeToolbar/>

                <View style={{
                    marginBottom: 4,
                    marginRight: 6,
                    marginLeft: 6,
                    height: 40,
                    flexDirection: 'row',
                    backgroundColor: '#252f38',
                    borderRadius: 10,
                    alignItems: 'center',
                    marginTop: 10
                }}>

                    <Text
                        style={{
                            color: 'white',
                            backgroundColor: 'transparent',
                            fontSize: 14,
                            fontFamily: 'IRANSansMobile',
                            textAlign: 'center',
                            paddingLeft: 10,
                            paddingRight: 10,
                            flex: 1
                        }}>برنده ی قرعه کشی هرروز ساهت ۲۱ اعلام میگردد</Text>

                    <Image source={require('./../../assets/images/gift_colored.png')}
                           style={{
                               width: 25, height: 25, marginTop: 3,
                               marginBottom: 3,
                               marginRight: 10,
                           }}/>

                </View>

                <View style={styles.statusContainer}>

                    <Image source={require('./../../assets/images/cup.png')}
                           style={{
                               width: 60,
                               height: 60,
                               marginBottom: 20,
                               resizeMode:'contain'
                           }}
                    />

                    {this._renderIf(this.state.counter, <Counting remaining={this.state.remaining}/>)}

                    {this._renderIf(!this.state.counter, <Counted winner={this.state.winner}/>)}
                </View>

                <View style={styles.bannerContainer}>
                    <Image source={require('./../../assets/images/banner.jpg')}
                           style={styles.bannerImage}
                    />

                    <View style={{
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 180,
                        width: Dimensions.get('window').width - 20
                    }}>

                        <Image source={require('./../../assets/images/gift.png')}
                               style={styles.icon}
                        />
                        <Text style={styles.text}>جایزه ی امروز</Text>
                        <Text style={[styles.text, {fontSize: 20}]}>{this.state.prize}</Text>

                    </View>

                </View>

            </View>
        );
    }

    _renderIf(condition, component) {
        if (condition) {
            return component;
        } else {
            return null;
        }
    }
}

class Counting extends Component {

    constructor() {
        super();

        var d = new Date();
        var hourMillis = d.getHours() * 3600 * 1000 + (d.getMinutes() * 60 * 1000);
        var nineOClock = 21 * 3600 * 1000;

        this.state = {
            remaining: nineOClock - hourMillis
        }
    }

    render() {
        return (
            <View>
                <TimerCountdown
                    initialSecondsRemaining={this.state.remaining}
                    allowFontScaling={true}
                    style={{
                        fontSize: 40,
                        fontFamily: 'IRANSansMobile',
                        color: 'gold',
                        textAlign: 'center'
                    }}
                />

                <Text style={{
                    fontSize: 18,
                    fontFamily: 'IRANSansMobile',
                    textAlign: 'center',
                    color: 'white'
                }}>مانده تا اعلام برنده خوش شانس امروز</Text>

            </View>
        )
    }
}

class Counted extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winner: props.winner
        }
    }

    render() {

        var text = "برنده ی امروز :" + this.state.winner;

        return (
            <View>
                <Text style={{
                    color: 'white',
                    fontFamily: 'IRANSansMobile',
                    fontSize: 17
                }}>{text}</Text>
            </View>
        )
    }

}