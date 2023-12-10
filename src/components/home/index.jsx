import {
  FlatList,
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable
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

import { getDoc } from "firebase/firestore";





export default function Home({ navigation }) {


  const auth = getAuth();

  const db = firebase.firestore();


  var dta = new Date();
  var hours = dta.getHours();
  //  var minutes = dta.getMinutes();
  var dd = dta.getDate().toString().padStart(2, '0');
  var mm = (dta.getMonth() + 1).toString().padStart(2, '0');
  var yyyy = dta.getFullYear();

  var today = dd + "/" + mm + "/" + yyyy;





  const {
    setEmail, email,
    setModal, modal,
    setUser, user,
    setLoad, load,
    setDay, day,
    setSelectContruction,

  } = useContext(AuthContext);




  const [welcome, setWelcome] = useState();

  const [construction, setConstruction, selectContruction] = useState([]);







  const helloApp = () => {

    if (hours > 0 && hours < 12) {
      setWelcome("Bom dia")
    } else if (hours >= 12 && hours < 18) {
      setWelcome("Boa tarde")
    } else {
      setWelcome("Boa noite")
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

        list.push({ ...doc.data(), id: doc.id });

      });

      setConstruction(list);

      console.log(list)
    })


  }




  function getConstruction(n, r) {

    setDay(today);

    //  setSelectContruction.name = n;
    //  setSelectContruction.responsable = r ;


    setSelectContruction(
      {
        ...selectContruction, ['name']: n,
        selectContruction, ['responsable']: r,
      }
    )



    navigation.navigate("VisitConstructions")

    console.log(" nome " + n + " responsabel " + r)

  }




  /*
  const selectConstruction2 = async () => {
 
  
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
 
 }
 */










  return (


    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >



      <ScrollView>



        <LinearGradient
          // colors={['#66110A', '#FFB233']}
          colors={[
            'rgba(75, 139, 117, 0.6)',
            'rgba(75, 139, 117, 0.2)',
          ]}
          style={styles.containerMain}
        >



          <View style={styles.containerInfo}>
            <Text style={styles.textMain}>{` Tela Home `}</Text>
          </View>








          <View style={styles.containerHeader}>


            <View style={styles.containerLogo}>

              <Image
                style={styles.resizeModel}
                source={require('../../../assets/logo_one.png')}
              />

            </View>
            

            <View style={styles.contentHeader}>


              <Text style={styles.textInfo}>{` ${welcome} ${user} `}</Text>


              <Pressable style={styles.containerBtn}

                onPress={signOut}
              >

                <Text style={styles.textAlert}>Logout</Text>

              </Pressable>


            </View>


          </View>



          <View style={styles.containerList}>


            <FlatList

              // showsVerticalScrollIndicator={false}

              data={construction}

              renderItem={({ item }) =>

                <View style={styles.cardList}>


                  {
                    item.nome === user
                      ?
                      <Text></Text>
                      :
                      <Text style={styles.textList}>
                        {`Nome :  ${item.nome}`}
                      </Text>
                  }



                  {
                    item.responsavel === undefined
                      ?
                      <Text></Text>
                      :
                      <Text style={styles.textList}>
                        {`Responsavel :  ${item.responsavel}`}
                      </Text>
                  }


                  {
                    item.endereco === undefined
                      ?
                      <Text></Text>
                      :
                      <Text style={styles.textList}>
                        {`Endereço :  ${item.endereco}`}
                      </Text>
                  }



                  {
                    item.numero === undefined
                      ?
                      <Text></Text>
                      :
                      <Text style={styles.textList}>
                        {`Nº :  ${item.numero}`}
                      </Text>
                  }



                  {
                    item.complemento === undefined
                      ?
                      <Text></Text>
                      :
                      <Text style={styles.textList}>
                        {`Complemeto :  ${item.complemento}`}
                      </Text>
                  }



                  {
                    item.responsavel === "usuario"
                      ?
                      <Text></Text>
                      :
                      <Text></Text>
                     /* 
                      <Text style={styles.textList}>
                        {`Responsavél :  ${item.responsavel}`}
                      </Text>
                       */

                      &&

                      <Pressable style={styles.btnWarning}

                        onPress={() => getConstruction(item.nome, item.responsavel)}
                      >
                        <Text style={styles.textAlert}>Visitar</Text>

                      </Pressable>
                  }


                </View>

              }

            >

            </FlatList>

            <View>
              <Pressable style={styles.containerBtn}

                onPress={() => navigation.navigate("CadConstructions")}
              >
                <Text style={styles.textAlert}>Cadastrar Obra</Text>

              </Pressable>
            </View>

          </View>

        </LinearGradient>


      </ScrollView>


      <View style={{ height: 10 }}></View>


    </KeyboardAvoidingView>



  );
}





















