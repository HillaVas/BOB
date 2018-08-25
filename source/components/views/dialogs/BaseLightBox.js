import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import QuestionStatus from './DialogQuestionStatus';

export default class BaseLightBox extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderLightBox()}
            </View>
        )
    }

    _renderLightBox() {

        var dialogKey = this.props.dialogKey;

        if (dialogKey == 0) {
            return <QuestionStatus isCorrect={this.props.isCorrect}
                                   correctAnswer={this.props.correctAnswer}
                                   score={this.props.score}
                                   isLast={this.props.isLast}
            />
        } else if (dialogKey == 1) {
            return <Text>key is one</Text>
        } else {
            return <Text>key is two </Text>
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(52,52,52,.5)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});