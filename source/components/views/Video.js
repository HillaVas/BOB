import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Platform,
    ScrollView,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/Ionicons'

export default class VideoShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoTitle: 'مشاهده ی ویدیو',
            titleLong: 'فرش فروش مهربان بازار تبریز',
            descText: 'وع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عمو'
        }
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#192129'}}>
                <View style={styles.container}>

                    <View style={styles.toolbar}>
                        <TouchableOpacity activeOpacity={.5} onPress={()=>Actions.pop()}>

                            <Image style={styles.toolbarBack} source={require('./../../assets/images/back.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.toolbarText}>{this.state.videoTitle}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => Actions.videoPlay()}
                        activeOpacity={.8}
                        style={styles.bannerContainer}>
                        <Image style={styles.banner} source={require('./../../assets/images/banner.jpg')}/>

                        <Image style={styles.playImage} source={require('./../../assets/images/play.png')}/>
                    </TouchableOpacity>

                    <View style={styles.descContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleLongText}>{this.state.titleLong}</Text>
                            <Icon name='ios-videocam' color="white" size={35} style = {{
                                margin:10
                            }}/>
                        </View>
                        <Text style={{
                            textAlign: 'right',
                            fontFamily: 'IRANSansMobile',
                            color: 'white',
                            fontSize: 14,
                            marginRight: 12,
                            marginTop: 10
                        }}>توضیحات :</Text>
                        <Text style={{
                            textAlign: 'right',
                            fontFamily: 'IRANSansMobile',
                            padding: 10,
                            color: 'white',
                            fontSize: 14,
                        }}>{this.state.descText}</Text>
                    </View>

                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    descContainer: {
        width: Dimensions.get('window').width - 20,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#252f38',
        borderRadius: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
    },
    titleLongText: {
        fontSize: 16,
        fontFamily: 'IRANSansMobile',
        flex: 1,
        color: 'white',
        textAlign: 'right'
    },
    titleImage: {
        width: 40,
        height: 40,
        margin: 10
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#192129',
        alignItems: 'center'
    },
    toolbar: {
        width: Dimensions.get('window').width,
        height: Platform.OS === 'ios' ? 70 : 60,
        shadowOpacity: .6,
        shadowColor: 'black',
        shadowOffset: {width: .1, height: 1},
        alignItems: 'center',
        paddingTop: 20,
        flexDirection: 'row'
    },
    toolbarText: {
        color: 'white',
        flex: 1,
        fontSize: 15,
        textAlign: 'right',
        fontFamily: 'IRANSansMobile',
        marginRight: 20,
        marginLeft: 20
    },
    toolbarBack: {
        height: 25,
        width: 25,
        marginLeft: 10,
        marginRight: 10
    },
    bannerContainer: {
        width: Dimensions.get('window').width - 15,
        height: 230,
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    banner: {
        width: Dimensions.get('window').width - 15,
        height: 230,
        backgroundColor: 'white',
        borderRadius: 10
    },
    playImage: {
        position: 'absolute',
        width: 50,
        height: 50,
    }
});