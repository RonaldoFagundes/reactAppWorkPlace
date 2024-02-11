import React, { useContext, useEffect, useState, useRef } from 'react';


import {
   View,
   ScrollView,
   Text,
   TextInput,
   Pressable,
   KeyboardAvoidingView,
   Platform,
   Image,
   Modal
} from 'react-native';


import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesome } from '@expo/vector-icons';


import firebase from '../../database/firebase';

import { getAuth } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";


import { Camera } from 'expo-camera';


import { AuthContext } from '../../contexts/auth';









function CadConstructions({ navigation }) {






   const { email } = useContext(AuthContext);

   const auth = getAuth();

   const db = firebase.firestore();









   const [modalCamera, setModalCamera] = useState(false);

   const camRef = useRef(null);

   const [type, setType] = useState(Camera.Constants.Type.back)





   const [construction, setConstruction] = useState({

      name: "",
      img: null,

      address: "",
      number: "",
      others: "",

      responsable: "",

   });




   useEffect(() => {

      cleanInput();

      // getPermission();

   }, [],);






   const changeImg = async () => {

      setConstruction(
         {
            ...construction, 'img': null,
         }
      )

      setModalCamera(true);
   }






   async function takePicture() {


      if (camRef) {

         //const options = { quality: 0.5, base64: true };
         const dataImg = await camRef.current.takePictureAsync();

         console.log(dataImg);

         setModalCamera(false);

         if (construction.img == null) {

            setConstruction(
               {
                  ...construction, 'img': dataImg.uri,
               }
            )

         }


      }

   }






   /* 
     
     const [errorValidate, setErrorValidate] = useState({
        error: false,
        msg: ""
     });
  
  
     const [credencials, setCredencials] = useState(
        {
           email: "",
           password: ""
        }
     );
  
  
     const [construction, setConstruction] = useState(
        {
           name: "",
           address: "",
           number:"",
           details:"",
           responsable:""
        }
     );
  
  */







   const handleInputChange = (atribute, value) => {

      setConstruction(
         {
            ...construction, [atribute]: value
         }
      )

   }





   const insertConstruction = async () => {
      /*
       console.log(
       "email: "+email+   
       "nome: "+construction.name+
       "endereco: "+construction.address+
       "numero: "+construction.number+
       "complemento: "+construction.others+       
       "responsavel: "+construction.responsable   
          )
       */

      await setDoc(doc(db, email, construction.name), {
         nome: construction.name,
         endereco: construction.address,
         numero: construction.number,
         complemento: construction.others,
         responsavel: construction.responsable,
        // img: `data:image/png;base64,${construction.img}`
        img: construction.img

      }).then(() => {

         console.log("metodo addConstruction");
         navigation.navigate("Home");

      }).catch((error) => {
         console.log(error);
      });


   }







   /*
   const insertConstruction = async () => {     
       
      await setDoc(doc(db, email, "Construcao"), construcao);
         
      console.log("cadasrado com sucesso! ");
   }
   */







   /*
 const construcao2 =

    {
      nome: 'Pirituba',
 
      //img: require(`../../../assets/test.png`),
 
      endereco: {
        rua: 'Av pirituba',
        numero: '123',
        complemento: 'frente'
      },
 
      responsavel: 'Geronimo',
      status: 'em analise'

    }
 



    const construcao =

    {
      nome: 'Sorocaba',
 
      //img: require(`../../../assets/test.png`),
 
      endereco: {
        rua: 'Av sorocaba',
        numero: '476',
        complemento: 'frente'
      },
 
      responsavel: 'Renato',
      status: 'em analise'

    }
   */








   /* 
   const setRegister = async () => {

      await createUserWithEmailAndPassword(auth, credencials.email, credencials.password)
         .then((userCredential) => {

            const user = userCredential.user;

            setEmail(user.email)
            setModal(true)
            setUser("");
            navigation.navigate("Home");

            console.log(user.email)

         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;


            setErrorValidate(
               {
                  ...errorValidate, ['error']: true,
                  errorValidate, ['msg']: " email informado já cadastrado!"
               }
            );


            setCredencials(
               {
                  ...credencials, ['email']: "",
                  credencials, ['password']: ""
               }
            );

            console.log(" erro no metodo auth " + errorCode + " " + errorMessage)
         });

   };
 */






   /* 
   const validate = () => {

      if (!credencials.email.includes('@')) {

         setErrorValidate(
            {
               ...errorValidate, ['error']: true,
               errorValidate, ['msg']: "informe um email valido"
            }
         );

         setCredencials(
            {
               ...credencials, ['email']: "",
               credencials, ['password']: ""
            }
         );

         console.log("email não valido");


      } else if (!credencials.email.includes('.com')) {

         setErrorValidate(
            {
               ...errorValidate, ['error']: true,
               errorValidate, ['msg']: "informe um email valido"
            }
         );

         setCredencials(
            {
               ...credencials, ['email']: "",
               credencials, ['password']: ""
            }
         );
         console.log("email não valido");


      } else if (credencials.password.length < 8) {

         setErrorValidate(
            {
               ...errorValidate, ['error']: true,
               errorValidate, ['msg']: "cadastre uma senha com no minímo 8 caracteres"
            }
         )
         setCredencials(
            {
               ...credencials, ['email']: "",
               credencials, ['password']: ""
            }
         )
         console.log(" senha menor que 8 caracteres")
      } else {
         setErrorValidate(
            {
               ...errorValidate, ['error']: false,
               errorValidate, ['msg']: ""
            }
         )

         console.log(" validação ok");
         setRegister();
      }
   } 
   
   */






   const cleanInput = () => {

      setConstruction(
         {
            ...construction, ['name']: "",
            construction, ['address']: "",
            construction, ['number']: "",
            construction, ['details']: "",
            construction, ['responsable']: "",
            construction, ['img']: null,
         }
      )
   }












   return (


      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.body}
      >



         <ScrollView>

            <LinearGradient
               colors={
                  [
                     // 'rgba(10, 40, 90, 0.97)',
                     // 'rgba(19, 53, 75 ,1)',

                     'rgba(75, 139, 117, 0.6)',
                     'rgba(75, 139, 117, 0.2)',
                  ]
               }
               style={styles.containerMain}
            >


               <View style={styles.containerInfo}>
                  <Text style={styles.textMain}>{` Tela Cadastro de Obras `}</Text>
               </View>



               <LinearGradient
                  colors={
                     [
                        // 'rgba(19, 50, 27, 0.4)',
                        'rgba(25, 126, 162, 0.6)',
                        'rgba(10, 13, 35 ,0.6)',
                     ]
                  }
                  style={styles.contentMain}
               >

                  <View style={styles.containerImgSpace}>


                     <View style={styles.contentImgSpace}>

                        {/* 
                        <Image source={{ uri: `data:image/png;base64,${construction.img}` }}
                           style={styles.resizeModel}
                        />
 */}
                        <Image source={{ uri: construction.img }}
                           style={styles.resizeModel}
                        />

                     </View>

                     {
                        construction.img == null ?

                           <View>
                              <Pressable style={styles.styleBtn}
                                 onPress={() => {
                                    setModalCamera(true)
                                 }}
                              >
                                 <Text style={styles.textInfo} >Tirar Foto</Text>
                              </Pressable>
                           </View>
                           :
                           <View style={{ marginTop: 50, marginLeft: 24 }}>
                              <Pressable style={styles.styleBtn}
                                 onPress={() => {
                                    changeImg()
                                 }}
                              >
                                 <Text style={styles.textInfo} >Mudar a foto</Text>
                              </Pressable>
                           </View>
                     }


                  </View>












                  <TextInput style={styles.input}
                     placeholder=" digite o nome da obra"
                     //placeholderTextColor="#BBD441"
                     placeholderTextColor="white"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChange('name', valor)
                     }
                     value={construction.name}
                  />



                  <TextInput style={styles.input}
                     placeholder="Rua/Av"
                     //placeholderTextColor="#BBD441"
                     placeholderTextColor="white"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChange('address', valor)
                     }
                     value={construction.address}
                  />



                  <TextInput style={styles.input}
                     placeholder="Nº"
                     //placeholderTextColor="#BBD441"
                     placeholderTextColor="white"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChange('number', valor)
                     }
                     value={construction.number}
                  />



                  <TextInput style={styles.input}
                     placeholder="Complemento"
                     //placeholderTextColor="#BBD441"
                     placeholderTextColor="white"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChange('others', valor)
                     }
                     value={construction.others}
                  />



                  <TextInput style={styles.input}
                     placeholder="Responsável"
                     //placeholderTextColor="#BBD441"
                     placeholderTextColor="white"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChange('responsable', valor)
                     }
                     value={construction.responsable}
                  />






                  {

                     construction.name == "" && construction.address == "" &&
                        construction.number == "" && construction.responsable == ""
                        ?

                        <View>

                           <Pressable
                              style={styles.styleBtn}
                              disabled={true}
                           >
                              <Text style={styles.textInfo}>Cadastrar</Text>
                           </Pressable>

                        </View>

                        :

                        <View >

                           <Pressable
                              style={styles.styleBtn}
                              onPress={insertConstruction}
                           >
                              <Text style={styles.textInfo}>Cadastrar</Text>
                           </Pressable>

                        </View>

                  }

               </LinearGradient>

            </LinearGradient>





            <Modal
               animationType='fade'
               visible={modalCamera}
            >

               <LinearGradient
                  colors={
                     [
                        'rgba(10, 40, 90, 0.97)',
                        'rgba(19, 53, 75 ,1)',
                     ]
                  }
                  style={styles.modalContent}
               >

                  <Text style={styles.textInfo}>Camera</Text>

                  <Camera
                     style={styles.containnerCamera}
                     type={type}
                     ref={camRef}
                  >

                     <View style={styles.contentCamera}>

                        <Pressable style={styles.btnCameraFlip}

                           onPress={() => {
                              setType(
                                 type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                              );
                           }}
                        >
                           <FontAwesome name='exchange' size={22} color={"#F3102F"} />
                        </Pressable>


                        <Pressable style={styles.btnCameraTake}
                           onPress={() => takePicture()}
                        >
                           <FontAwesome name='camera' size={22} color={"#FCF9F8"} />
                        </Pressable>

                     </View>

                  </Camera>


                  <Pressable style={styles.styleBtn}
                     onPress={() => setModalCamera(false)}
                  >
                     <Text style={styles.textInfo} >desligar a camera</Text>
                  </Pressable>

               </LinearGradient>

            </Modal>


         </ScrollView>

         <View style={{ height: 10 }}></View>

      </KeyboardAvoidingView>
   )


}

export default CadConstructions;





