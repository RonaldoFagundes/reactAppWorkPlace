import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Modal   
  } from 'react-native';
  
  import React, { useContext, useEffect, useState } from 'react';

  import styles from './styles';

  import { LinearGradient } from 'expo-linear-gradient';


  import { AuthContext } from '../../contexts/auth';

  import NetInfo from '@react-native-community/netinfo';

  import { Camera } from 'expo-camera';






  export default function Login() {

   
    //const endpointPhp = "https://ddbabb23-115a-4fbc-ac05-d7c225982170-00-xbc9ar2bh5gb.janeway.replit.dev/";

    const [hasPermission, setHasPermission] = useState(null);

    const { endpointPhp, setUser, setLoad, load  } = useContext(AuthContext);
  


    const [errorLogin, setErrorLogin] = useState({
      status: '',
      msg: ''
    });
  
  
  
    const handleInputChange = (atribute, value) => {
      setLogin({
        ...login, [atribute]: value
      })
    }
  
  
  
    const [login, setLogin] = useState({
      email: '',
      password: '',
    });
  
  
  
    const [modalCredencials, setModalCredencials] = useState(false);
  
    const [resetPassword, setResetPassword] = useState(false);
  


  
    const [datauser, setDatauser] = useState({
      name: '',
      email: '',
      password: ''
    });
  
    

    const handleInputChangePassword = (atribute, value) => {
  
      setDatauser({
        ...datauser, [atribute]: value
      })
    }
  
 


    useEffect(() => {   
 
      getPermission();
     
      navigation.addListener('focus', () => setLoad(!load)); 
  
    }, [load, navigation]);



 
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
  
 
 
 
 
   const newPassword = async () => {  
       await fetch(endpointPhp+"?action=reset_password", {
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
           if (result === 'senha cadastrada com sucesso!') {
             setModalCredencials(false) && setResetPassword(false);
           } else {
             console.log(result);
           }
         });
       }
 
 
 
 
 
 
   const logar = async () => { 
       await fetch(endpointPhp+"?action=login", {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'      
       },      
       body: JSON.stringify({
         login
       })
     })
       .then(res => res.json())
       .then(
         (result) => {
            if (result != "email ou senha incorretos!") {
            // setUser(result);
             setErrorLogin({
               ...errorLogin, ['status']: false
             });
             setLogin({
               ...login, ["email"]: "",
               login, ["password"]: ""
             });
            // navigation.navigate("Home");
             
               console.log(
               " email " +
               login.email +
               " senha " +
               login.password +
               " conectado com sucesso com ususario  " +
               result
             );
            
             
           } else {
             setErrorLogin({
               ...errorLogin, ['status']: true,
               errorLogin, ['msg']: result
             });
             setLogin({
               ...login, ["email"]: "",
               login, ["password"]: ""
             });
            // console.log("erro " + login.email + " " + login.password + " " + result)
           }
         })
         .catch((error) => console.log('err  '+error));       
 
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
           <Text style={styles.textMain}>{` Tela de Login `}</Text>
         </View>
 
         <View style={styles.contentMain}>
 
           <View>
             <TextInput
               style={styles.input}
               placeholder=" digite seu email"
               placeholderTextColor="#cc0000"
               type="text"
 
               onChangeText={
                 (valor) => handleInputChange("email", (valor))
               }
               value={login.email}
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
               value={login.password}
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
             login.email === "" || login.password === ""
               ?
  
            
               <LinearGradient
                 colors={['#B1B2AB', '#7D7F72']}
                 style={styles.styleBtnOne}
               >
            
                 <Pressable>
                   <Text style={styles.textBtn}>Preencha seus dados!</Text>
                 </Pressable>
 


               </LinearGradient> 

               :

               <LinearGradient
                 colors={['#7D7F72', '#B1B2AB']}
                 style={styles.styleBtnOne}
               >  
 
                 <Pressable onPress={() => logar()} >
                   <Text style={styles.textBtn}>Logar</Text>
                 </Pressable>
 
               </LinearGradient>

              
           }


 
           <View style={styles.contentAction}>
             <Text style={styles.textInfo}>
               {` não tem cadastro ?  `}
 
               <Text style={styles.textAlert}
                 onPress={() => navigation.navigate("CadUser")}
               >
                 {` cadastre-se agora... `}
               </Text>
             </Text>
           </View>
 

           <View style={styles.contentAction}>
             <Text style={styles.textInfo}>
               {` esqueceu a senha ?  `}
               <Text style={styles.textAlert}
                 onPress={() => setModalCredencials(true)}
               >
                 {` click aqui !!! `}
               </Text>
             </Text>
           </View>
 
           <Modal
             animationType='fade'
             visible={modalCredencials}
           >
 
             <LinearGradient
               colors={
                 [
                   'rgba(255, 249, 145, 0.07)',
                   'rgba(249, 225, 175 ,0.09)',
                 ]
               }

               style={styles.modalContent}>

 

 
               <View style={styles.contentMain}>
                 {
                   !resetPassword
                     ?
                     <View style={styles.contentModal}>
                       <TextInput
                         style={styles.input}
                         placeholder=" digite seu nome"
                         placeholderTextColor="#cc0000"
                         type="text"
                         onChangeText={
                           (valor) => handleInputChangePassword("name", (valor))
                         }
                         value={datauser.name}
                       />
 
                       <TextInput
                         style={styles.input}
                         placeholder=" digite seu email"
                         placeholderTextColor="#cc0000"
                         type="text"
                         onChangeText={
                           (valor) => handleInputChangePassword("email", (valor))
                         }
                         value={datauser.email}
                       />
 
                       <Pressable style={styles.styleBtn}
                         onPress={() => setResetPassword(true)}
                       >
                         <Text style={styles.textBtn} >Ok</Text>
                       </Pressable>
                     </View>
                     :
                     <View style={styles.contentModal}>
                       <TextInput
                         style={styles.input}
                         secureTextEntry={true}
                         placeholder="cadastre nova senha"
                         placeholderTextColor="#cc0000"
                         type="text"
                         onChangeText={
                           (valor) => handleInputChangePassword("password", (valor))
                         }
                         value={datauser.password}
                       />
 
                       <Pressable style={styles.styleBtn}
                         onPress={() => newPassword()}
                       >
                         <Text style={styles.textBtn} >Confirmar</Text>
                       </Pressable>
                     </View>
                 }
 
               </View>
 
             </LinearGradient>


           </Modal>
         </View>

         <View style={{ height: 100 }}></View>


       </LinearGradient>

     </KeyboardAvoidingView>
   )
 }
 
  
  
  
  
  
  
  /*
  
      const logarR = async () => { 

   //  console.log(JSON.stringify({login}))

    await fetch(`${endpointPhp}/?action=login` , {   
      credentials: 'include', 
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
     
	 
	 
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'false',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type,  X-Requested-With, OPTIONS, Origin, Accept' 
     
	 

      },    
        body:  JSON.stringify({     
        login
      })
   
    })
      .then(res =>res.json())           
      .then(    
        (result) => {
          console.log('result ok' + result);
        })
        .catch(function(error) {      
         console.log('erro valor == ' + error.message+" ---- ");
       });   

  }
  
  
  
  
  
  const testLogar = async () => {
  
  var responseClone; // 1
  fetch(`${endpointPhp}/?action=login`)
  .then(function (response) {
      responseClone = response.clone(); // 2
      return response.json();
  })
  .then(function (data) {
      // Do something with data
  }, function (rejectionReason) { // 3
      console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
      responseClone.text() // 5
      .then(function (bodyText) {
          console.log('Received the following instead of valid JSON:', bodyText); // 6
      });
  });
  }
 

  
  
  */