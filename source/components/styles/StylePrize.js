import {StyleSheet, Platform , Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#192129',
        flex: 1,
        flexDirection: 'column',
    },
    todayPrize: {
        backgroundColor: '#000000',
        flex: .5,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,
    weeklyPrize: {
        backgroundColor: '#000000',
        flex: .5,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,
    bigPrize: {
        backgroundColor: '#000000',
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bannerContainer: {
        height: 200,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    bannerImage: {
        width: Dimensions.get('window').width - 10,
        height: 180,
        borderRadius: 10
    },
    bannerOverlap: {
        height: 200,
        width: Dimensions.get('window').width,
        margin: 4,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    bannerGradient: {
        height: 40,
        width: 100,
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: .4, height: 2},
        shadowOpacity: .4
    },
});

export default styles;