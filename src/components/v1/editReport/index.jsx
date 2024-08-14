import {
  FlatList,
  View,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable
} from 'react-native';


import React, { useContext, useEffect, useState } from 'react';

import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../contexts/auth';


export default function EditReport({ navigation }) {

 
    const {
      endpointPhp,
      idReport, 
      user,     
      setLoad, load,  
      setIdReport, 
      nameConstruction    
    } = useContext(AuthContext);


  

    useEffect(() => {         
  
      navigation.addListener('focus', () => setLoad(!load))
  
      listReportById()
  
    }, [load, navigation]);
  



  const [reportList, setReportList] = useState([]);

  const [dataRel, setDataRel] = useState(
    {
      id: idReport,
      date: "",
      title: "",
      desc: "",
      status: "",
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      id_fk: 0
    }
  );


  const [sortedout, setSortedout] = useState(false);
  const [pending, setPending] = useState(false);
  const [foreseen, setForeseen] = useState(false);
  const [attention, setAttention] = useState(false);


  const handleInputChange = (atribute, value) => {
    setDataRel(
      {
        ...dataRel, [atribute]: value,       
      }
    )
  }


  const selctSortedout = () => {
    setSortedout(!sortedout);

    setDataRel(
      {
        ...dataRel, 'status': 'resolvido'
      }
    )
  }

  const selectPending = () => {
    setPending(!pending);
    setForeseen(false);
    setAttention(false);

    setDataRel(
      {
        ...dataRel, 'status': 'pendente'
      }
    )
  }


  const selectForeseen = () => {
    setForeseen(!foreseen);
    setPending(false);
    setAttention(false);

    setDataRel(
      {
        ...dataRel, 'status': 'previsto'
      }
    )
  }

  const selectAttention = () => {
    setAttention(!attention);
    setPending(false);
    setForeseen(false);

    setDataRel(
      {
        ...dataRel, 'status': 'atenção'
      }
    )
  }





  const listReportById = async () => {   
      await fetch(endpointPhp+"?action=list_report_by_id", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idReport
      })
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setReportList(result);  
        
          setDataRel(
            {
           ...dataRel, 'date': result.date_rpt,
              dataRel, 'title': result.title_rpt,
              dataRel, 'desc': result.description_rpt,
              dataRel, 'status': result.status_rpt,
              dataRel, img1: result.img_one_rpt,
              dataRel, img2: result.img_two_rpt,
              dataRel, img3: result.img_three_rpt,
              dataRel, img4: result.img_four_rpt,
              dataRel, id_fk: parseInt(result.id_fk_cts),
            }
          )   
        })
      .catch((error) => console.error(error));
  }



  const updateReport = async () => {    
      await fetch(endpointPhp+"?action=update_report", {  
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
          if (result != "Relatorio não cadastrado!!!") {
            navigation.navigate("Report");  
            alert("Relatório atualizado com sucesso")         
            //console.log(result);
          } else {
            console.log(result);
          }
        })
      .catch(function (error) {
        console.log('erro' + error.message);
      });
  }





  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <View style={styles.containerMain} >

        <View style={styles.containerHeader}>

          <View style={styles.userHeader}>          

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

        <ScrollView>

          <View style={styles.contentImg} >
            <Image
              style={styles.resizeModel}
              source={{ uri: reportList.img_one_rpt }}  
              /* source={{uri: 'data:image/png;base64,' + dataRel.img_one_rpt }} */
            />
            <Image
              style={styles.resizeModel}
              source={{ uri: reportList.img_two_rpt }}  
            /*   source={{ uri: 'data:image/png;base64,' + dataRel.img_two_rpt }} */

            />
          </View>

          <View style={styles.contentImg} >
            <Image
              style={styles.resizeModel}
              source={{ uri: reportList.img_three_rpt }}  
             /*  source={{ uri: 'data:image/png;base64,' + dataRel.img_three_rpt }} */
            />
            <Image
              style={styles.resizeModel}
              source={{ uri: reportList.img_four_rpt }}  
              /* source={{uri: 'data:image/png;base64,' + dataRel.img_four_rpt }} */
            />
          </View>

          <View style={styles.containerData}>

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={` Data :   ${reportList.date_rpt}`}
              placeholderTextColor="#000000"
              onChangeText={
                (valor) => handleInputChange('date', valor)
              }
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={` Titulo :   ${reportList.title_rpt}`}
              placeholderTextColor="#000000"
              onChangeText={
                (valor) => handleInputChange('title', valor)
              }
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={` Descrição :   ${reportList.description_rpt}`}
              placeholderTextColor="#000000"
              rows={4}
              multiline={true}
              onChangeText={
                (valor) => handleInputChange('desc', valor)
              }
            />          

            <View style={styles.containerSwiitch}>

              <View style={styles.contentList}>
                <Text style={styles.textData}>{` Status: ${reportList.status_rpt}`}</Text>
              </View>
              {
                reportList.status_rpt == "pendente" ?

                  <View>
                    <View style={styles.contentSwiitch}>
                      <Text style={styles.textBtn}>Previsto</Text>
                      <Pressable
                        style={[styles.checkboxBase, foreseen && styles.checkboxChecked]}
                        onPress={() => selectForeseen()}>
                        {foreseen && <Ionicons name="checkmark" size={20} color="white" />}
                      </Pressable>
                    </View>

                    <View style={styles.contentSwiitch} >
                      <Text style={styles.textBtn}>Atençao</Text>
                      <Pressable
                        style={[styles.checkboxBase, attention && styles.checkboxChecked]}
                        onPress={() => selectAttention()}>
                        {attention && <Ionicons name="checkmark" size={20} color="white" />}
                      </Pressable>
                    </View>

                    <View style={styles.contentSwiitch} >
                      <Text style={styles.textBtn}>Resolvido</Text>
                      <Pressable
                        style={[styles.checkboxBase, sortedout && styles.checkboxChecked]}
                        onPress={() => selctSortedout()}>
                        {sortedout && <Ionicons name="checkmark" size={20} color="white" />}
                      </Pressable>
                    </View>

                  </View>

                  :

                  <View></View>
              }

              {
                reportList.status_rpt == "previsto" ?

                  <View>

                    <View style={styles.contentSwiitch}>
                      <Text style={styles.textBtn}>Pendente</Text>
                      <Pressable
                        style={[styles.checkboxBase, pending && styles.checkboxChecked]}
                        onPress={() => selectPending()}>
                        {pending && <Ionicons name="checkmark" size={20} color="white" />}
                      </Pressable>
                    </View>

                    <View style={styles.contentSwiitch} >
                      <Text style={styles.textBtn}>Atençao</Text>
                      <Pressable
                        style={[styles.checkboxBase, attention && styles.checkboxChecked]}
                        onPress={() => selectAttention()}>
                        {attention && <Ionicons name="checkmark" size={20} color="white" />}
                      </Pressable>
                    </View>

                    <View style={styles.contentSwiitch} >
                      <Text style={styles.textBtn}>Resolvido</Text>
                      <Pressable
                        style={[styles.checkboxBase, sortedout && styles.checkboxChecked]}
                        onPress={() => selctSortedout()}>
                        {sortedout && <Ionicons name="checkmark" size={20} color="white" />}
                      </Pressable>
                    </View>

                  </View>

                  :

                  <View></View>
              }

              {
                reportList.status_rpt == "atenção" ?

                  <View>

                    <View style={styles.contentSwiitch}>
                      <Text style={styles.textBtn}>Previsto</Text>
                      <Pressable
                        style={[styles.checkboxBase, foreseen && styles.checkboxChecked]}
                        onPress={() => selectForeseen()}>
                        {foreseen && <Ionicons name="checkmark" size={20} color="white" />}
                      </Pressable>
                    </View>

                    <View style={styles.contentSwiitch}>
                      <Text style={styles.textBtn}>Pendente</Text>
                      <Pressable
                        style={[styles.checkboxBase, pending && styles.checkboxChecked]}
                        onPress={() => selectPending()}>
                        {pending && <Ionicons name="checkmark" size={20} color="white" />}
                      </Pressable>
                    </View>

                    <View style={styles.contentSwiitch} >
                      <Text style={styles.textBtn}>Resolvido</Text>
                      <Pressable
                        style={[styles.checkboxBase, sortedout && styles.checkboxChecked]}
                        onPress={() => selctSortedout()}>
                        {sortedout && <Ionicons name="checkmark" size={20} color="white" />}
                      </Pressable>
                    </View>

                  </View>

                  :

                  <View></View>
              }

            </View>

            <LinearGradient
              colors={['#B1B2AB', '#7D7F72']}
              style={styles.styleBtnOne}
            >
              <Pressable onPress={() => updateReport()}>
                <Text style={styles.textAlert}>Salvar</Text>
              </Pressable>
            </LinearGradient>
          </View>

        </ScrollView >
      </View >
    </KeyboardAvoidingView >

  );
}



















