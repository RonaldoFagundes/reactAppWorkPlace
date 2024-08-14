import { StyleSheet } from 'react-native';


export default StyleSheet.create({

   containerMain: {
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      width: 'auto', 
   },

   containerHeader: {
      height: 'auto',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 6,
      marginBottom: 10,
      marginTop:40,
      borderRadius: 10,     
   },
   
   userHeader: {
      height: 'auto',
      width: "auto",
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'transparent',
      textAlign: 'center'
   },

   containerInfo: {
      borderRadius: 10,
      marginBottom: 15,
      padding: 10,
      alignItems: 'center',
      height: 'auto',
      width: 'auto',
   },

   contentImg: {
      height: 'auto',
      with: 'auto',
      flexDirection: 'row',     
      justifyContent: 'space-between',
      borderRadius: 10,    
      marginBottom: 10,
      padding:20,
      backgroundColor: 'rgba(215, 202, 165, 0.22)',     
  },

  resizeModelLogo: { 
   height: 80,
   width: 80,
   borderRadius: 10,
   marginRight:10        
},

 
  resizeModel: { 
    height: 140,
    width: 140,
    borderRadius: 10,
    marginRight:10        
 },


 containerList: {
      height: 'auto',
      with: '100%',
      padding:10,    
   },

   contentList: {
      height: 'auto',
      with: 'auto',
      backgroundColor: 'gray',
      padding:20,   
      marginBottom:5,
      borderRadius: 10,
      flexWrap:'wrap',
     alignItems:'center'
      
   },
  
   containerBtn: {
      height: 'auto',
      with: '100%',
      flexDirection: 'row',      
      justifyContent: 'space-between',
      borderRadius: 10,  
      padding:20,     
  },

   textAlert: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 14,
   },

   textData: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 13,  
      flexWrap:'wrap', 
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