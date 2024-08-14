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
    height: '6%',
    width: '90%',
  },

  contentMain: {
    alignItems: 'center',
    borderRadius: 14,
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'center',
    paddingBottom: 30,
    paddingTop: 30,
    width: "90%",
    backgroundColor: 'rgba(215, 202, 165, 0.22)',
  },

  input: {
    width: 200,
    height: 50,
    marginBottom: 16,
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#cc0000",
    borderRadius: 10,
    color: "black",
    backgroundColor: 'white',
    textAlign: 'center',
  },

  contentModal: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  styleBtnOne: {
    width: 'auto',
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    padding: 10
  },

  styleBtnTwo: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
  },

  styleBtn: {
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: '#7D7F72',
    padding: 10
  },

  contentAction: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    height: 'auto',
    marginTop: 20,
    padding: 10,
    width: 'auto',
  },

  modalContent: {
    alignItems: 'center',
    borderRadius: 14,
    flexDirection: 'column',
    height: '50%',
    justifyContent: 'center',
    marginTop: 20,
    width: "auto",
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

