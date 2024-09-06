import { StyleSheet } from "react-native";



export default StyleSheet.create({

  containerMain: {
    flexDirection: 'column',
    height: '100%',
    width: 'auto',
    paddingTop: 50,    
  },


  containerHeader: {
    height: 'auto',
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
    borderRadius: 10,
    backgroundColor: 'rgba(215, 202, 165, 0.22)',
  },



  containerInfo: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: 'auto',
    width: 'auto',
  },


 
  contentMain: {
    flexDirection: 'column',
    alignItems: 'center', 
    backgroundColor: 'rgba(215, 202, 165, 0.22)',
    borderRadius: 10,
    height: "100%",
    width: 'auto',
    paddingTop:20,
    
  },



  boxImg: {
    backgroundColor: 'transparent',  
    flexDirection: 'column',
    width: 140,
    height: 140,
    borderRadius: 10,
    marginBottom: 60
  },


resizeModel: {
    height: 160,
    width: 160,
    borderRadius: 10,
    },

styleBtnImg: {
  width: "auto",
  height: "auto",
  alignItems:'center',
  borderRadius: 10,
  marginTop: 5,
  marginBottom: 20,  
  padding: 10,
  borderRadius:10
},

textBtn: {
  color: '#F5F6F1',
  fontSize: 14
},

/*
  containerImg: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginBottom: 30
  },

  boxImg: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    marginBottom: 10,
    marginRight: 10,
    backgroundColor:'red'
},
*/


  input: {
    width: '80%',
    height: 50,
    marginBottom: 16,
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#cc0000",
    borderRadius: 10,
    color: "black",
    backgroundColor: 'white',
    fontSize: 16
  },

 


 

  styleBtnOne: {
    width: "auto",
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'gray',
    marginRight: 10
  },

  



  textMain: {
    color: '#5D3806',
    fontWeight: 'bold',
    fontSize: 18
  },

  textInfo: {
    color: '#663300',
    fontWeight: 'bold',
    fontSize: 14,
  },

  textAlert: {
    color: 'white',
    fontSize: 12
  },

 

});

