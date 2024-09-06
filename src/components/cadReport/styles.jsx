import { StyleSheet } from 'react-native';



export default StyleSheet.create({

    containerLoading: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingBottom: 200,
        justifyContent: 'center',
        alignItems: 'center'
     },
 
    containerMain: {
        flexDirection: 'column',
        height: '100%',
        width: 'auto',
        paddingTop: 30,      
    },

    containerInfo: {
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        height: 'auto',
        width: 'auto',
    },

    containerHeader: {
        height: 'auto',
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 10,
        backgroundColor: 'rgba(215, 202, 165, 0.22)',
    },

    contentHeader: {
        height: 'auto',
        width: "auto",
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'transparent',
        textAlign: 'center'
    },

    imgLogo: {
        height: 60,
        width: 60,
        borderRadius: 10,
        marginRight: 10,
    },

    contentMain: {
        alignItems: 'center',
        borderRadius: 14,
        flexDirection: 'column',
        height: '100%',
        marginTop: 10,
        width: '100%',
        backgroundColor: 'rgba(215, 202, 165, 0.22)',       
    },

    boxWith: {
        height: 'auto',
        width: '30%',
        paddingBottom:10,
    },

    boxWithOut: {
        alignItems: 'center',
        flexDirection: 'column',
        height: 'auto',
        marginBottom: 20,
        width: '80%',
    },

    containerImg: {
        alignItems: 'center',
        flexDirection: 'column',
        height: 'auto',
        marginBottom: 20,
        width: '100%',
    },

    contentImg: {
        height: 'auto',
        with: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 30,
    },

    boxImg: {
        backgroundColor: 'transparent',
        marginBottom: 10,
        marginRight: 10
    },

    resizeModel: {
        height: 100,
        width: 100,
        borderRadius: 10,
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
        width: 300,
        height: 'auto',
        color: "black",
        backgroundColor: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        verticalAlign: 'top',
    },

    textMain: {
        color: '#5D3806',
        fontWeight: 'bold',
        fontSize: 16,       
    },

    textData: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        flexWrap: 'wrap',
        marginBottom: 15,
    },

    textBtn: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    },

    textAlert: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    },

    textInfo: {
        color: '#FF5733',
        fontWeight: 'bold',
        fontSize: 12,
    },

    styleBtnOne: {
        width: "auto",
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 15,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'gray',
        marginRight: 10
    },

    /*
    styleBtnImg: {        
        width: "16%",
        height: "9%",
        alignItems:'center',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 20,  
        padding: 10,
        borderRadius:10
      },
   */
    
    styleBtnImg: {
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        padding: 14
    },
   


    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 'auto',
        width: '80%',
        padding: 10,
    },

    containerCheckBox: {             
       backgroundColor: 'transparent',  
       alignItems:'center',       
        width: 400,
        height: 'auto',
        padding: 20,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
    },

    contentCheckBox: {
       backgroundColor: 'transparent',     
        flexDirection: 'row',
        justifyContent:'space-between',
        width: 160,
        height: 'auto',
        padding: 20,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
    }

});