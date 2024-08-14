import {
  FlatList,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';


import React, { useContext, useEffect, useState } from 'react';

import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../contexts/auth';



export default function Home({ navigation }) {




  const {
    endpointPhp,
    setUser, user,
    setLoad, load,
    setIdConstruction,
    setNameConstruction,
    setImgConstruction,
    setDay,
  } = useContext(AuthContext);




  const [welcome, setWelcome] = useState();


  const [construction, setConstruction] = useState([]);

  const [isConstruction, setIsConstruction] = useState(false);

  const [isStatus, setIsStatus] = useState(false);

  const [statusReport, setStatusReport] = useState("");

  const [createReport, setCreatReport] = useState(false);



  const getTime = () => {

    var dta = new Date();
    var hours = dta.getHours();
    var dd = dta.getDate().toString().padStart(2, '0');
    var mm = (dta.getMonth() + 1).toString().padStart(2, '0');
    var yyyy = dta.getFullYear();

    var today = dd + "/" + mm + "/" + yyyy;

    setDay(today);

    if (hours > 0 && hours < 12) {
      setWelcome("Bom dia")
    } else if (hours >= 12 && hours < 18) {
      setWelcome("Boa tarde")
    } else {
      setWelcome("Boa noite")
    }
  }




  useEffect(() => {

    listConstruction();

    navigation.addListener('focus', () => setLoad(!load))

    getTime();

  }, [load, navigation]);




  const signOut = () => {
    setUser("")
    navigation.navigate("Login");
  }





  const listConstruction = async () => {

    await fetch(endpointPhp + "?action=list_construction")
      .then(res => res.json())
      .then(

        (result) => {

          if (result == "nenhuma construcao encontrada") {
            console.log(result);
          } else {
            setConstruction(result);
            setIsConstruction(true);           
          }

        }
      )
      .catch(() => {
        console.log('Erro', 'Não foi possível carregar os dados da construtora');
      });
  }




  


  const getStatusReport = async (idConst, nameConst, imgConst) => {
    await fetch(endpointPhp + "?action=report_status", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idConst
      })
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIdConstruction(idConst);
          setNameConstruction(nameConst);
          setImgConstruction(imgConst);

          if (result == "status não encontrado") {
            setCreatReport(true);
            setIsStatus(false);
          } else {
            setIsStatus(true);
            setCreatReport(false);
            setStatusReport(result);
          }

        })
      .catch((error) => console.error(error));
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
            <Text style={styles.textInfo}>{` ${welcome} ${user} `}</Text>
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
          isConstruction == false ?

            <View style={styles.containertEmpty}>

              <Text>Não tem construção ainda ?</Text>

              <LinearGradient
                colors={['#B1B2AB', '#7D7F72']}
                style={styles.styleBtnOne}
              >
                <Pressable
                  onPress={() => navigation.navigate("CadConstruction")}
                >
                  <Text style={styles.textAlert}>Cadastre Agora!</Text>
                </Pressable>
              </LinearGradient>

            </View>

            :

         <ScrollView>

          <View style={styles.containerBtn}>            
             
              {
                isStatus ?

                <View>
                  <Text style={styles.textAlert}>{` Status : ${statusReport} `}</Text>

                  <LinearGradient
                    colors={['#E13166', '#E10749']}
                    style={styles.styleBtnOne}
                  >
                    <Pressable
                      onPress={() => { navigation.navigate("Report") }}
                    >
                      <Text style={styles.textAlert}>Buscar Relatórios</Text>
                    </Pressable>
                  </LinearGradient>
                </View>
                  :
                <View></View>
              }


              {createReport ?

              <View>

                 <Text style={styles.textAlert}>{` Não existe Relatório `}</Text>

                <LinearGradient
                  colors={['#61FF33', '#7D7F72']}
                  style={styles.styleBtnOne}
                >
                  <Pressable
                    onPress={() => { navigation.navigate("CadReport") }}
                  >
                    <Text style={styles.textAlert}>Criar Relatórios</Text>
                  </Pressable>
                </LinearGradient>

              </View>
                :
             <View></View>
              }



              <LinearGradient
                colors={['#B1B2AB', '#7D7F72']}
                style={styles.styleBtnTwo}
              >
                <Pressable
                  onPress={() => { navigation.navigate("CadConstruction") }}
                >
                  <Text style={styles.textAlert}>Cadastre nova Obra</Text>
                </Pressable>
              </LinearGradient>

          </View>



            <View style={styles.containerList}>

              {
                construction.map(
                     (item ) =>                      

                  <View style={styles.cardList}>


                   <View  key={item.id_cts}></View>


                    <View style={styles.containerImg} >
                      <Image
                        style={styles.resizeModel}
                        source={{ uri: 'data:image/png;base64,' + item.img_cts }}
                      />
                    </View>

                    <View style={styles.dataList}>

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

                      <LinearGradient
                        colors={['#B1B2AB', '#7D7F72']}
                        style={styles.styleBtnOne}
                      >
                        <Pressable
                          onPress={() => getStatusReport(item.id_cts, item.name_cts, item.img_cts)}
                        >
                          <Text style={styles.textAlert}>Verificar status</Text>
                        </Pressable>
                      </LinearGradient>

                    </View>
                  </View>
                )
              }

            </View>

           </ScrollView>
        }

      </LinearGradient>
    </KeyboardAvoidingView>

  );
}





















