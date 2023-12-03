
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
  Image,
  Modal
} from 'react-native';

import React, { useContext, useEffect, useState } from 'react';

import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../contexts/auth';


import firebase from '../../database/firebase';

import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";




export default function Login({ navigation }) {



  const db = firebase.firestore();
  const auth = getAuth();



  const { setEmail, setUser, setId, setModal, setLoad, load  } = useContext(AuthContext);

  const [modalPassword, setModalPassword] = useState(false);




  const [credencials, setCredencials] = useState(
    {
      email: "",
      password: ""
    }
  );




  const [errorValidate, setErrorValidate] = useState(
    {
      error: false,
      msg: ""
    }
  );




  const handleInputChange = (atribute, value) => {
    setCredencials(
      {
        ...credencials, [atribute]: value
      }
    )
  }




 



  useEffect(() => {

    cleanInput();

    navigation.addListener('focus', () => setLoad(!load))

  }, [load, navigation]);









  const setLogar = async () => {

    await signInWithEmailAndPassword(auth, credencials.email, credencials.password)
      .then((userCredential) => {

        const user = userCredential.user;
        getUser(user.email)
        setEmail(user.email)  
        console.log(user.email);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorValidate(
          {
            ...errorValidate, ['error']: true,
            errorValidate, ['msg']: "email ou senha incorretos!"
          }
        )

        setCredencials(
          {
            ...credencials, ['email']: "",
            credencials, ['password']: "",
          }
        )

        console.log(" erro nas credenciais de login " + errorCode + " " + errorMessage)
      });

  }







  const setForgetPassword = async () => {

    await sendPasswordResetEmail(auth, credencials.email)

      .then(() => {

        alert('VERIFIQUE SUA CAIXA DE E-MAIL');

        setModalPassword(false)

        setCredencials(
          {
            ...credencials, ['email']: "",
            credencials, ['password']: "",
          }
        )

        console.log("verifique sua caixa de email")

      }).catch((error) => {
        alert('email incorreto');
        console.log(error)
      })

  }





  const getUser = async (id) => {

    await db.collection(id).doc("User").get().then((snapshot) => {

      if (snapshot.data() != undefined) {

        setUser(snapshot.data().nome)
      //  setId(snapshot.data().matricula)
      //  setModal(false)

        navigation.navigate("Home");

        console.log(
         // snapshot.data().matricula
        //  + "  " +
          snapshot.data().nome
        );


      } else {

        setErrorValidate(
          {
            ...errorValidate, ['error']: true,
            errorValidate, ['msg']: " erro, favor mais tarde ou entre em contato com suporte "
          }
        )

        setCredencials(
          {
            ...credencials, ['email']: "",
            credencials, ['password']: "",
          }
        )

        console.log(" erro ao carregrar dados no firebase  " + errorCode + " " + errorMessage)
      }
    })

  }





const cleanInput = () => {

    setCredencials(
      {
        ...credencials, ['email']: "",
           credencials, ['password']: "",
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
            <Text style={styles.textMain}>{` Tela Login `}</Text>
         </View>

    


  
        <View style={styles.contentMain}>




           <TextInput style={styles.input}
             placeholder=" digite o e-mail"
             placeholderTextColor="#BBD441"
             type="text"

            onChangeText={
              (valor) => handleInputChange('email', valor)
            }
            
            value={credencials.email}
          />




         <TextInput style={styles.input}
            placeholder=" digite a senha"
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

                <Pressable
                  style={styles.containerBtn}
                  disabled={true}
                >
                  <Text style={styles.textInfo}>Login</Text>
                </Pressable>


              </View>

              :

              <View>

                <Pressable
                  style={styles.containerBtn}
                  onPress={setLogar}
                >
                  <Text style={styles.textInfo}>Logar</Text>
                </Pressable>

              </View>

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




       <View>



          <Text style={styles.textInfo}>

            {` não tem cadastro ?  `}

            <Text style={styles.textAlert}
              onPress={() => navigation.navigate("CadUser")}
            >
              {` faça o cadastro agora... `}
            </Text>

          </Text>



          <View style={styles.openModal} >

            <Text style={styles.textAlert}
              onPress={() => setModalPassword(true)}
            >
              {` esqueceu a senha ? `}
            </Text>


          </View>
 

        </View>






       </View>



      

     </LinearGradient> 
       
      




       





      <Modal


          animationType='fade'
          visible={modalPassword}
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



            <TextInput style={styles.input}
              placeholder=" informe o e-mail"
              placeholderTextColor="#BBD441"
              type="text"
              onChangeText={
                (valor) => handleInputChange('email', valor)
              }
              value={credencials.email}
            />

            {

              credencials.email == ""
                ?


                <View>

                  <Pressable
                    style={styles.containerBtn}
                    disabled={true}
                  >
                    <Text style={styles.textInfo}>Enviar</Text>
                  </Pressable>

                </View>


                :


                <View>

                  <Pressable
                    style={styles.containerBtn}
                    onPress={() => setForgetPassword()}

                  >
                    <Text style={styles.textInfo}>Enviar</Text>
                  </Pressable>


                </View>

            }

          </LinearGradient>



        </Modal> 




    

  
</KeyboardAvoidingView>




  )

}
















{/* 
       <LinearGradient
        colors={
          [
            'rgba(10, 40, 90, 0.97)',
            'rgba(19, 53, 75 ,1)',
          ]
        }
        style={Style.containerMain}
      > 
      



        <View style={styles.containerInfo}>
            <Text style={styles.textMain}>{` Tela Login `}</Text>
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
     




        
           <TextInput style={styles.input}
             placeholder=" digite o e-mail"
             placeholderTextColor="#BBD441"
             type="text"

            onChangeText={
              (valor) => handleInputChange('email', valor)
            }
            value={credencials.email}
          />

      


         <TextInput style={styles.input}
            placeholder=" digite a senha"
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
                  style={styles.containerBtn}
                  disabled={true}
                >
                  <Text style={styles.textInfo}>Login</Text>
                </TouchableOpacity>

              </View>

              :
              <View>

                <TouchableOpacity
                  style={styles.containerBtn}
                 // onPress={setLogar}
                >
                  <Text style={styles.textInfo}>Logar</Text>
                </TouchableOpacity>

              </View>
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




       <View>



          <Text style={styles.textInfo}>

            {` não tem cadastro ?  `}

            <Text style={styles.textAlert}
             // onPress={() => navigation.navigate("Cad")}
            >
              {` faça o cadastro agora... `}
            </Text>

          </Text>



          <View style={styles.openModal} >

            <Text style={styles.textAlert}
              onPress={() => setModalPassword(true)}
            >
              {` esqueceu a senha ? `}
            </Text>


          </View>
 

        </View>






      
        </LinearGradient> 
      




        </View>









        <Modal


          animationType='fade'
          visible={modalPassword}
        >

          <View style={styles.modalContent}>

            <TextInput style={styles.input}
              placeholder=" informe o e-mail"
              placeholderTextColor="#BBD441"
              type="text"
              onChangeText={
                (valor) => handleInputChange('email', valor)
              }
              value={credencials.email}
            />

            {

              credencials.email == ""
                ?

                <View>

                  <TouchableOpacity
                    style={styles.containerBtn}
                    disabled={true}
                  >
                    <Text style={styles.textInfo}>Enviar</Text>
                  </TouchableOpacity>

                </View>

                :
                <View>

                  <TouchableOpacity
                    style={styles.containerBtn}
                  //  onPress={() => setForgetPassword()}

                  >
                    <Text style={styles.textInfo}>Enviar</Text>
                  </TouchableOpacity>

                </View>

            }

          </View>



        </Modal> 



    

      </LinearGradient>
      
  
 */}