import { StyleSheet } from "react-native";



export default StyleSheet.create({


  containerMain: {
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    width: 'auto',
  },

  containerHeader: {
    alignItems: 'center',
    height: '16%',
    width: 'auto',
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

  styleBtnOne: {
    width: "60%",
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    padding: 5
  },

  styleBtnImg: {
    width: "auto",
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20,
    alignItems: 'center',
    padding: 10
  },

  textMain: {
    color: '#5D3806',
    fontWeight: 'bold',
    fontSize: 16
  },

  textInfo: {
    color: '#663300',
    fontWeight: 'bold',
    fontSize: 12,
  },

  textAlert: {
    color: '#F00000',
    fontSize: 12
  },

  textBtn: {
    color: '#F5F6F1',
    fontSize: 12
  },


});

