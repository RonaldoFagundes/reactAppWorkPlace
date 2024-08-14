import { StyleSheet } from 'react-native';



export default StyleSheet.create({



    containerMain: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10
    },




    contentMain: {
        alignItems: 'center',
        borderRadius: 14,
        flexDirection: 'column',
        height: 'auto',
        marginTop: 100,
        width: '98%',
        backgroundColor: 'rgba(215, 202, 165, 0.22)',
    },




    containerRel: {
        height: 'auto',
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },




    contentImg: {
        height: 'auto',
        with: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 30
    },



    resizeModel: {
        height: 140,
        width: 140,
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10
    },






    cardRel: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(225, 215, 220, 0.8)',
        borderRadius: 10,
        height: 'auto',
        with: 'auto',
        padding: 20,
        marginBottom: 20,
    },


    input: {
        borderWidth: 1,
        width: '80%',
        height: 'auto',
        color: "black",
        backgroundColor: 'transparent',
        fontSize: 12,
        fontWeight: 'bold',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
       // textAlignVertical: 'top',
        verticalAlign:'top',
    },


    modalContent: {
        height: '100%',
        width: 'auto',
        backgroundColor: 'rgba(215, 202, 165, 0.22)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },




    containerData: {
        height: 'auto',
        width: '80%',
        alignItems: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 20,
    },



    textData: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        flexWrap: 'wrap',
        marginBottom: 15,
    },


    textBtn: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
    },



    textAlert: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    },



    modalCameraStyle: {
        flexDirection: 'column',
        alignItems: 'center',

        height: '100%',
        width: 'auto',
        backgroundColor: 'black',
    },



    containnerCamera: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
        width: 'auto',
    },



    camera: {
        height: 400,
        width: 400,
        marginTop: 60,
        marginBottom: '40%',
        backgroundColor: 'gray'
    },


    containerBtnCamera: {
        flexDirection: 'column',
        height: 'auto',
        width: 'auro',
        padding: 10
    },




    styleBtnFlip: {
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: 'rgba(6, 12, 127, 0.8)',
        width: 'auto',
        height: 'auto',
        marginLeft: 174,
        marginTop: 470,
        borderRadius: 10,
        padding: 10
    },


    styleBtnOne: {
        width: 'auto',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        padding: 10
    },




    styleBtnCamera: {
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 36,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(6, 12, 127, 0.8)',
    },



    containerSwiitch: {
        backgroundColor: 'transparent',
        flexDirection: 'column',
        width: '80%',
        height: 'auto',
        padding: 20,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
    },


    contentSwiitch: {
        marginBottom: 10
    },


    checkboxBase: {
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'transparent',
    },

    checkboxChecked: {
        backgroundColor: 'gray',
        alignItems: 'center',
    },



    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    appTitle: {
        marginVertical: 16,
        fontWeight: 'bold',
        fontSize: 24,
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    checkboxLabel: {
        marginLeft: 8,
        fontWeight: 500,
        fontSize: 18,
    },


});