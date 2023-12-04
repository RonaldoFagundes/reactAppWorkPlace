import {
  FlatList,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
  Modal
} from 'react-native';



import React, { useContext, useEffect, useState } from 'react';


import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../contexts/auth';








import firebase from '../../database/firebase';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

import { doc, setDoc } from "firebase/firestore";

import { collection, query, where } from "firebase/firestore";

import {getDoc } from "firebase/firestore";



export default function Home({ navigation }) {


  const auth = getAuth();

  const db = firebase.firestore();


 
   var dta = new Date();
   var hours = dta.getHours();
 //  var minutes = dta.getMinutes();
   var day = dta.getDate().toString().padStart(2, '0');
   var month = (dta.getMonth() + 1).toString().padStart(2, '0');
   var year = dta.getFullYear();

   var today = day + "/" + month + "/" + year;


  // let stat  = "pendente" ;
   
   

   const { setEmail, email, setModal, modal ,setUser, user, setLoad, load } = useContext(AuthContext);

   const [welcome, setWelcome] = useState();


   const [construction, setConstruction] = useState([]);

  







   const helloApp = () => {

    if (hours > 0 && hours < 12) {
       setWelcome("Bom dia!!!")
    } else if (hours >= 12 && hours < 18) {
       setWelcome("Boa tarde!!!")
    } else {
       setWelcome("Boa noite!!!")
    }
 }






 





 


/*
  const obrass = [
    {
      nome: 'Pirituba',

      img: require(`../../../assets/test.png`),

      endereco: {
        rua: 'Av pirituba',
        numero: '123',
        complemento: 'frente'
      },

      responsavel: 'Geronimo',
      status: 'em analise'
    },



    {
      nome: 'Santo Amaro',
      
      img: require(`../../../assets/test.png`),

      endereco: {
        rua: 'Av Nossa Sehora do Sabara',
        numero: '54',
        complemento: 'frente'
      },

      responsavel: 'Pedro',
      status: 'resolvido'
    },

  ];

   */

 





  


 
   useEffect(() => {

    
        helloApp();

        selectConstruction();

        navigation.addListener('focus', () => setLoad(!load))

     // navigation.addListener('focus', () => setLoad(!load))
  
    // }, [load, navigation]);

  }, [load, navigation]);
    
    


  

  const signOut = async () => {

    await firebase.auth().signOut().then(() => {

       setUser("") 
         //&
        //  setId("") &
        navigation.navigate("Login")

    }).catch((error) => {
       consple.log("erro na funçao signOut")
    });
 }














 
 const selectConstruction = async () => {

  db.collection(email).onSnapshot((query) => {

     const list = [];

     query.forEach((doc) => {

       list.push({...doc.data(), id: doc.id });

     });

     setConstruction(list);

      console.log(list)
   })
   

 }








 
 const selectConstruction2 = async () => {


 /*
  await db.collection(email).doc('construcao').get().then((snapshot) => {
 
     if (snapshot.data() != undefined) {

  
        //constructions.push(snapshot.data.nome,  snapshot.data.endereco );
        //snapshot.data().nome)

    
         console.log(
          " email  "+email+
          " nome  "+snapshot.data().nome+
          " endereço  : "+snapshot.data().endereco+
          " nº  "+snapshot.data().numero+
          " complemento  "+snapshot.data().complemento+
          " nº  "+snapshot.data().numero+
          " responsavel  "+snapshot.data().responsavel
        );
      

        console.log(snapshot.data().guarulhos);



     }
    
  })

  */


}











  return (





    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >



     <ScrollView>

      

      <LinearGradient
               colors={['#66110A', '#FFB233']}
               style={styles.containerMain}
             > 


       

            <Text>Tela Home</Text>



          <View style={styles.containerHeader}>


             <View style={styles.contentHeader}>

               <Text style={styles.textInfo}>{`Bem vindo(a) ${user} ! ${welcome}`}</Text>


               <Pressable style={styles.containerBtn}
               
                // onPress={() => navigation.navigate("Login")}

                onPress={signOut}
               >

                 <Text style={styles.textAlert}>Logout</Text>

               </Pressable>

             </View>


          </View>



        <View style={styles.containerList}>


          <FlatList
              
               showsVerticalScrollIndicator={false}

               data={construction}
              
                renderItem={ ({ item }) =>


                <View style={styles.cardList}>




                    { item.nome === user
                      
                      ? 
                      <Text></Text> 
                      
                      :
                      
                      <Text style={styles.textList}>
                        {`Nome :  ${item.nome}`}
                      </Text>

                      } 





                    { item.endereco === undefined
                      
                      ? 
                      <Text></Text> 
                      
                      :
                      
                      <Text style={styles.textList}>
                        {`Endereço :  ${item.endereco}`}
                      </Text>

                      } 





                    { item.numero === undefined
                      
                      ? 
                      <Text></Text> 
                      
                      :
                      
                      <Text style={styles.textList}>
                        {`Nº :  ${item.numero}`}
                      </Text>

                      } 





                      { item.complemento === undefined
                      
                      ? 
                      <Text></Text> 
                      
                      :
                      
                      <Text style={styles.textList}>
                        {`Complemeto :  ${item.complemento}`}
                      </Text>

                      } 
                    




                     { item.responsavel === "usuario" 
                      
                      ? 
                      <Text></Text> 
                      
                      :
                      
                      <Text style={styles.textList}>
                        {`Responsavél :  ${item.responsavel}`}
                      </Text>

                      && 
                   
                      <Pressable style={styles.btnWarning}

                          onPress={() => navigation.navigate("")}
                         >
                          <Text style={styles.textAlert}>Visitar</Text>

                      </Pressable> 

                       }
                   



                 </View>

               }
            
          > 

          </FlatList>


         </View>
   
       </LinearGradient>
   
      
   </ScrollView>
   
   
<View style={{ height: 100 }}></View>


</KeyboardAvoidingView>



);
}

















    



