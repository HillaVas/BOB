import React, {Component} from 'react';

import {
    AlertIOS,
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import {Actions} from 'react-native-router-flux'

export default class VideoPlay extends Component {

    constructor(props) {
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onBuffer = this.onBuffer.bind(this);
    }

    state = {
        rate: 1,
        volume: 1,
        muted: false,
        resizeMode: 'contain',
        duration: 0.0,
        currentTime: 0.0,
        controls: false,
        paused: true,
        skin: 'custom',
        ignoreSilentSwitch: null,
        isBuffering: false,
    };

    onLoad(data) {
        console.log('On load fired!');
        this.setState({duration: data.duration});
    }

    onProgress(data) {
        this.setState({currentTime: data.currentTime});
    }

    onBuffer({isBuffering}: { isBuffering: boolean }) {
        this.setState({isBuffering});
    }

    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        } else {
            return 0;
        }
    }

    renderRateControl(rate) {
        const isSelected = (this.state.rate == rate);

        return (
            <TouchableOpacity onPress={() => {
                this.setState({rate: rate})
            }}>
                <Text style={[styles.controlOption, {
                    fontSize: isSelected ? 14 : 12,
                    fontWeight: isSelected ? "bold" : "normal", color: isSelected ? "#00ffdf" : "grey"
                }]}>
                    {rate}x
                </Text>
            </TouchableOpacity>
        )
    }

    renderResizeModeControl(resizeMode, icon) {
        const isSelected = (this.state.resizeMode == resizeMode);

        return (
            <TouchableOpacity onPress={() => {
                this.setState({resizeMode: resizeMode})
            }}>
                <Icon name={icon} color={isSelected ? '#00ffdf' : 'grey'} size={isSelected ? 25 : 20}
                      style={{
                          margin: 6
                      }}/>
            </TouchableOpacity>
        )
    }

    renderCustomSkin() {
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.fullScreen} onPress={() => {
                    this.setState({paused: !this.state.paused})
                }}>
                    <Video
                        source={{uri: 'https://videos.crazygames.com/madalin-stunt-cars-2-trimmed.mp4'}}
                        style={styles.fullScreen}
                        rate={this.state.rate}
                        paused={this.state.paused}
                        volume={this.state.volume}
                        muted={this.state.muted}
                        ignoreSilentSwitch={this.state.ignoreSilentSwitch}
                        resizeMode={this.state.resizeMode}
                        onLoad={this.onLoad}
                        onBuffer={this.onBuffer}
                        onProgress={this.onProgress}
                        repeat={true}
                    />
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    position: 'absolute'
                }}><TouchableOpacity
                    onPress={()=>Actions.pop()}
                    activeOpacity={.8}>
                    <Text style={{
                        width: 60,
                        textAlign: 'center',
                        fontSize: 15,
                        color: 'white',
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        backgroundColor: 'grey',
                        borderRadius: 10,
                        fontFamily: 'IRANSansMobile',
                        margin: 20
                    }}>خروج</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.controls}>
                    <View style={styles.generalControls}>
                        <View style={styles.rateControl}>
                            {this.renderRateControl(0.5)}
                            {this.renderRateControl(1.0)}
                            {this.renderRateControl(2.0)}
                            <Text style={{
                                color: 'white',
                                fontSize: 13,
                                fontFamily: 'IRANSansMobile',
                                textAlign: 'center',
                                alignSelf: 'center'
                            }}>سرعت :</Text>
                        </View>

                        <TouchableOpacity onPress={()=> {
                            this.setState({paused: !this.state.paused})
                        }}>

                            <Image
                                style={styles.toggle}
                                source={this.state.paused ? require('./../../assets/images/play.png') : require('./../../assets/images/pause.png')}/>

                        </TouchableOpacity>

                        <View style={styles.resizeModeControl}>
                            {this.renderResizeModeControl('contain', 'compress')}
                            {this.renderResizeModeControl('cover', 'tv')}
                            {this.renderResizeModeControl('stretch', 'expand')}
                        </View>
                    </View>

                    <View style={styles.trackingControls}>
                        <View style={styles.progress}>

                            <Text style={{color: 'white', margin: 4}}>{Math.round(this.state.currentTime)}</Text>

                            <LinearGradient
                                colors={['#00ffdf', '#55ff59']}
                                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                                style={[styles.innerProgressCompleted, {flex: flexCompleted}]}/>
                            <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]}/>

                            <Text style={{color: 'white', margin: 4}}>{Math.round(this.state.duration)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        //this.state.controls ? this.renderNativeSkin() :
        return this.renderCustomSkin();
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controls: {
        backgroundColor: "transparent",
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        left: 4,
        right: 4,
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerProgressCompleted: {
        height: 15,
        backgroundColor: '#00ffdf',
    },
    innerProgressRemaining: {
        height: 15,
        backgroundColor: '#2C2C2C',
    },
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        paddingBottom: 10,
    },
    rateControl: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    volumeControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ignoreSilentSwitchControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: "white",
        paddingLeft: 2,
        paddingRight: 2,
    },
    nativeVideoControls: {
        top: 184,
        height: 300
    },
    toggle: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
});