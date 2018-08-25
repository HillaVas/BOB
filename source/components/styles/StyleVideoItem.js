import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 4,
        marginRight: 4,
        marginLeft: 4,
        height: 200,
    },
    imageContainer: {
        flex: 1,
        position: 'absolute'
    },
    dataContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection:'column'
    },
    image: {
        flex: 1,
        width: Dimensions.get('screen').width - 8,
        alignSelf: 'stretch',
        height: 200
    },
    text: {
        fontFamily: "IRANSansMobile",
        backgroundColor: 'transparent',
        color: 'white',
        fontSize : 18
    }
});

export default styles;