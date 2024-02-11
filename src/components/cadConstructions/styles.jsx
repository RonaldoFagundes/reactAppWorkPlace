import { StyleSheet } from "react-native";



export default StyleSheet.create({

  body: {
    flex: 1
  },




  containerMain: {    
    height:'100%',
    with:"100%",
    flexDirection:'column',
    //alignItems:'center'
    padding:10
  },



  contentMain: {
    flexDirection:'column',
    alignItems: 'center',
    textAlign:"center",
    backgroundColor: 'rgba(25, 126, 162, 0.3)',
    borderRadius: 10,
    height: "100%",
    padding: 20,
    
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



 



    styleBtn: {  
    alignItems: 'center',
    backgroundColor: 'rgba(6, 12, 127, 0.8)',
    width: 140,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
  },




  imgBtn: {
    alignItems: 'center',
    backgroundColor: 'rgba(6, 12, 127, 0.8)',
    width: 100,
    height: 20,
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 76,
    padding: 5
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




  containerImgSpace:{   
    flexDirection:'column', 
    justifyContent:'center',
    alignItems:'center' , 
    height: 320,
    width: '98%',
    //padding:10,  
    marginBottom:20,
    
    
  },



  contentImgSpace:{
      width:140,
      height:140,
      borderBottomWidth: 1,
      borderBottomColor: "#6BA995",
      backgroundColor: 'white',
      borderRadius:10,      
      },



  resizeModel: {
    resizeMode: 'cover',
    height: 180,
    width: 180, 
    borderRadius:10   
  },



   


   modalContent: {
    alignItems: 'center',
    backgroundColor:'black',
    flex: 1,
    flexDirection: 'column',    
    textAlign: 'center',
  },
  


  containnerCamera:{
    width: 380,   
    marginTop: 60,
    marginBottom:40,
    flex: 1, 
    backgroundColor: 'transparent', 
},



contentCamera:{
  backgroundColor: 'transparent', 
  flexDirection: 'row',
  justifyContent:'space-between',  
  height: 'auto',
  width: 'auto',  
  marginTop:500
},






btnCameraFlip: {  
  backgroundColor: '#FCF9F8',
  width: 50,
  height: 50, 
  borderRadius: 50, 
  alignItems:'center',
  justifyContent:'center'
  //position: 'absolute', 
 // bottom: 20, 
 // left: 20
},

btnCameraTake: {   
  backgroundColor: '#F3102F',
  width: 50,
  height: 50, 
  borderRadius: 50,  
  alignItems:'center',
  justifyContent:'center'
},



});

