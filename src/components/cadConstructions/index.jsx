import React, { useContext, useEffect, useState, useRef } from 'react';


import {
   View,
   ScrollView,
   Text,
   TextInput,   
   Pressable,
   KeyboardAvoidingView,
   Platform,
   Image
} from 'react-native';


import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesome } from '@expo/vector-icons';


import firebase from '../../database/firebase';

import { getAuth} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";


import { Camera } from 'expo-camera';


import { AuthContext } from '../../contexts/auth';









function CadConstructions({ navigation }) {






   const { email } = useContext(AuthContext);

   const auth = getAuth();

   const db = firebase.firestore();

   const [onCamera, setOnCamera] = useState(false);

   const camRef = useRef(null);

   const [capturedPhoto, setCapturedPhoto] = useState(null);





   useEffect(() => {

      cleanInput();

   }, [],);



   async function takePicture() {
      if (camRef) {
         const dataImg = await camRef.current.takePictureAsync();
         setCapturedPhoto(dataImg.uri)
         console.log(dataImg);
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


   const [type, setType] = useState(Camera.Constants.Type.back)



   const [construction, setConstruction] = useState({

      name: "",
      img: "",

      address: "",
      number: "",
      others: "",

      responsable: "",

   });





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
                  onCamera === true
                     ?


                     <View style={styles.containnerCamera}>

                        <Camera
                           style={{ height: 200, width: 200, marginTop: 60 }}
                           type={type}
                           ref={camRef}

                        >

                           <View style={styles.contentCamera} >

                              <Pressable 
                                 style={{ position: 'absolute', bottom: 20, left: 20 }}                              

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

                           </View>

                        </Camera>


                        <Pressable style={styles.containerBtn}
                           //disabled={true}
                           onPress={takePicture}
                        >
                           <FontAwesome name='camera' size={20} color={"#fff"} />
                           {/* <Text style={styles.textInfo} >selecione uma foto</Text> */}

                        </Pressable>


                        <Pressable style={styles.containerBtn}
                           //disabled={true}
                           // onPress={setOnCamera(true)}
                           onPress={() => {
                              setOnCamera(false);
                           }}
                        >

                           <Text style={styles.textInfo} >desligar a camera</Text>

                        </Pressable>

                     </View>


                     :


                     <View >

                        <Pressable style={styles.containerBtn}
                           //disabled={true}
                           // onPress={setOnCamera(true)}
                           onPress={() => {
                              setOnCamera(true);
                           }}
                        >

                           <Text style={styles.textInfo} >ligar a camera</Text>

                        </Pressable>

                     </View>
               }











               {

                  construction.name == "" && construction.address == "" &&
                     construction.number == "" && construction.responsable == ""
                     ?

                     <View>

                        <Pressable
                           style={styles.containerBtn}
                           disabled={true}
                        >
                           <Text style={styles.textInfo}>Cadastrar</Text>
                        </Pressable>

                     </View>

                     :


                     <View >

                        <Pressable
                           style={styles.containerBtn}
                           onPress={insertConstruction}
                        >
                           <Text style={styles.textInfo}>Cadastrar</Text>
                        </Pressable>

                     </View>

               }






            </LinearGradient>

         </LinearGradient>

        </ScrollView>

        <View style={{ height: 10 }}></View>

      </KeyboardAvoidingView>
   )


}

export default CadConstructions;





