import React, { useContext, useEffect, useState } from 'react';


import {
   FlatList,
   View,
   ScrollView,
   Text,
   TextInput,
   TouchableOpacity,
   Pressable,
   KeyboardAvoidingView,
   Platform,
   Image
 } from 'react-native';


 import styles from './styles';

 import { LinearGradient } from 'expo-linear-gradient';


 //import * as ImagePicker from 'expo-image-picker';

 import firebase from '../../database/firebase';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";


 import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
 
 
 


 import { AuthContext } from '../../contexts/auth';









function CadConstructions({ navigation }) {




  const auth = getAuth();

  const db = firebase.firestore();





  
  useEffect(() => {

 //  cleanInput();

}, [],);





   const { setEmail, email, setModal, setUser } = useContext(AuthContext);


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





   const [construction,setConstruction] = useState ({

      name:"",
      img:"",
    
      
       address: "",
       number:"",
       others: "",
   
    
     responsable:"",    
      
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
         
         endereco:construction.address,
         numero:construction.number,
         complemento:construction.others,       
         responsavel:construction.responsable,           

      }).then(() => {
   
         console.log("metodo addConstruction")
   
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





   
       <LinearGradient
         colors={
            [
               'rgba(10, 40, 90, 0.97)',
               'rgba(19, 53, 75 ,1)',
            ]
         }
         style={styles.containerMain}
      > 
    

      





         <View style={styles.containerInfo}>
            <Text style={styles.textMain}>{` Tela Cadastro Constructions `}</Text>
         </View>









        {/* 
         <LinearGradient
            colors={
               [
                  'rgba(19, 50, 27, 0.4)',
                  'rgba(10, 13, 35 ,0.6)',
               ]
            }
            style={styles.contentMain}
         >
        */}

        <View style={styles.contentMain}>


            <TextInput style={styles.input}
               placeholder=" digite o nome da obra"
               placeholderTextColor="#BBD441"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('name', valor)
               }
               value={construction.name}
            />


           <TextInput style={styles.input}
               placeholder="Rua/Av"
               placeholderTextColor="#BBD441"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('address', valor)
               }
               value={construction.address}
            />


           <TextInput style={styles.input}
               placeholder="Nº"
               placeholderTextColor="#BBD441"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('number', valor)
               }
               value={construction.number}
            />


           <TextInput style={styles.input}
               placeholder="Complemento"
               placeholderTextColor="#BBD441"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('others', valor)
               }
               value={construction.others}
            />


         <TextInput style={styles.input}
               placeholder="Responsavél"
               placeholderTextColor="#BBD441"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('responsable', valor)
               }
               value={construction.responsable}
            />




           <Pressable  style={styles.containerBtn} 
              //disabled={true}
              >
               <Text style={styles.textAlert} >selecione uma foto</Text>

           </Pressable>





            {

               construction.name   == "" && construction.address    == "" &&
               construction.number == "" && construction.responsable == ""
                  ?

                  <View>

                     <Pressable
                        style={styles.containerBtn}
                        disabled={true}
                     >
                        <Text style={styles.textInfo}>Cadastro</Text>
                     </Pressable>

                  </View>

                  :


                  <View>

                     <Pressable
                         style={styles.containerBtn}
                         onPress={insertConstruction}
                        >
                         <Text style={styles.textInfo}>Cadastrar</Text>
                     </Pressable>

                  </View>

            }




            


          </View>
        

         


      


      </LinearGradient> 






   </KeyboardAvoidingView> 
   )



}

export default  CadConstructions;





  {/*
      
      
      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={Style.body}
      >





         <LinearGradient
            colors={
               [
                  'rgba(10, 40, 90, 0.97)',
                  'rgba(19, 53, 75 ,1)',
               ]
            }
            style={Style.containerMain}
         >







            <View style={Style.containerInfo}>
               <Text style={Style.textMain}>{` Tela Cadastro `}</Text>
            </View>










            <LinearGradient
               colors={
                  [
                     'rgba(19, 50, 27, 0.4)',
                     'rgba(10, 13, 35 ,0.6)',
                  ]
               }
               style={Style.contentMain}
            >





               <TextInput style={Style.input}
                  placeholder=" digite o seu e-mail"
                  placeholderTextColor="#BBD441"
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('email', valor)
                  }
                  value={credencials.email}
               />





               <TextInput style={Style.input}
                  placeholder=" senha com no minímo 8 caracteres"
                  placeholderTextColor="#BBD441"
                  secureTextEntry={true}
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('password', valor)

                  }
                  value={credencials.password}
               />





               {

                  credencials.email == "" && credencials.password == ""
                     ?

                     <View>

                        <TouchableOpacity
                           style={Style.containerBtn}
                           disabled={true}
                        >
                           <Text style={Style.textInfo}>Cadastro</Text>
                        </TouchableOpacity>

                     </View>

                     :
                     <View>

                        <TouchableOpacity
                           style={Style.containerBtn}
                           onPress={validate}
                        >
                           <Text style={Style.textInfo}>Cadastrar</Text>
                        </TouchableOpacity>

                     </View>

               }







               {
                  errorValidate.error === true
                     ?

                     <View>
                        <Text style={Style.textAlert}>{errorValidate.msg}</Text>
                     </View>

                     :
                     <View></View>
               }





               <Text style={Style.textInfo}>
                  {`Já tem cadastro ?  `}

                  <Text style={Style.textAlert}
                     onPress={() => navigation.navigate("Login")}
                  >
                     {` faça o login agora... `}
                  </Text>

               </Text>




            </LinearGradient>




         </LinearGradient>






      </KeyboardAvoidingView> 
    
    
    
    
    */}