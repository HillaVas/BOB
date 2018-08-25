import {StyleSheet, Platform, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#192129'
    },
    questionContainer: {
        flex: .8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    answersContainer: {
        flex: 2.7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    questionScoreInfo:{
        width: Dimensions.get('window').width - 16,
        height: 50,
        backgroundColor: '#252f38',
        marginRight: 8,
        marginLeft: 8,
        marginTop:10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: .4,
        flexDirection: 'row',
        shadowOffset: {width: .1, height: .3},
        alignItems:'center'
    },
    questionScoreInfoText:{
        flex: 1,
        color: 'white',
        textAlign: 'right',
        paddingRight:10,
        paddingLeft:10,
        fontSize:14,
        fontFamily:'IRANSansMobile'
    },
    questionScoreInfoImage:{
        height: 30,
        width: 30,
        margin: 6,
        marginRight: 10,
        padding: 10
    },
    nextContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowContainer: {
        width: Dimensions.get('screen').width / 2.4,
        height: Dimensions.get('screen').height / 3 - 70,
        margin: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        borderColor:'white',
        borderWidth:2.5,
        borderStyle:'dashed'
    },
    questionText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'IRANSansMobile',
        textAlign: 'center'
    },
    nextBtn: {
        width: 100,
        height: 50,
        backgroundColor: 'green',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;