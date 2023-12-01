import { StyleSheet } from 'react-native';





export default StyleSheet.create({


    containner:{
       // marginLeft:12,
        width:'90%',
        flexDirection:'row', 
        justifyContent:'space-evenly'
     },


     optionsContainner:{
          width:'auto',
          flexDirection:'row',
          alignItems:'center',
          padding:10,
         
     },

     touchable:{
       height:20,
       width:20,
       borderRadius:4,
       justifyContent:'center',
       alignItems:'center',
       borderColor:'#3EBD93',
       borderWidth:2,
       marginBottom:10
     },

     openText:{
        marginLeft:12,
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
        marginBottom:10
     }







});