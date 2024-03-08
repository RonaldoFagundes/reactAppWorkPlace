import { StyleSheet } from "react-native";



export default StyleSheet.create({



  body: {
    flex: 1,
   },


  
   containerMain:{
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    with:'100%'
   },




   contentMain:{
    alignItems: 'center',
    backgroundColor: 'rgba(251, 195, 95, 0.9)',
    borderRadius:30,
    justifyContent: 'center', 
    padding:20      
   },





  

    input: {
        width: 300,
        height: 50,
        marginTop: 10,            
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#cc0000",
        marginLeft: 'auto',
        marginRight: 'auto',
        color: "black"
      },






      textMain:{
        color: '#5D3806',
        fontWeight: 'bold',
        fontSize: 18
       },





   textInfo:{
    color: '#663300',
      fontWeight: 'bold',
     fontSize:12,
   },



   
   textAlert: {
    color: '#F00000',
    fontSize: 14
  },

  





  containerBtn:{
    width: 140,
    height: 40,      
    justifyContent: 'center',     
    borderRadius: 50,
    marginTop: 30,
    marginBottom:30,   
    textAlign:'center',
  },







});

