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



    containerInfo: {
      backgroundColor: 'rgba(25, 126, 162, 0.6)',
      borderRadius: 10,
      alignItems:'center',
      height: 'auto',
      width:'auto',  
      marginTop:30,  
      marginBottom: 10,
      padding: 10,
    },



    containerHeader: {
      height: 80,
      width: '100%',
      flexDirection:'col',
      textAlign: 'center',
      padding:10, 
      marginBottom: 30
   },




    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      //marginTop:10      
      padding:10
    },


   
    containerLogo:{
      width:40,
      height:40,
     // marginBottom: 50,       
   },




   resizeModel:{
      resizeMode:'cover',
      height:40,
      width:40,
      borderRadius:10 ,
      //marginLeft: 5,    
      },





    containerList: {
     // alignItems: 'center',
     // justifyContent: 'center',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      height:'auto',
      width: '96%',
      padding:10, 
      borderRadius:5,
     // paddingTop:10,
     // paddingBottom: 3,  
      marginTop:10 ,      
      backgroundColor: 'rgba(185, 245, 133, 0.4)',
   },



     /*
   contentList: {
      width: 'auto',
      backgroundColor: 'rgba(75, 139, 117, 0.6)',
     // flexDirection: 'row',
      padding: 10,
      height:'auto',
     
      // borderRadius:20      
   },
    */


    cardList:{
       width:"100%",
       height:"auto",
       padding:20,
       borderRadius:10 ,
       backgroundColor: 'rgba(75, 139, 117, 0.8)',
       marginBottom:10 ,
       borderBottomWidth:12,
       borderBottomColor: 'white',
    },





    

  listHeader:{
       flexDirection:'row',
       justifyContent: 'space-between ',
       marginBottom:20,
       padding:10      
  },


 


 /*
  listFotter:{
   flexDirection:'row',
   justifyContent: 'space-between ',
   marginTop:20      
},
*/




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
      width: '50%',
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
      //backgroundColor: 'green',
      backgroundColor: 'rgba(14, 85, 85, 0.8)',
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