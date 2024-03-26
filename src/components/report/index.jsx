import {
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';



import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../contexts/auth';

import { LinearGradient } from 'expo-linear-gradient';




export default function Report({ navigation }) {


  var status = "pendente";

  const {
    endpointPhp,
    setUser, user,
    setLoad, load,
    setIdConstruction,
    idConstruction,

  } = useContext(AuthContext);



  const [reportList, setReportList] = useState([]);



  /*
    useEffect(() => {   
      
  
      navigation.addListener('focus', () => setLoad(!load))
  
  
    }, [load, navigation]);
  */





  const getReports = async () => {

    await fetch(`${endpointPhp}/?action=list_report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        idConstruction
      })

    })

      .then(res => res.json())
      .then(
        (result) => {
          setReportList(result)
        }
      )
  }






  const listReport = async () => {

    await fetch(`${endpointPhp}/?action=list_report`)
      .then(res => res.json())
      .then(
        (result) => {

          setReportList(result);

        }
      )
      .catch(() => {
        console.log('Erro', 'Não foi possível carregar os dados os relatórios');
      });

  }






  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <ScrollView>

        <LinearGradient
          colors={[
            'rgba(75, 139, 117, 0.6)',
            'rgba(75, 139, 117, 0.2)',
          ]}
          style={styles.containerMain}
        >


          <View style={styles.containerInfo}>
            <Text style={styles.textMain}>{` Tela Report `}</Text>
          </View>



          <View style={styles.containerHeader}>


            <View style={styles.contentHeader}>

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


            <Pressable style={styles.styleBtnDefault}
            // onPress={signOut}
            >
              <Text style={styles.textAlert}>Logout</Text>
            </Pressable>
          </View>



          <View >

            {/* 
  
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
    
                    </View>  
  
                  </View>  
   
                }
              >
  
              </FlatList>

             */}


          </View>


          {/* 
  
              {
              constructionName == undefined
                ?
  
                <View style={styles.containertEmpty}>
  
                  <View style={styles.contentEmpty}>
  
                    <Text style={styles.textAlert}>{`${user} Bem vindo ! cadastre sua 1ª obra `}</Text>
                    <View>
                      <Pressable style={styles.styleBtnTwo}
  
                        onPress={() => navigation.navigate("CadConstructions")}
                      >
                        <Text style={styles.textAlert}>Cadastrar Obra</Text>
  
                      </Pressable>
                    </View>
  
                  </View>
  
                </View>
                :
  
                <View style={styles.containerList}>
  
                  <View style={styles.contentList}>
  
                    <FlatList
  
                      // showsVerticalScrollIndicator={false}
  
                      data={construction}
  
                      renderItem={({ item }) =>
  
                      <View >
  
                          {
  
                            item.nome === undefined
  
                              ?
  
                              <View></View>
  
                              :
  
                              <View style={styles.cardList}>
                                {
                                  item.img === undefined
                                    ?
                                    <View></View>
                                    :
  
                                    <View style={styles.cardImg}>
                                     
                                      <Image source={{ uri: `data:image/png;base64,${item.img}` }}
                                       style={styles.resizeModel} 
                                       />
                                    
                                      <Image source={{ uri: item.img }}
                                        style={styles.resizeModel}
                                      />
                                    </View>
                                }
  
                                {
                                  item.nome === undefined
                                    ?
                                    <View></View>
                                    :
                                    <Text style={styles.textList}>
                                      {`Nome :  ${item.nome}`}
                                    </Text>
                                }
  
                                {
                                  item.responsavel === undefined
                                    ?
                                    <View></View>
                                    :
                                    <Text style={styles.textList}>
                                      {`Responsavel :  ${item.responsavel}`}
                                    </Text>
                                }
                                {
                                  item.endereco === undefined
                                    ?
                                    <View></View>
                                    :
                                    <Text style={styles.textList}>
                                      {`Endereço :  ${item.endereco}`}
                                    </Text>
                                }
                                {
                                  item.numero === undefined
                                    ?
                                    <View></View>
                                    :
                                    <Text style={styles.textList}>
                                      {`Nº :  ${item.numero}`}
                                    </Text>
                                }
                                {
                                  item.complemento === undefined
                                    ?
                                    <View></View>
                                    :
                                    <Text style={styles.textList}>
                                      {`Complemeto :  ${item.complemento}`}
                                    </Text>
                                }
  
                                <View>
                                  <Pressable style={styles.styleBtnTwo}
  
                                    onPress={() => getConstruction(item.nome , item.responsavel, item.img)}
                                  >
                                    <Text style={styles.textAlert}>Inspecionar Obra</Text>
  
                                  </Pressable>
                                </View>
  
                              </View>
                            }
                        </View>
                      }
                    >
                    </FlatList>
  
  
                    <View>
                      <Pressable style={styles.styleBtnTwo}
  
                        onPress={() => navigation.navigate("CadConstructions")}
                      >
                        <Text style={styles.textAlert}>Cadastrar Obra</Text>
  
                      </Pressable>
                    </View>
  
  
                  </View>
                </View>
              }
  
           */}


        </LinearGradient>

      </ScrollView>

      <View style={{ height: 10 }}></View>

    </KeyboardAvoidingView>

  );
}



















