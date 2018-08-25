import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    AsyncStorage,
    AppState
} from 'react-native';

import styles from './../styles/StyleMatch';
import LinearGradient from 'react-native-linear-gradient';

import HomeToolbar from './HomeToolbar';

import {Actions} from 'react-native-router-flux';

export default class AnswerView extends Component {

    constructor() {
        super();

        this.state = {
            appState: AppState.currentState,
            prize: 'سفر با یک نفر به استانبول',
            questionDesc: 'سوال روز شنبه ۱۱ فروردین',
            answered: false
        }
    }

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    componentWillMount() {
        AsyncStorage.getItem('today', (error, result) => {
            this.setState({
                questionDesc: 'سوال روز ' + result
            })
        });

        AsyncStorage.getItem('awardToday', (error, result) => {
            this.setState({
                prize: result
            })
        });
    }

    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/active/) && nextAppState === 'background') {
            console.log('App has come to the background!')
        } else if (this.state.appState.match(/background|inactive/) && nextAppState === 'active') {
            console.log('App has come to the foreground!')
        }
        this.setState({appState: nextAppState});
    };

    render() {
        return (
            <View style={styles.container}>

                <HomeToolbar/>

                {this._renderIf(this.state.answered,
                    <AlreadyAnswered questionDesc={this.state.questionDesc}/>
                )}

                {this._renderIf(!this.state.answered,
                    <NoAnswer questionDesc={this.state.questionDesc}/>
                )}

                <View style={styles.bannerContainer}>

                    <Image source={require('./../../assets/images/banner.jpg')} style={styles.bannerImage}/>

                    <View style={{
                        position: 'absolute',
                        justifyContent: 'center',
                        height: 180,
                        alignItems: 'center'
                    }}>

                        <Image source={require('./../../assets/images/gift.png')} style={{
                            width: 40,
                            height: 40,
                            marginBottom: 10,
                            resizeMode: 'contain'
                        }}/>

                        <Text style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            fontFamily: 'IRANSansMobile',
                        }}>جایزه ی امروز</Text>

                        <Text style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            fontFamily: 'IRANSansMobile',
                            marginBottom: 20
                        }}>{this.state.prize}</Text>

                    </View>

                </View>

            </View>
        );
    }

    _renderIf(condition, content) {
        if (condition) {
            return content;
        } else {
            return null;
        }
    }
}

class AlreadyAnswered extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questionDesc: props.questionDesc
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            questionDesc: nextProps.questionDesc
        })
    }

    render() {
        return (
            <View style={styles.descContainer}>

                <Image source={require('./../../assets/images/smile.png')}
                       style={{
                           width: 80,
                           height: 65,
                           marginBottom: 20
                       }}
                />

                <Text style={styles.text}>ممنون که به سوال امروز جواب دادی</Text>
                <Text style={styles.text}>امیدواریم شما برنده شی :)</Text>

                <Text style={[styles.text, {marginTop: 40, fontSize: 12}]}>{this.state.questionDesc}</Text>

            </View>
        )
    }
}

class NoAnswer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questionDesc: props.questionDesc
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            questionDesc: nextProps.questionDesc
        })
    }

    render() {
        return (
            <View style={styles.descContainer}>

                <Text style={styles.text}>فاصله ی شما تا جایزه ی امروز</Text>
                <Text style={styles.text}>فقط سه تا سواله</Text>

                <TouchableOpacity
                    activeOpacity={.85}
                >

                    <LinearGradient colors={['#f15a24', '#ed1c24']}
                                    style={{
                                        height: 40,
                                        width: 100,
                                        paddingLeft: 8,
                                        paddingRight: 8,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10,
                                        shadowColor: 'black',
                                        shadowOffset: {width: .4, height: 2},
                                        shadowOpacity: .4,
                                        marginTop: 20
                                    }}>

                        <TouchableOpacity
                            activeOpacity={.9}
                            onPress={()=>Actions.question()}>
                            <Text style={{
                                backgroundColor: 'transparent',
                                textAlign: 'center',
                                color: 'white',
                                fontFamily: 'IRANSansMobile'
                            }}>
                                بریم مسابقه
                            </Text>
                        </TouchableOpacity>

                    </LinearGradient>

                </TouchableOpacity>

                <Text style={[styles.text, {marginTop: 40, fontSize: 12}]}>{this.state.questionDesc}</Text>

            </View>
        )
    }
}
