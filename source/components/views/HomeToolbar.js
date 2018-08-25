import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Platform,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

export default class HomeToolbar extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{flex: 1}}>
                    <LinearGradient
                        colors={['#ff0015', '#f15a24']}
                        style={styles.gradient}>

                        <Text style={{
                            color: 'white',
                            backgroundColor: 'transparent',
                            textAlign: 'center',
                            marginLeft: 5,
                            marginRight: 5,
                            fontFamily: 'IRANSansMobile'
                        }}>۱۰۰۰لاکی</Text>

                        <Image source={require('./../../assets/images/diamond.png')}
                               style={{width: 25, height: 20, margin: 5, marginRight: 10}}/>

                    </LinearGradient>
                </View>

                <TouchableOpacity
                    onPress={()=>Actions.profile()}>
                    <Text style={{
                        color: 'white',
                        width: 80,
                        fontSize: 14,
                        fontFamily: 'IRANSansMobile'
                    }}>پروفایل من</Text>
                </TouchableOpacity>

                <Image source={require('./../../assets/images/profile.png')} style={{
                    width: 20,
                    height: 20,
                    marginRight: 20,
                    marginLeft: 5
                }}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 70 : 60,
        paddingTop: Platform.OS === 'ios' ? 12 : 0,
        alignItems: 'center',
        backgroundColor: '#192129',
        shadowColor: 'black',
        shadowOffset: {width: 0.2, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 6,
        flexDirection: 'row'
    },
    gradient: {
        width: 90,
        height: 35,
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        borderRadius: 8
    }
});
