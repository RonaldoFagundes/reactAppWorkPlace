import React, { useContext, useEffect, useState } from 'react';

import {
  FlatList,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';


import styles from './styles';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../../contexts/auth';


export default function EditReport({ navigation }) {

  const {
    endpointPhp,
    setLoad, load,    
    idReport,
    nameConstruction,
    imgConstruction,
    imgTags
  } = useContext(AuthContext);
 

  useEffect(() => {
    navigation.addListener('focus', () => setLoad(!load));
    listReportById();
  }, [load, navigation]);


  const [isLoading, setIsLoading] = useState(true);
  const [reportList, setReportList] = useState([]);
  const [dataRel, setDataRel] = useState(
    {
      date: "",
      title: "",
      desc: "",
      status: "",
      img_one: null,
      img_two: null,
      img_three: null,
      img_four: null,
      id: idReport,
    }
  );



  const handleInputChange = (atribute, value) => {
    setDataRel(
      {
        ...dataRel, [atribute]: value,
      }
    )
  }


  const [checkBox, setCheckBox] = useState([]);
  const [randomCheckBox, setRandomCheckBox] = useState(null);
  const [statusCheckBox, setStatusCheckBox] = useState(null);

  const selectStatus = (index, item) => {
    setStatusCheckBox(index);
    if (statusCheckBox !== index && checkBox[index] !== undefined) {
      checkBox[index] = undefined;
    } else {
      checkBox[index] = item.id_tag;
      setStatusCheckBox(index);
    }
    setRandomCheckBox(Math.random());

    setDataRel(
      {
        ...dataRel, ['status']: item.status_tag,
      }
    )
  }


  const listReportById = async () => {
    await fetch(endpointPhp + "?action=list_report_by_id", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idReport,
      })
    })
      .then((res) => res.json())
      .then(
        (result) => {

          if (result !== "not found") {
            setIsLoading(false);
            setReportList(result);
            {
              result.map((item) => {
                setDataRel(
                  {
                    ...dataRel, 'date': item.date_rpt,
                    dataRel, 'title': item.title_rpt,
                    dataRel, 'desc': item.description_rpt,
                    dataRel, 'status': item.status_rpt,
                    dataRel, 'img_one': item.img_one_rpt,
                    dataRel, 'img_two': item.img_two_rpt,
                    dataRel, 'img_three': item.img_three_rpt,
                    dataRel, 'img_four': item.img_four_rpt,
                  }
                )
              })
            }
          } else {
            alert(result);
          }
        })
      .catch((error) => console.error(error));
  }


  const updateReport = async () => {
    await fetch(endpointPhp + "?action=update_report", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dataRel
      })
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result != "update error") {
            navigation.navigate("Report");
            alert("Relatório atualizado com sucesso");
          } else {
            alert(result);
          }
        })
      .catch(function (error) {
        console.log('erro => ' + error.message);
      });
  }




  if (isLoading) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    )
  }

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <View style={styles.containerMain} >

        <View style={styles.containerHeader}>

          <View style={styles.userHeader}>

            <View>

              <Image
                style={styles.imgLogo}
                source={{ uri: 'data:image/png;base64,' + imgConstruction }}
              />

            </View>

            <Text style={styles.textInfo}>{nameConstruction}</Text>

          </View>

          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={() => { navigation.navigate("Home") }}>
              <Text style={styles.textAlert}>Voltar</Text>
            </Pressable>
          </LinearGradient>

        </View>

        <View style={styles.containerInfo}>
          <Text style={styles.textMain}>{` Edição de Relatório `}</Text>
        </View>

        <FlatList

          data={reportList}

          renderItem={({ item }) =>

            <View style={styles.dataList}>

              <Text style={styles.textData}>{` Pagina ${item.page_rpt}`}</Text>

              {item.date_rpt != "" ?
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder={` ${item.date_rpt}`}
                  placeholderTextColor="#000000"
                  onChangeText={
                    (valor) => handleInputChange('date', valor)
                  }
                />
                :
                <Text></Text>
              }

              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder={` ${item.title_rpt}`}
                placeholderTextColor="#000000"
                onChangeText={
                  (valor) => handleInputChange('title', valor)
                }
              />

              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder={` ${item.description_rpt}`}
                placeholderTextColor="#000000"
                rows={4}
                multiline={true}
                onChangeText={
                  (valor) => handleInputChange('desc', valor)
                }
              />

             {/*       
               {item.status_rpt != "" ?
            */}

               <View style={styles.containerCheckBox}>

                  <View style={styles.contentList}>
                    <Text style={styles.textData}>{` Status : ${item.status_rpt}`}</Text>
                  </View>

                  <FlatList
                    data={imgTags}
                    renderItem={({ index, item }) =>

                      <View style={styles.contentCheckBox}>

                        <View>
                          <Text>{item.status_tag}</Text>
                        </View>

                        <Pressable onPress={() => selectStatus(index, item)}>
                          {
                            statusCheckBox !== index
                              ?
                              <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
                              :
                              <MaterialCommunityIcons name="checkbox-intermediate" size={24} color="black" />
                          }
                        </Pressable>

                      </View>
                    }
                  >
                  </FlatList>

                </View>

              {/* 
                :
                <View></View>
               }
             */}
             
            </View>
          }
        >
        </FlatList>

        <LinearGradient
          colors={['#B1B2AB', '#7D7F72']}
          style={styles.styleBtnOne}
        >
          <Pressable onPress={() => updateReport()}>
            <Text style={styles.textAlert}>Atualizar</Text>
          </Pressable>
        </LinearGradient>

        <View style={{ height: 10 }}></View>

      </View >
    </KeyboardAvoidingView >
  );
}





































