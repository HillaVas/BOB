import React, {Component} from 'react';

import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Image,
    Platform
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

import {Actions} from 'react-native-router-flux';
import {EventRegister} from 'react-native-event-listeners'

import styles from './../styles/StyleQuestion';

export default class QuestionView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dialogVisible: false,
            clicked: false,
            currentIndex: this.props.currentIndex ? this.props.currentIndex : 0,
            totalScore: 0,
            questions: [
                {
                    question: 'آیا امروز فرید واسه همیشه از دست میدیم؟',
                    score: 800,
                    ci: 2,
                    options: [
                        {
                            text: 'نه',
                            mode: 'neutral',
                            index: 0,
                        },
                        {
                            text: 'به امید خدا',
                            mode: 'neutral',
                            index: 1,
                        },
                        {
                            text: 'شاید',
                            mode: 'neutral',
                            index: 2,
                        }, {
                            text: 'باشه',
                            mode: 'neutral',
                            index: 3,
                        }
                    ]
                }, {
                    question: 'سلام جطوری ؟!',
                    score: 260,
                    options: [
                        {
                            text: 'نه',
                            mode: 'neutral',
                            index: 0,
                        },
                        {
                            text: 'به امید خدا',
                            mode: 'neutral',
                            index: 1,
                        },
                        {
                            text: 'شاید',
                            mode: 'neutral',
                            index: 2,
                        }, {
                            text: 'باشه',
                            mode: 'neutral',
                            index: 3,
                        }
                    ],
                    ci: 3
                }, {
                    question: 'خوبم مرسی',
                    score: 500,
                    options: [
                        {
                            text: 'نه',
                            mode: 'neutral',
                            index: 0,
                        },
                        {
                            text: 'به امید خدا',
                            mode: 'neutral',
                            index: 1,
                        },
                        {
                            text: 'شاید',
                            mode: 'neutral',
                            index: 2,
                        }, {
                            text: 'باشه',
                            mode: 'neutral',
                            index: 3,
                        }
                    ],
                    ci: 1
                }
            ]
        };

    }

    componentWillMount() {
        this.listener = EventRegister.addEventListener('onBackEvent', (data) => {
            if (this.state.currentIndex == 2) {
                Actions.pop()
            } else {
                this.setState({
                    currentIndex: this.state.currentIndex += 1,
                    clicked: false
                })
            }
        })
    }

    componentWillUnmount() {
        EventRegister.removeEventListener(this.listener)
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{
                    height: Platform.OS === 'ios' ? 70 : 60,
                    shadowColor: 'black',
                    shadowOffset: {width: .1, height: .5},
                    shadowOpacity: .5,
                    alignItems: 'center',
                    elevation: 6,
                    flexDirection: 'row'
                }}>

                    <TouchableOpacity
                        activeOpacity={.8}
                        onPress={()=>Actions.pop()}>
                        <Icon name={'md-arrow-back'} color='white' size={25}
                              style={{marginTop: 15, marginHorizontal: 10}}/>
                    </TouchableOpacity>

                    <Text style={{
                        fontFamily: 'IRANSansMobile',
                        color: 'white',
                        textAlign: 'right',
                        alignSelf: 'center',
                        flex: 1,
                        marginTop: 10,
                        marginHorizontal: 15,
                        fontSize: 16
                    }}>امتیاز : {this.state.totalScore}</Text>

                </View>

                <View style={styles.questionScoreInfo}>

                    <Text style={styles.questionScoreInfoText}>{this._getQuestionDescription()}</Text>

                    <Image source={require('./../../assets/images/play.png')}
                           style={styles.questionScoreInfoImage}/>
                </View>

                <View style={styles.questionContainer}>
                    <Text style={{
                        color: 'white',
                        fontFamily: 'IRANSansMobile'
                    }}>سوال {this._getQuestionNumber()}</Text>
                    <Text style={styles.questionText}>{this.state.questions[this.state.currentIndex].question}</Text>
                </View>

                <View style={ styles.answersContainer}>
                    <FlatList
                        data={this.state.questions[this.state.currentIndex].options}
                        numColumns={2}
                        extraData={this.state}
                        renderItem={({item}) => this._renderListItem(item)}
                    />
                </View>

                <View style={{
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <Text style={{
                        color: 'white',
                        fontSize: 14,
                        fontFamily: 'IRANSansMobile'
                    }}>سوال روز شنبه ۲۱ فروردین</Text>

                </View>

            </View>
        );
    }

    _renderListItem(item) {

        var clicked = this.state.clicked;

        console.log(item);

        if (item.mode == 'neutral') {
            return <TouchableOpacity
                activeOpacity={.5}
                style={styles.rowContainer}
                onPress={!clicked ? () => this._itemPressed(item) : (this._itemNonPress())}>
                <Text style={styles.questionText}>{item.text}</Text>
            </TouchableOpacity>
        } else if (item.mode == 'correct') {
            return <TouchableOpacity
                activeOpacity={1}
                style={[styles.rowContainer, {backgroundColor: 'green'}]}>
                <Text style={styles.questionText}>{item.text}</Text>
            </TouchableOpacity>
        } else if (item.mode == 'wrong') {
            return <TouchableOpacity
                activeOpacity={1}
                style={[styles.rowContainer, {backgroundColor: 'red'}]}>
                <Text style={styles.questionText}>{item.text}</Text>
            </TouchableOpacity>
        }

    }

    _getQuestionNumber() {
        if (this.state.currentIndex == 0) {
            return 'اول'
        } else if (this.state.currentIndex == 1) {
            return 'دوم'
        } else {
            return 'سوم'
        }
    }

    _getQuestionDescription() {
        return 'سوال ' + this._getQuestionNumber() + ' ' + this._getCurrentQuestion().score + ' ' + 'امتیاز دارد.';
    }

    _getCurrentQuestion() {
        return this.state.questions[this.state.currentIndex];
    }

    _itemNonPress() {

    }

    _itemPressed(item) {

        var items = this.state.questions[this.state.currentIndex].options;
        var correctIndex = this.state.questions[this.state.currentIndex].ci;
        var key = false;

        if (item.index == correctIndex) {
            items[item.index].mode = 'correct';
            key = true;
            this.setState({
                totalScore: this.state.totalScore += this.state.questions[this.state.currentIndex].score
            })

        } else {
            items[item.index].mode = 'wrong';
            key = false;
        }

        this.setState({
            clicked: true
        });

        console.log(this.state.currentIndex);

        setTimeout(()=> {
            Actions.lightBox({
                dialogKey: 0,
                isCorrect: key,
                score: this.state.questions[this.state.currentIndex].score,
                correctAnswer: items[correctIndex].text,
                isLast: this.state.currentIndex == 2
            });
        }, 1000)

    }
}

