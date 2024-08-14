import { StyleSheet } from "react-native";



export default StyleSheet.create({

  containerMain: {
    flexDirection: 'column',
    height: '100%',
    width: 'auto',
    paddingTop: 30,
  },


  containerInfo: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: 'auto',
    width: 'auto',
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

  contentMain: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: "center",
    backgroundColor: 'rgba(215, 202, 165, 0.22)',
    borderRadius: 10,
    height: "auto",
    width: 'auto',
    padding: 20,
  },

  containerImg: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginBottom: 30
  },

  input: {
    width: 240,
    height: 50,
    marginBottom: 16,
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#cc0000",
    borderRadius: 10,
    color: "black",
    backgroundColor: 'white',
    fontSize: 12
  },

  styleBtnImg: {
    width: "auto",
    height: "auto",
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20,
    alignItems: 'center',
    padding: 10
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
    fontSize: 12,
  },

  textAlert: {
    color: 'white',
    fontSize: 12
  },

  textBtn: {
    color: '#F5F6F1',
    fontSize: 12
  },


});

