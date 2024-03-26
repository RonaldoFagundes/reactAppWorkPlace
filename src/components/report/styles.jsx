import { StyleSheet } from 'react-native';




export default StyleSheet.create({

   containerMain: {
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
   },


   containerInfo: {
      borderRadius: 10,
      marginBottom: 5,
      padding: 10,
      alignItems: 'center',
      height: '26%',
      width: '90%',
   },



   containerHeader: {
      height: 'auto',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      marginBottom: 10,
   },




   logoHeader: {
      height: 'auto',
      width: "auto",
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 15,
      backgroundColor: 'black',
   },



   contentList: {
      height: '100%',
      width: '100%',
      backgroundColor: 'orange',
      padding: 10,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
   },



   cardList: {
      width: "auto",
      height: "auto",
      backgroundColor: 'red',
      padding: 40,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 10
   },




   resizeModel: {
      resizeMode: 'cover',
      height: 140,
      width: 140,
      borderRadius: 10,
   },




   dataList: {
      width: "auto",
      height: "auto",
      backgroundColor: 'rgba(75, 139, 117, 0.8)',
      padding: 12,
      borderRadius: 10,
      marginTop: 10,
   },








   containertEmpty: {
      alignItems: 'center',
      borderRadius: 14,
      flexDirection: 'column',
      height: 'auto',
      marginTop: 20,
      padding: 10,
      width: "auto",
      backgroundColor: 'rgba(215, 202, 165, 0.22)',

   },


   contentData: {
      flexDirection: 'row',
      flexWrap: 'wrap'
   },



   textList: {
      fontSize: 12,
      color: 'white',
   },



   textAlert: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 14,
   },


   textData: {
      color: '#4E1313',
      fontWeight: 'bold',
      fontSize: 13,
   },


   textMain: {
      color: '#5D3806',
      fontWeight: 'bold',
      fontSize: 24
   },





   textInfo: {
      color: '#4E1313',
      fontWeight: 'bold',
      fontSize: 16,
   },





   styleBtnDefault: {
      width: 80,
      height: 40,
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 15,
      alignItems: 'center',
      backgroundColor: 'green',
      padding: 10
   },



   styleBtnOne: {
      width: 80,
      height: 30,
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 15,
      alignItems: 'center',
      backgroundColor: 'green',
      padding: 10
   },




   styleBtnTwo: {
      width: 180,
      height: 40,
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 15,
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10
   },



});