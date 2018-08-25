import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginContainer: {
        backgroundColor: '#192129',
        flex: 1,
        height: 380,
        marginRight: 40,
        marginLeft: 40,
        borderRadius: 10,
        elevation: 2,
        shadowColor: 'grey',
        shadowOffset: {width: 0.1, height: 1},
        shadowOpacity: 0.3
    },
    loginTitle: {
        fontFamily:'IRANSansMobile',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        paddingTop: 15,
        paddingBottom: 10,
        // fontWeight: 'bold'
    },
    inputContainer: {
        justifyContent: 'flex-end',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    phoneInput: {
        fontFamily:'IRANSansMobile',
        textAlign: 'right',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        padding: 10,
        margin: 5,
        marginTop: 10,
        backgroundColor: 'white',
        shadowOpacity: 0.1,
        shadowColor: 'black',
        shadowOffset: {width: 0.1, height: 1}
    },
    loginButton: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: '#f15a24',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: 'white',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 1}
    },
    loginButtonText: {
        fontFamily:'IRANSansMobile',
        color: 'white',
        textAlign: 'center'
    },
    forgetButtonText: {
        fontFamily:'IRANSansMobile',
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        marginBottom:20
    }
});

export default styles;