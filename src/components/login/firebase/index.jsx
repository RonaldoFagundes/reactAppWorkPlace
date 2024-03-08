
import {  
  View,  
  Text,
  TextInput,  
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

import NetInfo from '@react-native-community/netinfo';


import firebase from '../../database/firebase';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

import { Camera } from 'expo-camera';







export default function Login({ navigation }) {



  const db = firebase.firestore();
  const auth = getAuth();


  const [connect, setConnect] = useState(false);

  const [hasPermission, setHasPermission] = useState(null);

   
  


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

    getConnect();

    getPermission();

    cleanInput();

    navigation.addListener('focus', () => setLoad(!load))



  }, [load, navigation]);
 



 
  const getConnect=()=>{
     
    NetInfo.fetch().then(state => {

      setConnect(state.isConnected);
      //console.log('Connection type', state.type);    

      console.log(connect);
    });

  }
  







  const getPermission = async()=>{

      const {status} = await Camera.requestCameraPermissionsAsync();
       setHasPermission(status === 'granted');
  }

  if(hasPermission === null){
      return <View/>;
  }


  if(hasPermission === false){
    return <Text>Acesso negado!</Text>;
}





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

        setUser(snapshot.data().nomeUser)
   
        navigation.navigate("Home");

        console.log(
            snapshot.data().nome
        );


      } else {

        setErrorValidate(
          {
            ...errorValidate, ['error']: true,
            errorValidate, ['msg']: " erro, favor tentar mais tarde ou entre em contato com suporte "
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









function cleanInput () {

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
            //'rgba(10, 40, 90, 0.97)',
            //'rgba(19, 53, 75 ,1)',
            'rgba(75, 139, 117, 0.6)',
            'rgba(75, 139, 117, 0.2)',
          ]
        }
        style={styles.containerMain}
      > 

     
         <View style={styles.containerInfo}>
            <Text style={styles.textMain}>{` Tela de Login `}</Text>
         </View>



       {
    
        !connect ?  
  
        <View style={styles.containerNoConnect}>
           <Text style={styles.textWarningB}>Não Conectado</Text>
           <Text style={styles.textWarningS}>Conect álguma rede de internet</Text>
        </View>

          :
    
         <View style={styles.containerLogo}>

           <Image
           style={styles.resizeModel}
           source={require('../../../assets/logo_one.png')}
           />

          </View> 

        }
         


        <View style={styles.contentMain}>




           <TextInput style={styles.input}
             disabled={!connect}
             placeholder=" digite o e-mail"
             placeholderTextColor="green"
             type="text"

            onChangeText={
              (valor) => handleInputChange('email', valor)
            }
            
            value={credencials.email}
          />




         <TextInput style={styles.input}
            disabled={!connect}
            placeholder=" digite a senha"
            placeholderTextColor="green"
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
                  <Text style={styles.textBtn}>Login</Text>
                </Pressable>


              </View>

              :

              <View>

                <Pressable
                  style={styles.containerBtn}
                  onPress={setLogar}
                >
                  <Text style={styles.textBtn}>Logar</Text>
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


         


        {connect ?

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

           

              <View></View>

         
          </View>
 

        </View>


            :
          <View></View>
          }
  




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
















