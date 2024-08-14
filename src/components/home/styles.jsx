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

   containerHeader: {
      height: 'auto',
      width: 'auto',
      alignItems: 'center',
      padding: 12,
      borderRadius: 10,
      backgroundColor: 'rgba(215, 202, 165, 0.22)',
      marginBottom:15,
   },

   userHeader: {
      height: 'auto',
      width: "auto",
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'transparent',
      textAlign: 'center',
   },

   imgLogo: {
      height: 64,
      width: 55,
      borderRadius: 4,
      marginRight: 10
   },

   containerInfo: {
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      height: 'auto',
      width: 'auto',
   },



   resizeModel: {
      // resizeMode: 'cover',
      height: 80,
      width: 80,
      borderRadius: 10,
      marginBottom: 20
   },



   /*
   containerList: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
   },
  */
  



   dataList: {
      width: "auto",
      height: "auto",
      backgroundColor: 'rgba(75, 139, 117, 0.8)',
      padding: 12,
      borderRadius: 10,
      margin: 20,
   },


   
   /*
   containertEmpty: {
      alignItems: 'center',
      borderRadius: 14,
      flexDirection: 'column',
      height: 'auto',
      marginTop: 'auto',
      marginBottom: "auto",
      padding: 10,
      width: "auto",
      backgroundColor: 'rgba(215, 202, 165, 0.22)',
   },
   */



   textList: {
      fontSize: 16,
      color: 'white',
   },

   textAlert: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 14,
   },

   textMain: {
      color: '#5D3806',
      fontWeight: 'bold',
      fontSize: 16
   },

   textInfo: {
      color: '#4E1313',
      fontWeight: 'bold',
      fontSize: 16,
   },

   containerBtnIn:{    
      flexDirection: 'row',     
      justifyContent: 'center',
      marginTop:15,
      marginBottom:20,
   },


   containerBtnOut:{
      backgroundColor: 'rgba(215, 202, 165, 0.22)',
      flexDirection: 'row',     
      justifyContent: 'center',
      marginTop:15,
      marginBottom:5,
   },


   styleBtnOne: {
      width: '50%',
      height: 'auto',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 15,
      marginBottom: 20,
      alignItems: 'center',
      padding: 10
   },

   styleBtnTwo: {
      width: "30%",
      height: "auto",
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 15,
      alignItems: 'center',
      padding: 10,
   },

});