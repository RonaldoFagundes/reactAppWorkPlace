import React, { useState, useRef, useEffect } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Platform,
  Image,
  Modal,
  StyleSheet,
  ScrollView
} from 'react-native';


import { FontAwesome } from '@expo/vector-icons';

import { Camera } from 'expo-camera';
//import * as Permissions from 'expo-permissions';
//import * as MediaLibrary from 'expo-media-library';










export default function TestCamera() {




 // const pendingImg = require('../../../assets/pendente.png');
 // const sortedImg = require('../../../assets/resolvido.png');



  /* ex camera */
  const [hasPermission, setHasPermission] = useState(null);

  const [modalCamera, setModalCamera] = useState(false);

  const camRef = useRef(null);

  //const [capturedPhoto, setCapturedPhoto] = useState(null);

  const [type, setType] = useState(Camera.Constants.Type.back)




 // const [subject, setSubject] = useState();


  const [dataOne, setDataOne] = useState({
    name: "Card One",
    imgOne: "",
    imgOneVisible: false,
    imgTwo: "",
    imgTwoVisible: false
  });




  const [dataTwo, setDataTwo] = useState({
    name: "Card Two",
    imgOne: "",
    imgOneVisible: false,
    imgTwo: "",
    imgTwoVisible: false
  });









  useEffect(() => {

    getPermission();
    //getLibrary();

    /*
    console.log(
      " img one : " +
      dataOne.imgOne +
      " visible one :  " +
      dataOne.imgOneVisible +
      " /  img two : " +
      dataOne.imgTwo +
      " visible two :  " +
      dataOne.imgTwoVisible
    )
    */

  }, [

    
    dataOne.imgOne,
    dataOne.imgOneVisible,
    dataOne.imgTwo,
    dataOne.imgTwoVisible,


    dataTwo.imgOne,
    dataTwo.imgOneVisible,
    dataTwo.imgTwo,
    dataTwo.imgTwoVisible,
 

  ]);




  
  const getPermission = async()=>{

    const {status} = await Camera.requestCameraPermissionsAsync();
     setHasPermission(status === 'granted');
}
  
  /*
    const getLibrary = async () => {
      const { status } = await Permissions.askAsync(Permissions.Camera_ROLL);
      setHasPermission(status === 'granted');
    }
  */
  
  
    if (hasPermission === null) {
      return <View />;
    }
  
  
    if (hasPermission === false) {
      return <Text>Acesso negado!</Text>;
    }
   




/*
  async function takePicture2() {
    if (camRef) {
      const photoImg = await camRef.current.takePictureAsync();
      setCapturedPhoto(photoImg.uri)
      console.log(photoImg);
    }
  }




  async function safePicture() {
    const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
      .then(() => {
        alert('imagem salva com sucesso');
      })
      .catch(error => {
        console.log('err', error);
      })
  }
*/





  const takePicture = async() =>{

     setModalCamera(false);
  
    if (camRef) {
      const photoImg = await camRef.current.takePictureAsync();
      //setCapturedPhoto(photoImg.uri)
      console.log(photoImg.uri);


        if (dataOne.imgOne == "" && dataOne.imgTwo == ""){

          setDataOne(
            {
              ...dataOne, 'imgOne': photoImg.uri,
                 dataOne, 'imgOneVisible': true,
            }
          )

        }else if (dataOne.imgOne != "" && dataOne.imgTwo == ""){

          setDataOne(
            {
              ...dataOne, 'imgTwo': photoImg.uri,
                 dataOne, 'imgTwoVisible': true,
            }
          )

        }
        else if (dataOne.imgOne == "" && dataOne.imgTwo != ""){

           setDataOne(
            {
              ...dataOne, 'imgOne': photoImg.uri,
                 dataOne, 'imgOneVisible': true,
            }
          )

        }


      
    } 
  
  }


















  const changePictureTest = async (atribute, value) => {

    
    switch (atribute) {


      case 'dataOne.imgOneVisible':
        //console.log(" atrubute "+dataOne.imgOneVisible+" valor "+atribute)
        setDataOne(
          {
            ...dataOne, 'imgOneVisible': value,
               dataOne, 'imgOne': "",
          }
        )
        break;



      case 'dataOne.imgTwoVisible':
        setDataOne(
          {
            ...dataOne, 'imgTwoVisible': value,
              dataOne, 'imgTwo': "",
          }
        )
        break;





      case 'dataTwo.imgOneVisible':
        //console.log(" atrubute "+dataOne.imgOneVisible+" valor "+atribute)
        setDataTwo(
          {
            ...dataTwo, 'imgOneVisible': value,
               dataTwo, 'imgOne': "",
          }
        )
        break;



      case 'dataTwo.imgTwoVisible':
        setDataTwo(
          {
            ...dataTwo, 'imgTwoVisible': value,
               dataTwo, 'imgTwo': "",
          }
        )
        break;


      default:

        console.log(" padrao ");

    }


      setModalCamera(true);

  }






 





/*
  const sendPictureTest = async (value) => {

    setModalCamera(false);

    switch (value) {

      case dataOne.name:

        if (dataOne.imgOne == "" && dataOne.imgTwo == "") {

          setDataOne({
            ...dataOne, imgOne: capturedPhoto.uri,
            dataOne, imgOneVisible: true
          })
          
          // console.log(" imgOne "+dataOne.imgOne+" imgOneVisible "+dataOne.imgOneVisible)


        } else if (dataOne.imgOne != "" && dataOne.imgTwo == "") {

          setDataOne({
            ...dataOne, imgTwo: capturedPhoto.uri,
            dataOne, imgTwoVisible: true
          })
         
          //console.log(" imgTwo "+dataOne.imgTwo+" imgTwoVisible "+dataOne.imgTwoVisible)      

        } else if (dataOne.imgOne == "" && dataOne.imgTwo != "") {

          setDataOne({
            ...dataOne, imgOne: capturedPhoto.uri,
            dataOne, imgOneVisible: true
          })
        
        }

        break;

      case dataTwo.name:


        if (dataTwo.imgOne == "" && dataTwo.imgTwo == "") {

          setDataTwo({
            ...dataTwo, imgOne: capturedPhoto.uri,
               dataTwo, imgOneVisible: true
          })
          // console.log(" imgOne "+dataOne.imgOne+" imgOneVisible "+dataOne.imgOneVisible)

        } else if (dataTwo.imgOne != "" && dataTwo.imgTwo == "") {

          setDataTwo({
            ...dataTwo, imgTwo: capturedPhoto.uri,
               dataTwo, imgTwoVisible: true
          })
          //console.log(" imgTwo "+dataOne.imgTwo+" imgTwoVisible "+dataOne.imgTwoVisible)      

        } else if (dataTwo.imgOne == "" && dataTwo.imgTwo != "") {

          setDataTwo({
            ...dataTwo, imgOne: photoImg.uri,
               dataTwo, imgOneVisible: true
          })
           //...dataTwo, imgOne: photoImg.uri,
        }

        break;

      default:
        console.log(" default ");
    }


  }
 */





  return (


    <SafeAreaView style={styles.body}>



    <ScrollView>



      <View style={styles.containerMain}>



        <View style={styles.contentMain}>



          <View style={styles.containerImgSpace}>


            <View style={styles.contentImgSpace}>


              <View style={styles.cardImg}>

                <Image
                  style={styles.resizeModel}
                  source={{ uri: dataOne.imgOne }}
                />

                {
                  dataOne.imgOne ?

                    <Pressable style={styles.imgBtn}
                      onPress={() => {
                        changePictureTest('dataOne.imgOneVisible', false)
                      }}
                    >
                      <Text style={styles.textInfo} >Mudar a foto</Text>
                    </Pressable>

                    :
                    <View></View>
                }

              </View>




              <View style={styles.cardImg}>

                <Image
                  style={styles.resizeModel}
                  source={{ uri: dataOne.imgTwo }}
                />

                {
                  dataOne.imgTwo ?

                    <Pressable style={styles.imgBtn}
                      onPress={() => {
                        changePictureTest('dataOne.imgTwoVisible', false)
                      }}
                    >
                      <Text style={styles.textInfo} >Mudar a foto</Text>
                    </Pressable>

                    :
                    <View></View>
                }

              </View>


            </View>




            <View >

              {
                dataOne.imgOneVisible && dataOne.imgTwoVisible ?

                  <Pressable style={styles.containerBtn}
                    disabled={true}
                  >
                    <Text style={styles.textInfo}>Fotos carregadas</Text>
                  </Pressable>

                  :

                  <Pressable style={styles.containerBtn}                    
                  onPress={() => {
                    setModalCamera(true)}}
                >                 
                    <Text style={styles.textInfo}>Tirar Foto</Text>
                  </Pressable>
              }

            </View>

          </View>


          <View style={styles.containerImgSpace}>


            <View style={styles.contentImgSpace}>


              <View style={styles.cardImg}>

                <Image
                  style={styles.resizeModel}
                  source={{ uri: dataTwo.imgOne }}
                />

                {
                  dataTwo.imgTwo ?

                    <Pressable style={styles.imgBtn}
                      onPress={() => {
                        changePictureTest('dataTwo.imgOneVisible', false)
                      }}
                    >
                      <Text style={styles.textInfo} >Mudar a foto</Text>
                    </Pressable>

                    :
                    <View></View>
                }

              </View>


              <View style={styles.cardImg}>

                <Image
                  style={styles.resizeModel}
                  source={{ uri: dataTwo.imgTwo }}
                />

                {
                  dataTwo.imgTwo ?

                    <Pressable style={styles.imgBtn}
                      onPress={() => {
                        changePictureTest('dataTwo.imgTwoVisible', false)
                      }}
                    >
                      <Text style={styles.textInfo} >Mudar a foto</Text>
                    </Pressable>

                    :
                    <View></View>
                }

              </View>

            </View>


            <View >

              {
                dataTwo.imgOneVisible && dataTwo.imgTwoVisible ?

                  <Pressable style={styles.containerBtn}
                    disabled={true}
                  >
                    <Text style={styles.textInfo}>Fotos carregadas</Text>
                  </Pressable>

                  :

                  <Pressable style={styles.containerBtn}                  
                    onPress={() => {
                      setModalCamera(true)}}
                  >
                    <Text style={styles.textInfo}>Tirar Foto</Text>
                  </Pressable>
              }

            </View>

          </View>


        </View>


      </View>

     </ScrollView>






       <Modal
          animationType='fade'
          visible={modalCamera}        
         >

          <View style={styles.containnerCamera}>

            <Text>Camera</Text>
         
            <Camera
              type={type}
              ref={camRef}
              style={styles.camera}
            >           

                <Pressable style={styles.cameraBtn}
                  //style={{ position: 'absolute' }}

                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Text style={styles.textInfo} >selecione camera frontal</Text>
                </Pressable>
          
            </Camera>
         

            <Pressable style={styles.containerBtn}              
            //  onPress={() => sendPictureTest(subject)}
             onPress={() => takePicture()}
            >
             <FontAwesome name='camera' size={20} color={"#fff"} />  
                      
            </Pressable>

          </View>

        
         <View style={styles.contentModalBtn}>

          <Pressable
            style={styles.containerBtn}
            onPress={() => setModalCamera(false)}
          >
            <Text style={styles.textInfo}>Fechar</Text>
          </Pressable>

         </View>

        </Modal>   

    </SafeAreaView>

  );
}



const styles = StyleSheet.create({

  body: {
    flex: 1,
  },

  containerMain: {
    height: '800px',
    with: "100%",
    marginBottom:80,
  },

  contentMain: {
    marginTop: 20,
    alignItems: 'center',
    //backgroundColor: 'rgba(25, 126, 162, 0.3)',
    borderRadius: 10,
    height: "auto",
    padding: 20,
    with: "auto"
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

  containerImgSpace: {
    height: '60%',
    width: '98%',
    flexDirection: 'col',
    alignItems: 'center',
    backgroundColor: 'rgba(25, 126, 162, 0.7)',
    marginBottom:50
  },

  contentImgSpace: {
    width: '70%',
    height: '58%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#6BA995",
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(25, 126, 162, 0.2)',
  },

  cardImg: {
    height: 180,
    width: 200,
    padding:10,
    borderBottomWidth: 1,
    borderBottomColor: "#6BA995",
    backgroundColor: 'white',
    borderRadius: 10,
  },



  resizeModel: {
    resizeMode: 'cover',
    height: 160,
    width: 180,    
  },



 



  containnerCamera: {
    flexDirection: 'column',
    alignItems: 'center',
    height:'auto',
    width:'auto',  
    backgroundColor: 'black',
  },


  camera:{
   height: 200,
   width: 200,
   marginTop: 60,
   marginBottom:100 ,
   backgroundColor:'green'
  },


  cameraBtn:{
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'rgba(6, 12, 127, 0.8)',
    width: 'auto',
    height: 40,
    marginLeft:10,
    marginTop:50,  
    borderRadius: 10,
     padding:10  
 },
  


  contentModalBtn:{
    height:'auto',
    width:'auto',  
    backgroundColor: 'black',
    marginTop:30,
    alignItems:'center'
 },


 











  containerPdfSpace: {
    height: '40%',
    width: '98%',
    flexDirection: 'col',
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: 'rgba(25, 126, 162, 0.7)',
  },
});

