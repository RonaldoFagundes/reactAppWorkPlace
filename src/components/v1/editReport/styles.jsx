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
      with: '100%',
      flexDirection: 'row',     
      justifyContent: 'space-between',
      borderRadius: 10,     
      marginBottom: 10,
      padding:20,     
  },
 
  resizeModel: {   
    height: 120,
    width: 120,
    borderRadius: 10,
    marginRight:10        
 },

 containerList: {
      height: 'auto',
      with: '100%',
      backgroundColor: 'orange',
      padding:10,    
      marginBottom:10
   },

   contentList: {
      height: 'auto',
      with: '100%',
      backgroundColor: 'gray',
      padding:10,   
      marginBottom:5,
      borderRadius: 10,
      flexWrap:'wrap'
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
      padding: 10
   },

   styleBtnOne: {
      width: 60,
      height: 'auto',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 15,
      alignItems: 'center',
      padding: 10,
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

  input: {
   borderWidth: 1,
   width: 'auto',
   height: 'auto',
   color: "black",
   backgroundColor: 'transparent',
   fontSize: 12,
   fontWeight: 'bold',
   borderRadius: 10,
   marginTop: 10,
   marginBottom: 10,
   padding: 4,  
  flexWrap:'wrap',
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

});