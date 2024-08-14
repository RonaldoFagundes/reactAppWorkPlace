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




  const {
    endpointPhp,
    setUser, user,
    setLoad, load,
    setIdConstruction,
    setImgConstruction,
    setDay,
  } = useContext(AuthContext);



  //const endpointPhp = "https://ddbabb23-115a-4fbc-ac05-d7c225982170-00-xbc9ar2bh5gb.janeway.replit.dev/";

  const [welcome, setWelcome] = useState();


  const [construction, setConstruction] = useState([]);


  const [statusReport, setStatusReport] = useState(false);


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









  const listConstruction2 = async () => {
    await fetch(endpointPhp + "?action=list_construction", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      /*  body: JSON.stringify({
         idConstruction
       }) */
    })
      .then((res) => res.json())
      .then(

        (result) => {

          setConstruction(result);
          // console.log(result.assets[0].base64);

          //console.log(result.uri);

        })
      .catch((error) => console.error('---' + error));
  }




  const listConstruction = async () => {

    await fetch(endpointPhp + "?action=list_construction")
      .then(res => res.json())
      .then(

        (result) => {

          setConstruction(result);

          //  setIdConst(result[0].id_cts);

          // getStatusReport(result[0].id_cts);
          //console.log(result);
          // console.log(result[1].img_cts)

        }
      )
      .catch(() => {
        console.log('Erro', 'Não foi possível carregar os dados da construtora');
      });
  }









  const getStatusReport = async (idConst, imgConst) => {
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

          setIdConstruction(idConst);
          setImgConstruction(imgConst);

          if (result == "status não encontrado") {
            setCreatReport(true);
            setStatusReport(false);
          } else {
            setStatusReport(true);
            setCreatReport(false);
          }

          //  console.log(" id " + idConst + " status " + result)

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
           construction == [] ?           
                    
           <View>

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




        {/* 
 <ScrollView>    
         {
    construction.map(
       (item) => 
         <View  key={item.id_cts}>
     */}



      <View>


        <FlatList
          // showsVerticalScrollIndicator={false}

          data={construction}

          renderItem={({ item }) =>


            <View style={styles.cardList}>

              <View style={styles.containerImg} >

                <Image
                  style={styles.resizeModel}
                  source={{ uri: 'data:image/png;base64,' + item.img_cts }}
                />

                {/*           
              <Image  
                 //source={{uri: `data:image/jpeg;base64,${item.img_cts}`}}
               source={{uri: 'data:image/png;base64'+item.img_cts}}
               style={{width: 50, height: 50, border:1, borderColor: 'red', resizeMode:'cover'}}
            />
            */}

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

                {/* 
                      <LinearGradient
                        colors={['#B1B2AB', '#7D7F72']}
                        style={styles.styleBtnOne}
                      >
                        <Pressable
                          onPress={() => getStatusReport(item.id_cts , item.img_cts)}
                        >
                          <Text style={styles.textAlert}>Verificar status</Text>
                        </Pressable>
                      </LinearGradient>

                   */}

              </View>

            </View>
          }
        >


        </FlatList>

       
      
          

          }



        {/* 
      </View>
    )
  }
</ScrollView>
  */}



        {/* 
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
          
            <LinearGradient
              colors={['#61FF33', '#33FF71']}
              style={styles.styleBtnOne}
            >
              <Pressable
                onPress={() => { navigation.navigate("CadReport") }}
              >
                <Text style={styles.textAlert}>Criar Relatórios</Text>
              </Pressable>
            </LinearGradient>
          

        <LinearGradient
          colors={['#B1B2AB', '#7D7F72']}
          style={styles.styleBtnOne}
        >
          <Pressable
            onPress={() => { navigation.navigate("CadConstruction") }}
          >
            <Text style={styles.textAlert}>Cadastre nova Obra</Text>
          </Pressable>
        </LinearGradient>
       */}




      </LinearGradient>

    </KeyboardAvoidingView>
  );
}





















