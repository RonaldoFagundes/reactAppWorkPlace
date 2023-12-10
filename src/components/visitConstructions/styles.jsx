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
      width:'80%',
      marginTop:30,  
      marginBottom: 10,
      padding: 10,
    },



    containerHeader: {
      height: 'auto',
      width: '100%',
      flexDirection:'col',
      textAlign: 'center',
      padding:10, 
      marginBottom: 20
   },


   contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      //marginTop:10      
    },




  



    containerDesc: {
      backgroundColor: 'rgba(25, 126, 162, 0.6)',
      borderRadius: 10,
      height: 'auto',
      width:'80%',  
      marginBottom: 20,
      padding: 18,
    },

   
    contentDesc: {
      marginBottom:10
   },





   resizeModel:{
      resizeMode:'cover',
      height:80,
      width:80,
      marginLeft: 5,    
      },


      resizeModelS:{
         resizeMode:'cover',
         height:60,
         width:60,
         marginLeft: 5,    
         },

   


    

    containerData: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height:'auto',
      width: '98%',
      padding:10, 
      borderRadius:5,
      backgroundColor: 'rgba(75, 139, 117, 0.3)'
   },





   contentData: {
      width: '98%',
      backgroundColor: 'rgba(25, 22, 12, 0.2)',
      //backgroundColor: 'rgba(75, 139, 117, 0.6)',
      flexDirection: 'column',
      alignItems:'center',    
      borderRadius:10  ,
      marginBottom:40 
   },






   containerHeaderData: {
      width:'98%',
      height:'auto',
      flexDirection: 'col',
     // alignItems: 'center',
     // justifyContent: 'space-between',
      padding: 10,
      borderRadius:10  ,
      backgroundColor: 'rgba(25, 126, 162, 0.6)',
   },





   contentHeaderDataInfoOne: {     
      flexDirection: 'row',     
      padding: 10,     
      alignItems: 'center',
      justifyContent: 'space-between',
   },


   contentHeaderDataInfoTwo: {     
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,     
   },







   containerImgSpace:{       
      height: 160,
      width: '98%',
      flexDirection:'row',
      justifyContent: 'space-around',
      padding:10,    
    },



    contentImgSpace:{
        width:140,
        height:140,
        borderBottomWidth: 1,
        borderBottomColor: "#6BA995",
        backgroundColor: 'white',
        borderRadius:10  ,
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
         color: 'white',
         fontWeight: 'bold',
         fontSize: 24
      },
   
   
   
      textInfo: {
        // color: '#452F0C',
        color: '#4E1313',
         fontWeight: 'bold',
         fontSize: 16,
      },


 


   textDados: {
      color: '#4E1313',
      fontWeight: 'bold',
      fontSize: 13,
   },

   






   input: {
      width: 300,
      height: 50,
      marginTop: 10,
      padding: 10,
      borderBottomWidth: 1,
      //borderBottomColor: "#6BA995",
      borderBottomColor: "white",
      marginLeft: 'auto',
      marginRight: 'auto',
      color: "#0BF5AB"
    },






    textAreaContainer: {
      width: '98%',
      borderColor: 'green',
      borderWidth: 1,
      padding: 5,
      marginTop:15,      
    },
  




    checkBoxContainer: {
      flexDirection:'row',
      marginBottom:20
    },
  




    checkBoxContent: {
        alignSelf:'center'
    },




     
    



    containerBtn: {
      //backgroundColor: 'rgba(6, 12, 127, 0.8)',
      backgroundColor: 'rgba(14, 85, 85, 0.8)',
      borderRadius: 10,
      height: 60,
      width: 200,
      marginTop: 30,     
      alignItems: 'center',      
      justifyContent: 'center',
      borderRadius: 10,      
      marginBottom: 30,
    },




    containerBtnS: {
      //backgroundColor: 'rgba(6, 12, 127, 0.8)',
      backgroundColor: 'rgba(14, 85, 85, 0.8)',
      borderRadius: 10,
      height: 60,
      width: 80,
      marginTop: 30,     
      alignItems: 'center',      
      justifyContent: 'center',
      borderRadius: 10,      
      marginBottom: 30,
    },







     touchable:{
       height:20,
       width:20,
       borderRadius:4,
       justifyContent:'center',
       alignItems:'center',
       borderColor:'#3EBD93',
       borderWidth:2
     },





     openText:{
        marginLeft:12,
        color:'#555',
        fontSize:16,
        fontWeight:'600'
     }













    /*
    textArea: {
      height: 150,
      color:'white',
      justifyContent: "flex-start"
    },
  
 

   listData:{
      width: 'auto',
      backgroundColor: 'black', 
      padding: 10, 
      borderBottomWidth:12,
      marginBottom:10,
     borderBottomColor: 'orange', 
   },



  listText:{
     fontSize:12,
     color:'white',
     borderRadius:20 ,
     borderBottomWidth:12,
     borderBottomColor: 'orange',
  },
   


   containerProducts: {
      width: 'auto',
      backgroundColor: 'green',
      flexDirection: 'col',
      padding: 10,
      marginBottom: 10 ,
      marginTop: 30
   },



   contentProducts: {
      width: 'auto',
      backgroundColor: 'orange',
      flexDirection: 'row',
      padding: 10,
      borderRadius:20
   },



   contentProductsImg:{
      width:60,
      height:50,
      resizeMode:'contain',
      backgroundColor: '#C45511',
      borderRadius: 50/2 ,
      marginLeft: 5,     
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


   containerBtn: {
      width: 100,
      height: 40,
      justifyContent: 'center',
      borderRadius: 10,
      marginRight: 6,
      marginLeft: 6,
      textAlign: 'center',
   },


*/









});