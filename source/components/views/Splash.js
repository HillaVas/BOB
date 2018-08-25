import React, {Component} from 'react';

import {View, Text, Image, StyleSheet, AsyncStorage} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Spinner from 'react-native-spinkit';

export default class Splash extends Component {

    componentWillMount() {

        this._fetchInformation();
    }

    constructor() {
        super();

        this.state = {
            todayDate: 'today'
        }

    }

    render() {
        return (
            <View style={styles.container}>

                <Image style={styles.background} source={require('./../../assets/images/splash_banner.jpg')}/>

                <Spinner
                    type={'Bounce'}
                    size={300}
                    style={{
                        position: 'absolute',
                        marginBottom: 20
                    }}
                />

                <View style={{
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image style={styles.image} source={require('./../../assets/images/play.png')}/>
                    <Text style={styles.text}>درحال بارگذاری</Text>
                </View>
            </View>
        )
    }

    _fetchInformation() {

        var today, awardToday, awardFinal;

        return fetch('https://api.parsdid.com/iranplanner/vas/api-bob.php?action=splash')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.Result_video.award);

                today = responseJson.Result_video.date.date_shamsi_day_title + ' ' +
                    responseJson.Result_video.date.date_shamsi_day + ' ' +
                    responseJson.Result_video.date.date_shamsi_month_title;

                awardToday = responseJson.Result_video.award.award_daily;
                awardFinal = responseJson.Result_video.award.award_final;

                this._saveData('today', today);
                this._saveData('awardToday', awardToday);
                this._saveData('awardFinal', awardFinal);

                // Actions.refresh('tab')
                setTimeout(()=> {
                    Actions.tab();
                }, 1000)

            })
            .catch((error) => {
                console.error(error);
            });
    }

    _saveData(key, value) {
        AsyncStorage.setItem(key, value);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#192126'
    },
    background: {
        flex: 1
    },
    image: {
        width: 70,
        height: 70,
        margin: 15
    },
    text: {
        color: 'white',
        fontSize: 19,
        fontFamily: 'IRANSansMobile'
    }
});