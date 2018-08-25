import React, {Component} from 'react';

import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    AsyncStorage
} from 'react-native';

import styles from '../styles/StyleWatch';

import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

import HomeToolbar from './HomeToolbar';

export default class WatchView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prize: 'سفر با یک نفر به استانبول',
            data: [],
            page: null,
            seed: null
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('awardToday', (error, result)=> {
            this.setState({
                prize: result
            })
        })

        this.makeRequest()

    }

    render() {
        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"/>

                <HomeToolbar/>

                <ScrollView>

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
                                    marginBottom: 10,
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
                                }}>
                                    {this.state.prize}
                                </Text>

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
                                    }}>
                                        بریم مسابقه
                                    </Text>

                                </LinearGradient>

                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={{
                        marginBottom: 4,
                        marginRight: 6,
                        marginLeft: 6,
                        height: 40,
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: '#252f38',
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10,
                    }}>

                        <Text
                            style={{
                                color: 'white',
                                backgroundColor: 'transparent',
                                fontSize: 15,
                                fontFamily: 'IRANSansMobile',
                                textAlign: 'center',
                                paddingLeft: 10,
                                paddingRight: 10,
                                flex: 1
                            }}
                        >فیلمها رو ببین ! جوابهارو پیدا کن</Text>

                        <Image source={require('./../../assets/images/gift_colored.png')}
                               style={{
                                   width: 30, height: 30,
                                   marginRight: 10,
                               }}/>

                    </View>

                    <View
                        style={{flex: 1.3}}>
                        <FlatList
                            data={this.state.data}
                            numColumns={2}
                            renderItem={({item}) => this.renderListItem(item)}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderListItem(item) {
        return <View style={styles.rowContainer}>
            <View style={styles.rowImageContainer}>
                <Image source={{uri: 'https://iranplanner.com/images/attraction/thumb/27350.jpg'}}
                       style={styles.image}
                       resizeMode="cover"/>
            </View>
            <TouchableOpacity style={styles.rowDataContainer}
                              activeOpacity={0.6}
                              onPress={()=>this.videoPress(item)}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('./../../assets/images/play.png')}
                           style={{
                               width: 40,
                               height: 40,
                               marginBottom: 10
                           }}
                    />
                    <Text style={styles.text}>{item.video_title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    }

    videoPress(item) {
        Actions.video();
    }

    makeRequest = () => {
        const {page, seed} = this.state;

        const url = 'https://api.parsdid.com/iranplanner/vas/api-vito.php?action=discover';

        this.setState({loading: true});

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.Result_video : [...this.state.data, ...res.Result_video],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({error, loading: false});
            });
    };
}