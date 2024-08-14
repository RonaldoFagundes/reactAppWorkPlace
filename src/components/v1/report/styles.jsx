import { StyleSheet } from 'react-native';


export default StyleSheet.create({


   containerMain: {
      flexDirection: 'column',
      height: '100%',    
      width: 'auto',  
      paddingTop:30,       
   },
   /*
   containerMain: {
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      width: 'auto',
   },
   */





   containerInfo: {
      borderRadius: 10,   
      padding: 10,
      alignItems: 'center',
      height: 'auto',
      width: 'auto',
   },

   /*
   containerInfo: {
      borderRadius: 10,
      marginBottom: 15,
      marginTop:40,
      padding: 10,
      alignItems: 'center',
      height: 'auto',
      width: 'auto',
   },
  */




   containerHeader: {
      height: 'auto',
      width: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 12,    
      borderRadius: 10,
      backgroundColor: 'rgba(215, 202, 165, 0.22)',
   },
   
   /*
   containerHeader: {
      height: '10%',
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 12,
      marginBottom: 15,
      borderRadius: 10,
      backgroundColor: 'rgba(215, 202, 165, 0.22)',
   },
  */

   userHeader: {
      height: 'auto',
      width: "auto",
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'transparent',
      textAlign: 'center'
   },
     
   /*
    
   userHeader: {
      height: 'auto',
      width: "auto",
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'transparent',
      textAlign: 'center'
   },
   */





 
  
 

   imgLogo: {     
      height: 40,
      width: 40,
      borderRadius: 10,
      marginRight:10          
   },
  

   contentList: {
      height: 'auto',
      width: 'auto',
      padding: 20,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:20
   },
  
   contentImg: {
      height: 'auto',
      with: 'auto',
      flexDirection: 'row',    
      borderRadius: 10,   
      padding:20, 
      backgroundColor: 'rgba(215, 202, 165, 0.22)',
      
  },

   resizeModel: {  
      resizeMode: 'cover',
      height: 140,
      width: 140,
      borderRadius: 10,
      marginRight:10,
   },   

 

  
  containerBtn: {
   height: 'auto',
   with: '100%',
   flexDirection: 'row',      
   justifyContent: 'space-between',
   borderRadius: 10,  
   padding:20,     
},

   
   dataList: {
      width: "auto",
      height: "auto",
      backgroundColor: 'rgba(75, 139, 117, 0.8)',
      padding: 10,
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
      fontSize: 14,
      color: 'white',
      fontWeight: 'bold',
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
      width: 'auto',
      height: 'auto',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 15,
      alignItems: 'center',
      padding: 10,
      backgroundColor:'gray',
      marginRight:10
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