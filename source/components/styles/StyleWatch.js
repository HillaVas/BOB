import {StyleSheet, Platform, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#192129',
        paddingBottom:8
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
        borderRadius:10
    },
    bannerOverlap: {
        height: 200,
        width:Dimensions.get('window').width,
        margin: 4,
        position:'absolute',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    bannerGradient:{
        height: 40,
        width:100,
        paddingLeft:8,
        paddingRight:8,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        shadowColor:'black',
        shadowOffset:{width:.4,height:2},
        shadowOpacity:.4
    },
    rowContainer: {
        marginTop: 8,
        marginRight: 6,
        marginLeft: 6,
        height: 150,
        width: Dimensions.get('screen').width / 2 - 12 ,
        borderRadius:10
    },
    rowDataContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column'
    },
    rowImageContainer: {
        flex: 1,
        position: 'absolute',
        borderRadius:10
    },
    image: {
        flex: 1,
        width: Dimensions.get('screen').width / 2 - 12,
        height: 150,
        borderRadius:10
    },
    text: {
        fontFamily: "IRANSansMobile",
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    }
});

export default styles;