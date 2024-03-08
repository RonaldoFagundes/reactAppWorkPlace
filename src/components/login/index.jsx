
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



//import NetInfo from '@react-native-community/netinfo';


//import { Camera } from 'expo-camera';





export default function Login({ navigation }) {

  

  //const [connect, setConnect] = useState(false);

  //const [hasPermission, setHasPermission] = useState(null);

   
  


 // const { setEmail, setUser, setId, setModal, setLoad, load  } = useContext(AuthContext);



  
 const { setUser ,  endpointPhp} = useContext(AuthContext);
 

  const [errorLogin, setErrorLogin] = useState({
    status: '',
    msg: ''
  });




  const [credencials, setCredencials] = useState(
    {
      email: "",
      password: ""
    }
  );




 


  const handleInputChange = (atribute, value) => {
    setCredencials(
      {
        ...credencials, [atribute]: value
      }
    )
  }




 


 /*
  useEffect(() => {

    getConnect();

    getPermission();

    cleanInput();

    navigation.addListener('focus', () => setLoad(!load))



  }, [load, navigation]);
 
 */









   /*
  const getConnect=()=>{
     
    NetInfo.fetch().then(state => {

      setConnect(state.isConnected);
      //console.log('Connection type', state.type);    

      console.log(connect);
    });

  }
   */






   /*
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
 */





const logar = async () => {


  await fetch(`${endpointPhp}/?action=Login`,{
     method:'POST',
     headers:{
      'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       credencials
     })
  }) 
   .then(res=>res.json())
   .then(
    (result) => {

  
      if (result != "email ou senha incorretos!") {

        setUser(result);

        setErrorLogin({
          ...errorLogin, ['status']: false
        });

        setCredencials({
          ...credencials, ["email"]: "",
             credencials, ["password"]: ""
        });

        navigation.navigate("Home");

        console.log(" email " + credencials.email + " senha " + credencials.password + " conectado com sucesso com ususario  " + result);

      } else {

        setErrorLogin({
          ...errorLogin, ['status']: true,
             errorLogin, ['msg']: result
        });


        setCredencials({
          ...credencials, ["email"]: "",
             credencials, ["password"]: ""
        });

        console.log("erro " + credencials.email + " " + credencials.password + " " + result)
      }


    });

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
            'rgba(251, 195, 95, 1.0)',
            'rgba(251, 195, 95, 0.5)'
          ]
        }
        style={styles.containerMain}
      >


        <View style={styles.contentMain}>


          <View>
            <Text style={styles.textMain}>Tela de Login</Text>
          </View>



          <View>

            <TextInput
              style={styles.input}
              placeholder=" digite seu email"
              placeholderTextColor="#cc0000"
              type="text"

              onChangeText={
                (valor) => handleInputChange("email", (valor))
              }
              value={credencials.email}
            />

          </View>


          <View>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="digite sua senha"
              placeholderTextColor="#cc0000"
              type="text"

              onChangeText={
                (valor) => handleInputChange("password", (valor))
              }
              value={credencials.password}
            />
          </View>



          {


            errorLogin.status === true
              ?
              <View>
                <Text style={styles.textAlert}>{errorLogin.msg}</Text>
              </View>
              :
              <View></View>
          }



          {
            credencials.email === "" || credencials.password === ""

              ?

              <LinearGradient
                colors={['#EB610C', '#FFA533']}
                style={styles.containerBtn}
              >

                

                <Pressable>
                    <Text style={styles.textInfo}>Login</Text>
                </Pressable>



              </LinearGradient>

              :

              <LinearGradient
                colors={['#D4580B', '#FA6326']}
                style={styles.containerBtn}
              >

                   <Pressable
                    style={styles.containerBtn}
                    onPress={() => logar()}                  >
                    <Text style={styles.textInfo}>Logar</Text>
                  </Pressable>

              



              </LinearGradient>

          }


          <Text style={styles.textInfo}>

            {` não tem cadastro ?  `}

            <Text style={styles.textAlert}
              onPress={() => navigation.navigate("Insertuser")}
            >
              {` cadastre-se agora... `}
            </Text>

          </Text>

        </View>

        <View style={{ height: 100 }}></View>


      </LinearGradient>

    </KeyboardAvoidingView>

  )

}








  















