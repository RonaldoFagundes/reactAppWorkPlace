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



export default function Home({ navigation }) {




  var status = "pendente";

  const {
    endpointPhp,
    setUser, user,
    setLoad, load,
    setIdConstruction,
    idConstruction,

  } = useContext(AuthContext);


  // const [constructionName, setConstructionName] = useState();


  const [welcome, setWelcome] = useState();

  //const [construction, setConstruction, selectContruction] = useState([]);

  const [construction, setConstruction] = useState([]);







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
    useEffect(() => {
  
      helloApp();
  
      selectConstruction();
  
      navigation.addListener('focus', () => setLoad(!load))
  
  
    }, [load, navigation]);
  */




  useEffect(() => {

    //listConstruction();
    // helloApp();

    //selectConstruction();

  }, []);






  const signOut = async () => {

    setUser("")
    //&
    //  setId("") &
    navigation.navigate("Login")
  }








  const listConstruction = async () => {

    await fetch(`${endpointPhp}/?action=list_construction`)
      .then(res => res.json())
      .then(
        (result) => {
          setConstruction(result);
        }
      )
      .catch(() => {
        console.log('Erro', 'Não foi possível carregar os dados da construtora');
      });


  }




  const getConstruction = async (id, name, enterprise) => {
    setIdConstruction(id);
    console.log(" id " + id + " name " + name + " enterprise " + enterprise);
  }










  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >



      <LinearGradient
        colors={[
          'rgba(255, 249, 145, 0.07)',
          'rgba(249, 225, 175 ,0.09)',
        ]}
        style={styles.containerMain}
      >


        <View style={styles.containerInfo}>
          <Text style={styles.textMain}>{` Tela Home `}</Text>
        </View>


        <View style={styles.containerHeader}>

          <View style={styles.userHeader}>

            {/* 
              <View style={styles.containerLogo}>
                <Image
                  style={styles.resizeModel}
                  source={require('../../../assets/logo_one.png')}
                />
              </View>
               */}

            {/* <Text style={styles.textInfo}>{` ${welcome} ${user} `}</Text> */}

            <Text style={styles.textInfo}>user</Text>

          </View>


          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={signOut}>
              <Text style={styles.textAlert}>Logout</Text>
            </Pressable>
          </LinearGradient>

        </View>

        {
          construction == "" ?

            <View style={styles.containertEmpty}>
              <Text>Nenhuma Construtora cadastrada</Text>

              <LinearGradient
                colors={['#B1B2AB', '#7D7F72']}
                style={styles.styleBtnOne}
              >
                <Pressable onPress={signOut}>
                  <Text style={styles.textAlert}>Cadastre Agora!</Text>
                </Pressable>
              </LinearGradient>
            </View>
            :

            <View >
              <ScrollView>
                <FlatList
                  // showsVerticalScrollIndicator={false}

                  data={construction}

                  renderItem={({ item }) =>

                    <View style={styles.contentList}>

                      <View style={styles.cardList}>

                        <View >
                          <Image
                            style={styles.resizeModel}
                            source={{ uri: item.img_cts }}
                          />
                        </View>

                        <View style={styles.dataList}>

                          <View style={styles.contentData}>
                            <Text style={styles.textAlert}>{`Id : `}</Text>
                            <Text style={styles.textAlert}>{item.id_cts}</Text>
                          </View>

                          <View style={styles.contentData}>
                            <Text style={styles.textAlert}>{`Nome : `}</Text>
                            <Text style={styles.textAlert}>{item.name_cts}</Text>
                          </View>

                          <View style={styles.contentData}>
                            <Text style={styles.textAlert}>{`Empreendimento: `}</Text>
                            <Text style={styles.textAlert}>{item.enterprise_cts}</Text>
                          </View>

                          <View style={styles.contentData}>
                            <Text style={styles.textAlert}>{`Endereço: `}</Text>
                            <Text style={styles.textAlert}>{item.address_cts}</Text>
                          </View>

                        </View>

                        <View>

                          {
                            status === 'pendente'
                              ?

                              <Pressable style={styles.styleBtnTwo}

                                onPress={() => getConstruction(item.id_cts, item.name_cts, item.enterprise_cts)}
                              >
                                <Text style={styles.textAlert}>Pendente</Text>

                              </Pressable>

                              :

                              <Pressable style={styles.styleBtnOne}

                                onPress={() => getConstruction(item.id_cts, item.name_cts, item.enterprise_cts)}
                              >
                                <Text style={styles.textAlert}>Inspecionar Obra</Text>

                              </Pressable>
                          }

                        </View>

                      </View>

                    </View>
                  }
                >
                </FlatList>

              </ScrollView>

            </View>
        }

      </LinearGradient>
      <View style={{ height: 10 }}></View>
    </KeyboardAvoidingView>
  );
}





















