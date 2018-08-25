import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    AsyncStorage
} from 'react-native';

import styles from './../styles/StylePrize';

import {Actions} from 'react-native-router-flux';

import LinearGradient from 'react-native-linear-gradient';

import HomeToolbar from './HomeToolbar';

export default class PrizeView extends Component {

    constructor() {
        super();

        this.state = {
            prize: 'سفر با یک نفر به استانبول',
            grandPrize: 'سفر با کشتی کروز به یونان',
            correctVisible: false
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('awardFinal', (error, result)=> {
            this.setState({
                grandPrize : result
            })
        })
        AsyncStorage.getItem('awardToday', (error, result)=> {
            this.setState({
                prize: result
            })
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <HomeToolbar/>

                {/*lets go to test section*/}
                <View>
                    <View style={styles.bannerContainer}>

                        <Image source={require('./../../assets/images/banner.jpg')} style={styles.bannerImage}/>

                        <View style={{
                            position: 'absolute',
                            height: 200,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <Image source={require('./../../assets/images/gift.png')} style={{
                                width: 40,
                                height: 40,
                                marginBottom: 10
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

                    <View style={styles.bannerOverlap}>

                        <TouchableOpacity
                            activeOpacity={.9}
                            onPress={()=>Actions.question()}>

                            <LinearGradient colors={['#f15a24', '#ed1c24']}
                                            style={styles.bannerGradient}>

                                <Text style={{
                                    backgroundColor: 'transparent',
                                    textAlign: 'center',
                                    color: 'white',
                                    fontFamily: 'IRANSansMobile'
                                }}>بریم مسابقه</Text>

                            </LinearGradient>

                        </TouchableOpacity>

                    </View>

                </View>

                {/*next section*/}

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
                               width: 30, height: 30,
                               marginRight: 10
                           }}/>

                </View>

                {/*final prize section*/}

                <View style={{
                    flex: 1,
                    backgroundColor: '#252f38',
                    borderRadius: 10,
                    marginRight: 6,
                    marginLeft: 6,
                    marginTop: 10,
                    marginBottom: 10,
                }}>

                    <Image source={require('./../../assets/images/greece.jpg')}
                           style={{
                               flex: 1,
                               width: Dimensions.get('window').width - 12,
                               borderRadius: 10,
                               height: 100,
                               resizeMode: 'cover'
                           }}/>

                    <View style={{
                        flex: 1,
                        width: Dimensions.get('window').width - 12,
                        height: 200,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute'
                    }}>

                        <LinearGradient
                            colors={['#192129', '#252f38']}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 10,
                                borderRadius: 10,
                                shadowColor: 'black',
                                shadowOffset: {width: .1, height: 2},
                                shadowOpacity: .9,
                                marginBottom: 10,
                            }}>

                            <Text
                                style={{
                                    color: 'white',
                                    backgroundColor: 'transparent',
                                    fontFamily: 'IRANSansMobile',
                                }}>جایزه ی فینال</Text>

                        </LinearGradient>

                        <LinearGradient
                            colors={['#00ffdf', '#55ff59']}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 10,
                                borderRadius: 10,
                                shadowColor: 'black',
                                shadowOffset: {width: .1, height: 1},
                                shadowOpacity: .5,
                            }}>

                            <Text
                                style={{
                                    color: 'white',
                                    backgroundColor: 'transparent',
                                    fontFamily: 'IRANSansMobile',
                                    paddingHorizontal:20
                                }}
                            >{this.state.grandPrize}</Text>

                        </LinearGradient>

                    </View>

                </View>
            </View>
        );
    }

    _onQuestionPress() {

    }
}
