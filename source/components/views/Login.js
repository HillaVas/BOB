import React, {Component} from 'react'

import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    ProgressViewIOS
} from 'react-native'

import * as firebase from 'firebase';

import {Actions} from 'react-native-router-flux';

import LinearGradient from 'react-native-linear-gradient';

import styles from '../styles/StyleLogin';
import defaultStyles from '../styles/StyleDefault';

export default class Login extends Component {

    constructor() {
        super();

        this.state = {
            phone: null,
            password: null
        };
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <LinearGradient colors={['#192129', '#252f38']} style={styles.gradient}>
                    <View style={styles.loginContainer}>
                        <Text style={styles.loginTitle}>ثبت نام</Text>
                        <View style={styles.inputContainer}>
                            <Text style={defaultStyles.normalText}>شماره تماس</Text>
                            <TextInput
                                style={styles.phoneInput}
                                placeholder={"شماره تماس"}
                                placeholderTextColor={'#212121'}
                                keyboardType={"numeric"}
                                multiline={false}
                                underlineColorAndroid={'#f2f2f2'}
                                onChangeText={(text) => this.setState({phone: text})}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={defaultStyles.normalText}>رمز عبور</Text>
                            <TextInput
                                style={styles.phoneInput}
                                placeholder={"رمز عبور"}
                                placeholderTextColor={'#212121'}
                                keyboardType={"numeric"}
                                multiline={false}
                                underlineColorAndroid={'#f2f2f2'}
                                onChangeText={(text) => this.setState({password: text})}
                            />
                        </View>

                        <LinearGradient colors={['#f15a24', '#ed1c24']} style={styles.loginButton}>

                            <TouchableOpacity
                                onPress={()=>this.signup('aahrabian@gmail.com','pUtTr@de24$')}
                                activeOpacity={0.5}>
                                <Text style={styles.loginButtonText}>ورود</Text>
                            </TouchableOpacity>

                        </LinearGradient>
                    </View>
                </LinearGradient>
            </KeyboardAvoidingView>
        );
    }

    async signup(email, pass) {

        try {
            await firebase.auth()
                .createUserWithEmailAndPassword(email, pass);

            console.log("Account created");

            // Navigate to the Home page, the user is auto logged in

        } catch (error) {
            console.log(error.toString())
        }
    }


    _login() {

        fetch('https://api.parsdid.com/iranplanner/vas/api-user.php?action=check', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: this.state.phone,
                app: 'vito',
            })
        }).then(response => response.json())
            .then(function (response) {
                console.log(response);
                if (response.Status.Message == "Done") {
                    console.log(response.Status.Status);

                    Actions.tab()
                }
            });
    }
}

