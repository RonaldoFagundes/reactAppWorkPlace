import { StyleSheet } from 'react-native';





export default StyleSheet.create({



   body: {
      flex: 1
   },



  

   containerMain: {
      alignItems: 'center',
      justifyContent: 'center',
      height:'auto'  
    },






    containerHeader: {
      height: 180,
      width: '100%',
      flexDirection:'col',
      textAlign: 'center',
      padding:20, 
      marginBottom: 30
   },




    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between ',
      marginTop:40      
    },


    




    containerList: {
      alignItems: 'center',
      justifyContent: 'center',
      height:'auto',
      width: '96%',
      padding:10, 
      borderRadius:5,
     // paddingTop:10,
     // paddingBottom: 3,  
      marginTop:10 ,      
      backgroundColor: 'blue',
   },




   contentList: {
      width: 'auto',
      backgroundColor: 'orange',
     // flexDirection: 'row',
      padding: 10,
      height:'auto',
     
      // borderRadius:20      
   },



    cardList:{
       width:"auto",
       height:"auto",
       padding:10,
       borderRadius:10 ,
       backgroundColor: 'grey', 
       marginBottom:10 ,
       borderBottomWidth:12,
      borderBottomColor: 'orange',
    },










   resizeModel:{
      resizeMode:'cover',
      height:80,
      width:80,
      marginLeft: 5,    
      },



 


  
   
 





  listHeader:{
       flexDirection:'row',
       justifyContent: 'space-between ',
       marginBottom:20      
  },


 



  listFotter:{
   flexDirection:'row',
   justifyContent: 'space-between ',
   marginTop:20      
},





  textList:{
     fontSize:12,
     color:'white',
     //borderRadius:20 ,
    // borderBottomWidth:12,
     //borderBottomColor: 'orange',
  },
   



  textAlert: {
   //color: '#F4A716',
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
     // color: '#452F0C',
     color: '#4E1313',
      fontWeight: 'bold',
      fontSize: 16,
   },




     btnWarning:{
      width: '30%',
      height: 'auto',
     // justifyContent: 'center',
      borderRadius: 10,
      //marginRight: 6,
     // marginLeft: 6,
      alignItems:'center',
      textAlign: 'center',
      backgroundColor: 'red',
      padding:10,
      marginTop:10  
     },

 
     


   
   containerBtn: {
      width: 'auto',
      height: 'auto',
      justifyContent: 'center',
      borderRadius: 10,
      marginRight: 6,
      marginLeft: 6,
      textAlign: 'center',
      backgroundColor: 'green',
      padding:10
   },



















    /*

   containerProducts: {
      width: 'auto',
     // backgroundColor: 'green',
      flexDirection: 'col',
      padding: 10,
      marginBottom: 10 
     // marginTop: 30
   },


  




   contentProducts: {
      width: 'auto',
      backgroundColor: 'orange',
      flexDirection: 'row',
      padding: 10,
      borderRadius:20
   },


   


   contentProductsS: {
      width: 60,
      height: 50,
      backgroundColor: '#C45511',
      color: 'yellow',
      marginLeft: 5,
      textAlign: 'center',
      justifyContent:'center'
       
   },



   contentProductsM: {
      width: 160,
      height: 50,
      backgroundColor: '#C45511',
      color: 'yellow',
      marginLeft: 5,
      textAlign: 'center',
      justifyContent:'center'
     
   },



   contentProductsX: {
      width: 220,
      height: 50,
      backgroundColor: '#C45511',
      color: 'yellow',
      marginLeft: 5,
      textAlign: 'center',
      justifyContent:'center'
     
   },


   */



   



});