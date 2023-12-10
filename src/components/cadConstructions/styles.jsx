import { StyleSheet } from "react-native";



export default StyleSheet.create({

  body: {
    flex: 1
  },




  containerMain: {    
    height:'100%',
    with:"100%"
  },



  contentMain: {
    marginTop:20,
    alignItems: 'center',
    backgroundColor: 'rgba(25, 126, 162, 0.3)',
    borderRadius: 10,
    height: "100%",
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





  input: {
    width: 300,
    height: 50,
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#6BA995",
    marginLeft: 'auto',
    marginRight: 'auto',
    color: "#0BF5AB"
  },



  containerBtn: {
    alignItems: 'center',
    backgroundColor: 'rgba(6, 12, 127, 0.8)',
    width: 140,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
  },


  
  textMain: {
    color: 'white',
    //color: '#3AF1A3',
    fontWeight: 'bold',
    fontSize: 24
  },


  textInfo: {
    color: '#3AF1A3',
    fontWeight: 'bold',
    fontSize: 14,
  },


  textAlert: {
    color: '#BBD441',
    fontSize: 14
  },







   containnerCamera:{
       flexDirection:'column',
       alignItems:'center'
      
   },


   contentCamera:{
     flex: 1,
     backgroundColor: 'transparent',
     flexDirection: 'row'       
   },



  
  


});

