import {StyleSheet, Platform, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#192129',
        flex: 3
    },
    descContainer: {
        backgroundColor: '#252f38',
        flex: 3,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginLeft: 8,
        marginTop: 6,
        marginBottom: 6,
        flexDirection: 'column'
    },
    bannerContainer: {
        height: 180,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    bannerImage: {
        width: Dimensions.get('window').width - 10,
        height: 180,
        borderRadius: 10,
        marginLeft:8,
        marginRight:8,

    },
    bannerOverlap: {
        width: Dimensions.get('window').width,
        flex: 1,
        marginRight: 8,
        marginLeft:8,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        color: 'white',
        marginTop: 5,
        fontFamily: 'IRANSansMobile',

    }
});

export default styles;