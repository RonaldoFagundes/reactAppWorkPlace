import { StyleSheet } from "react-native";



export default StyleSheet.create({



  body: {
    flex: 1
  },



  containerMain: {
    height: '100%',
    with: '100%',
    alignItems: 'center',
  },


 


  contentMain: {
    alignItems: 'center',
    //backgroundColor: 'rgba(25, 126, 162, 0.3)',
    backgroundColor: 'rgba(185, 245, 133, 0.4)',
    borderRadius: 10,
    height: "auto",
    padding: 20,
    with: "auto"
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

 


  containerLogo:{
    width:200,
    height:140,
    marginBottom: 50,       
 },



 resizeModel:{
  resizeMode:'cover',
  height:'100%',
  width:'100%', 
  borderRadius: 10,
  },

  
  modalContent: {
    alignItems: 'center',
    //backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },



  input: {
    width: 300,
    height: 50,
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#6BA995",
    marginLeft: 'auto',
    marginRight: 'auto',
   // color: "#0BF5AB"
   color: 'green',
  },



  containerBtn: {
    alignItems: 'center',
    backgroundColor: 'rgba(14, 85, 85, 0.8)',
   // backgroundColor: 'rgba(6, 12, 127, 0.8)',
    width: 140,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
  },




  

  textMain: {
    color: 'white',
   // color: '#3AF1A3',
    fontWeight: 'bold',
    fontSize: 28
  },


  textInfo: {
    color: 'green',
    //color: '#3AF1A3',
    fontWeight: 'bold',
    fontSize: 14,
  },


  textBtn: {
    color: 'white',
    //color: '#3AF1A3',
    fontWeight: 'bold',
    fontSize: 14,
  },


  textAlert: {
   // color: '#BBD441',
    color: 'brown',
    fontSize: 14
  },




});

