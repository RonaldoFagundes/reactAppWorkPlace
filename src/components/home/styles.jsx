import { StyleSheet } from 'react-native';





export default StyleSheet.create({



   body: {
      flex: 1
   },


   containerInfo: {
      backgroundColor: 'rgba(25, 126, 162, 0.6)',
      borderRadius: 10,
      alignItems:'center',
      height: 'auto',
      width:'auto',  
      marginTop:10,  
      marginBottom: 10,
      padding: 10,
    },



   containerMain: {
      height:'auto',
      width:'auto',
     // flexDirection:'column',
     // alignItems: 'center',
     // justifyContent: 'center',     
    },

    

   
   containerHeader: {
      height: "auto",
      width: '100%',
      flexDirection:'row',
      justifyContent:'space-between',
      padding:10, 
      marginBottom: 30,   
   },




    contentHeader: {
      height: 180,
      width: "auto",
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding:5,       
    },

    


    containerLogo:{
      width:40,
      height:40,           
   },






 
     
  




  


   containertEmpty:{
      height:'30%',
      width: '100%',
      
      
       //justifyContent:'center',   
      // paddingTop:100,
       //paddingBottom:100,
      // marginTop:100,
      // padding:20,
      // borderRadius:10 ,
      
      // marginBottom:10 ,
      // borderBottomWidth:12,
      // borderBottomColor: 'white',
    },


    
    contentEmpty: {
      height:400,
      width:'auto',
      backgroundColor: 'black',
      flexDirection:'column',
      alignItems:'center',
      padding:50
   },








   

    containerList: {
      height:'auto',
      width: '100%',
      padding:10,
 
     // alignItems: 'center',
     // justifyContent: 'center',

     // flexDirection:'column',
     // alignItems: 'center',
     // justifyContent: 'center',
      
     // padding:10, 
    //  borderRadius:5,

     // paddingTop:10,
     // paddingBottom: 3,

     // marginTop:10 ,      
      //backgroundColor: 'rgba(185, 245, 133, 0.4)',
      
   },




   contentList: {
      height:'auto',
      width:'auto',
      backgroundColor: 'black',
      padding:10,

      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      
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
      padding:40,
      borderRadius:10 ,
      backgroundColor: 'rgba(75, 139, 117, 0.8)',
      marginBottom:10 ,
      borderBottomWidth:12,
      borderBottomColor: 'white',
   },







   cardImg: {
      height: 160,
      width: 160,
      padding:10,
      borderBottomWidth: 1,
      borderBottomColor: "#6BA995",
      backgroundColor: 'white',
      borderRadius: 10,
    },

      resizeModel: {
         resizeMode: 'cover',
         height: 140,
         width: 140,
         borderRadius:10 ,    
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




     

 
     


   
 

   styleBtnOne: {  
      width: 'auto',
      height: '20%',

      justifyContent: 'center',

      borderRadius: 10,
      marginRight: 6,
      marginLeft: 6,
      textAlign: 'center',
      //backgroundColor: 'green',

      backgroundColor: 'rgba(14, 85, 85, 0.8)',
      padding:10
    },


    styleBtnTwo: {  
      width: 180,
      height: 40,

      justifyContent: 'center',

      borderRadius: 10,
      marginTop:20,
      //marginRight: 6,
      //marginLeft: 6,
      alignItems:'center',
     // textAlign: 'center',     
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