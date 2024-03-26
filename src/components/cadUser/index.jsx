import React, { useContext, useEffect, useState } from 'react';


import {
   View,
   Text,
   TextInput,
   Pressable,
   KeyboardAvoidingView,
   Platform,
} from 'react-native';


import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../../contexts/auth';





function CadUser({ navigation }) {


   //const endpointPhp = 'http://localhost:3322';  


   const { endpointPhp, setEmail, email, setModal, modal, setUser } = useContext(AuthContext);



   const [errorValidate, setErrorValidate] = useState({
      error: false,
      msg: ""
   });




   const [datauser, setDatauser] = useState({
      name: '',
      email: '',
      password: ''
   });


   const handleInputChange = (atribute, value) => {

      setDatauser({
         ...datauser, [atribute]: value
      })
   }



   /*
    useEffect(() => {
 
       cleanInput();
       setModal(false);
 
    }, [],);
    */









   const addUser = async () => {

      await fetch(`${endpointPhp}/?action=add_user`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },

         body: JSON.stringify({
            datauser
         })

      })
         .then((res) => res.json())

         .then(
            (result) => {

               if (result === "cadastrado com sucesso") {

                  navigation.navigate("Home");

               } else {

                  console.log(result);
               }

            });
   }









   const validate = () => {

      if (!datauser.email.includes('@')) {

         setErrorValidate(
            {
               ...errorValidate, ['error']: true,
               errorValidate, ['msg']: "informe um e-mail valido"
            }
         );

         setDatauser(
            {
               ...datauser, ['name']: "",
               datauser, ['email']: "",
               datauser, ['password']: "",

            }
         );

         console.log("email não valido");


      } else if (!datauser.email.includes('.com')) {

         setErrorValidate(
            {
               ...errorValidate, ['error']: true,
               errorValidate, ['msg']: "informe um e-mail valido"
            }
         );

         setDatauser(
            {
               ...datauser, ['name']: "",
               datauser, ['email']: "",
               datauser, ['password']: "",

            }
         )
         console.log("email não valido");


      } else if (datauser.password.length < 8) {

         setErrorValidate(
            {
               ...errorValidate, ['error']: true,
               errorValidate, ['msg']: "cadastre uma senha com no minímo 8 caracteres"
            }
         )
         setDatauser(
            {
               ...datauser, ['name']: "",
               datauser, ['email']: "",
               datauser, ['password']: "",

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
         //  addUser();
      }
   }










   return (

      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

         <LinearGradient
            colors={
               [
                  'rgba(255, 249, 145, 0.07)',
                  'rgba(249, 225, 175 ,0.09)',
               ]
            }
            style={styles.containerMain}
         >


            <View style={styles.containerHeader}>
               <Text style={styles.textMain}>{` Tela Cadastro de Usuário`}</Text>
            </View>



            <View style={styles.contentMain}>


               <TextInput style={styles.input}
                  placeholder=" digite o seu nome"
                  placeholderTextColor="#cc0000"
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('name', valor)
                  }
                  value={datauser.name}
               />


               <TextInput style={styles.input}
                  placeholder=" digite o seu e-mail"
                  placeholderTextColor="#cc0000"
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('email', valor)
                  }
                  value={datauser.email}
               />


               <TextInput style={styles.input}
                  placeholder=" senha com no minímo 8 caracteres"
                  placeholderTextColor="#cc0000"
                  secureTextEntry={true}
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('password', valor)

                  }
                  value={datauser.password}
               />

               {

                  datauser.email == "" && datauser.password == ""
                     ?

                     <LinearGradient
                        colors={['#B1B2AB', '#7D7F72']}
                        style={styles.styleBtnOne}
                     >
                        <Pressable disabled={true}>
                           <Text style={styles.textBtn}>Preencha seus dados</Text>
                        </Pressable>
                     </LinearGradient>
                     :
                     <LinearGradient
                        colors={['#7D7F72', '#B1B2AB']}
                        style={styles.styleBtnOne}
                     >
                        <Pressable onPress={() => validate()} >
                           <Text style={styles.textBtn}>Cadastrar</Text>
                        </Pressable>
                     </LinearGradient>
               }


               {
                  errorValidate.error === true
                     ?
                     <View>
                        <Text style={styles.textAlert}>{errorValidate.msg}</Text>
                     </View>
                     :
                     <View></View>
               }



               <View style={styles.contentCad}>
                  <Text style={styles.textInfo}>
                     {`Já tem cadastro ?  `}
                     <Text style={styles.textAlert}
                        onPress={() => navigation.navigate("Login")}
                     >
                        {` faça o login agora... `}
                     </Text>
                  </Text>
               </View>

            </View>

         </LinearGradient>

      </KeyboardAvoidingView>
   )
}
export default CadUser;








