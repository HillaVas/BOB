import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

import {EventRegister} from 'react-native-event-listeners'

export default class DialogQuestionStatus extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                       source={this.props.isCorrect ? require('./../../../assets/images/smile.png') : require('./../../../assets/images/sad.png')}/>
                <Text
                    style={styles.warningText}>{this.props.isCorrect ? 'جواب شما درست بود' : 'جواب شما نادرست بود !'}</Text>
                <Text style={styles.text}>{this.props.isCorrect ? 'امتیاز سوال :' : 'جواب صحیح :'}</Text>
                <Text style={[styles.text, {
                    fontSize: 18,
                    marginTop: 10
                }]}>{this.props.isCorrect ? this.props.score : this.props.correctAnswer}</Text>

                <TouchableOpacity
                    activeOpacity={.9}
                    onPress={() => this._close()}>
                    <LinearGradient style={styles.gradient} colors={['#f15a24', '#ed1c24']}>
                        <Text style={styles.button}>{this.props.isLast ? 'پایان' : 'بریم بعدی !'}</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        )
    }

    _close() {
        Actions.pop();

        if (this.props.isLast) {
            EventRegister.emit('onBackEvent', 'false')
        } else {
            EventRegister.emit('onBackEvent', 'true')
        }

    }

}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height / 2.2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10
    },
    image: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
        marginBottom: 20
    },
    warningText: {
        fontFamily: 'IRANSansMobile',
        color: 'red',
        fontSize: 21
    },
    text: {
        fontFamily: 'IRANSansMobile'
    },
    gradient: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 10
    },
    button: {
        color: 'white',
        fontFamily: 'IRANSansMobile'
    }
});