import {StyleSheet, Platform, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#192129',
        flexDirection: 'column',
    },
    descContainer: {
        height: 40,
        marginBottom: 10
    },
    bannerContainer: {
        height: 180,
        borderRadius: 10,
        margin: 10,
    },
    statusContainer: {
        flex: 1,
        width: Dimensions.get('window').width - 20,
        borderRadius:10,
        marginTop:6,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#252f38'
    },
    bannerImage: {
        height: 180,
        width: Dimensions.get('window').width - 20,
        borderRadius: 10,
        margin: 0
    },
    text: {
        fontFamily: "IRANSansMobile",
        fontSize: 18,
        backgroundColor: 'transparent',
        color: 'white'
    },
    icon: {
        width: 40,
        height: 40,
        marginBottom: 10
    }
});

export default styles;