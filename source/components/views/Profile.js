import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    Platform,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ProfileView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phoneNumber: '09011625853',
            todayScore: 1000,
            totalScore: 15000
        }

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.toolbarContainer}>

                    <TouchableOpacity
                        activeOpacity={.8}
                        onPress={()=>Actions.pop()}>
                        <Icon name={'md-arrow-back'} color='white' size={25}
                              style={{marginTop: 15, marginHorizontal: 10}}/>
                    </TouchableOpacity>

                    <Text style={{
                        color: 'white',
                        flex: 1,
                        fontSize: 16,
                        textAlign: 'right',
                        fontFamily: 'IRANSansMobile',
                        marginLeft: 20,
                        marginRight: 20
                    }}>پروفایل</Text>

                </View>

                <Image
                    source={require('./../../assets/images/profile.png')}
                    style={styles.profileImage}/>

                <Text style={styles.phoneNumber}>{this.state.phoneNumber}</Text>

                <View style={styles.scoreContainer}>


                    <View style={styles.scoreTitleContainer}>

                        <Text style={styles.scoreTitle}>امتیاز من</Text>

                        <Image source={require('./../../assets/images/play.png')}
                               style={styles.scoreTitleImage}
                        />

                    </View>

                    <View style={styles.scoreDetailContainer}>
                        <Text style={styles.scoreDetailText}>{this.state.todayScore} لاکی</Text>
                        <Text style={styles.scoreDetailText}>امتیاز امروز</Text>
                    </View>

                    <View style={styles.scoreDetailContainer}>
                        <Text style={styles.scoreDetailText}>{this.state.totalScore} لاکی</Text>
                        <Text style={styles.scoreDetailText}>امتیاز کل</Text>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192129',
        alignItems: 'center'
    },
    toolbarContainer: {
        width: Dimensions.get('window').width,
        height: Platform.OS === 'ios' ? 70 : 60,
        paddingTop: Platform.OS === 'ios' ? 12 : 0,
        alignItems: 'center',
        backgroundColor: '#192129',
        shadowColor: 'black',
        shadowOffset: {width: 0.2, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        flexDirection: 'row',
        elevation: 6
    },
    profileImage: {
        width: 70,
        height: 70,
        marginTop: 30,
    },
    phoneNumber: {
        fontSize: 20,
        fontFamily: 'IRANSansMobile',
        color: 'white',
        marginTop: 20
    },
    scoreContainer: {
        width: Dimensions.get('window').width - 20,
        margin: 10,
        backgroundColor: '#252f38',
        borderRadius: 10,
        alignItems: 'center',
    },
    scoreTitleContainer: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 20,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    scoreTitle: {
        textAlign: 'right',
        color: 'white',
        fontSize: 18,
        fontFamily: 'IRANSansMobile',
        marginTop: 12,
        marginRight: 10
    },
    scoreTitleImage: {
        width: 40,
        height: 40,
        marginRight: 12,
        marginTop: 12,
        marginBottom: 10
    },
    scoreDetailContainer: {
        width: Dimensions.get('window').width - 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    scoreDetailText: {
        color: 'white',
        fontSize: 17,
        marginLeft: 30,
        marginRight: 30,
        fontFamily: 'IRANSansMobile'
    }
});