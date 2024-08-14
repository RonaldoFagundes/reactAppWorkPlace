import {
  FlatList,
  View,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';


import React, { useContext, useEffect, useState } from 'react';

import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../contexts/auth';



export default function EditReport({ navigation }) {


  const {

    endpointPhp,
    setLoad, load,

    reportNumber,
    idReport,
    setIdReport,

    setReport,
    report , 

    nameConstruction,
    imgConstruction,

    constructions, 

    imgTags

  } = useContext(AuthContext);

  
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    navigation.addListener('focus', () => setLoad(!load))

    listReportById();

    console.log(" id report " + idReport + " report number " + reportNumber);

  }, [load, navigation]);



  const [reportList, setReportList] = useState([]);

  const [dataRel, setDataRel] = useState(
    {
      //number: reportNumber,
      // page: 0,
      date: "",
      title: "",
      desc: "",
      status: "",
      img_one: null,
      img_two: null,
      img_three: null,
      img_four: null,
      id: idReport,
      //id_fk: 0
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
 // const [tagStatus, setTagStatus] = useState(null);


  const selectStatus = (index , item) => {
      setStatusCheckBox(index);    
       if(statusCheckBox !== index && checkBox[index] !== undefined){          
          checkBox[index] = undefined;
       }else{
          checkBox[index] = item.id_tag;
          setStatusCheckBox(index);           
       }
        setRandomCheckBox(Math.random()); 
        
        setDataRel(
          {
            ...dataRel, ['status']: item.status_tag,
          }
        )
       // setTagStatus(item.status_tag);
   }






/*
  const [sortedout, setSortedout] = useState(false);
  const [pending, setPending] = useState(false);
  const [foreseen, setForeseen] = useState(false);
  const [attention, setAttention] = useState(false);
 

  const selctSortedout = () => {
    setSortedout(!sortedout);
    setForeseen(false);
    setAttention(false);
    setPending(false);

    setDataRel(
      {
        ...dataRel, 'status': 'status: resolvido'
      }
    )
  }


  const selectPending = () => {
    setPending(!pending);
    setForeseen(false);
    setAttention(false);
    setSortedout(false);
    setDataRel(
      {
        ...dataRel, 'status': 'status: pendente'
      }
    )
  }


  const selectForeseen = () => {
    setForeseen(!foreseen);
    setPending(false);
    setAttention(false);
    setSortedout(false);

    setDataRel(
      {
        ...dataRel, 'status': 'status: previsto'
      }
    )
  }

  const selectAttention = () => {
    setAttention(!attention);
    setPending(false);
    setForeseen(false);

    setDataRel(
      {
        ...dataRel, 'status': 'status: atenção'
      }
    )
  }

 */









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

          // console.log(" tela editReport by id " + idReport);
          setReportList(result);

          {
            result.map((item) => {

              // console.log("result map  " + item.date_rpt+"  "+item.description_rpt);

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




          /*
          setDataRel(
            {
              ...dataRel, 'number': result.number_rpt,
              dataRel, 'page': result.page_rpt,
              dataRel, 'id': result.id_rpt,
              dataRel, 'id_fk': result.id_fk_cts,
            }
          )
          */

          /*
           setDataRel(
             {
            ...dataRel, 'date': result.date_rpt,
               dataRel, 'title': result.title_rpt,
               dataRel, 'desc': result.description_rpt,
               dataRel, 'status': result.status_rpt,
               dataRel, 'img_one': result.img_one_rpt,
               dataRel, 'img_two': result.img_two_rpt,
               dataRel, 'img_three': result.img_three_rpt,
               dataRel, 'img_four': result.img_four_rpt,             
             }
           )  
           */
          
          } else {
            console.log(result);
          }
          
         })
       .catch((error) => console.error(error));
   }
 
 
 
 
 
 
 
 
   /* 
   const listReportByNumber = async () => {
     // await fetch(endpointPhp+"?action=list_report_by_id", {
     await fetch('http://127.0.0.1/_ehs-api/?action=list_report_by_number', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         reportNumber,
       })
     })
       .then((res) => res.json())
       .then(
         (result) => {
 
           console.log(" tela editReport byid " + idReport + " result  " + result.number_rpt);
 
           setReportList(result);
 
          //
           {result.map((item) => {          
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
           })}
          //



          //
          setDataRel(
            {
              ...dataRel, 'number': result.number_rpt,
              dataRel, 'page': result.page_rpt,
              dataRel, 'id': result.id_rpt,
              dataRel, 'id_fk': result.id_fk_cts,
            }
          )
          //



          //
           setDataRel(
             {
            ...dataRel, 'date': result.date_rpt,
               dataRel, 'title': result.title_rpt,
               dataRel, 'desc': result.description_rpt,
               dataRel, 'status': result.status_rpt,
               dataRel, 'img_one': result.img_one_rpt,
               dataRel, 'img_two': result.img_two_rpt,
               dataRel, 'img_three': result.img_three_rpt,
               dataRel, 'img_four': result.img_four_rpt,             
             }
           )  
          
           console.log(dataRel.title);
           //


        })
      .catch((error) => console.error(error));
  }
  */


  /*
  const updateReport3 = async () => {

    console.log(

      'data  ' + dataRel.date +
      'title  ' + dataRel.title +
      'descrição  ' + dataRel.desc +
      'status  ' + dataRel.status +
      'img one   ' + dataRel.img_one +
      'img_ two  ' + dataRel.img_two +
      'img_ three  ' + dataRel.img_three +
      'img_ four ' + dataRel.img_four +
      'id   ' + dataRel.id

    )

  }
 */


  const updateReport = async () => {
    // await fetch('http://127.0.0.1/_ehs-api/?action=update_report', {
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
            alert("Relatório atualizado com sucesso")
            //console.log(result);
          } else {
            console.log(result);
          }
        })
      .catch(function (error) {
        console.log('erro => ' + error.message);
      });
  }






 
  if(isLoading){
    return(
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
                source={{ uri: 'data:image/png;base64,' +imgConstruction }}              
              />
           
            {/*   
              <Image source={{ uri: imgConstruction }}
                style={styles.imgLogo}
              />
             */}
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

              {/*    <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder={` number_rpt:  ${item.number_rpt}`}
                placeholderTextColor="#000000"
                onChangeText={
                  (valor) => handleInputChange('number_rpt', valor)
                }
              />


              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder={` page ${item.page_rpt}`}
                placeholderTextColor="#000000"
                onChangeText={
                  (valor) => handleInputChange('page', valor)
                }
              />

              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder={`id:  ${item.id_rpt}`}
                placeholderTextColor="#000000"
                onChangeText={
                  (valor) => handleInputChange('id', valor)
                }
              />

              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder={`id_fk: ${item.id_fk_cts}`}
                placeholderTextColor="#000000"
                onChangeText={
                  (valor) => handleInputChange('id_fk', valor)
                }
              />
 


 
  <Image
    style={styles.resizeModel}
    source={{ uri: reportList.img_one_rpt }}  
    // source={{uri: 'data:image/png;base64,' + dataRel.img_one_rpt }} //
  />

  <Image
    style={styles.resizeModel}
    source={{ uri: reportList.img_two_rpt }}  
  //   source={{ uri: 'data:image/png;base64,' + dataRel.img_two_rpt }} //
  />

  <Image
    style={styles.resizeModel}
    source={{ uri: reportList.img_three_rpt }}  
   //  source={{ uri: 'data:image/png;base64,' + dataRel.img_three_rpt }} //
  />
  <Image
    style={styles.resizeModel}
    source={{ uri: reportList.img_four_rpt }}  
    // source={{uri: 'data:image/png;base64,' + dataRel.img_four_rpt }} //
  />
 
  */}



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



              {item.status_rpt != "" ?


             <View style={styles.containerCheckBox}>


              <View style={styles.contentList}>
                    <Text style={styles.textData}>{` Status : ${item.status_rpt}`}</Text>
              </View>


                 <FlatList
                    //showsVerticalScrollIndicator={false}
                    //showsHorizontalScrollIndicator={true}
                   data={imgTags}
                   renderItem={({ index, item  }) =>

                  <View style={styles.contentCheckBox}>  

                   <View>
                      <Text>{item.status_tag}</Text>
                   </View>

                   <Pressable  onPress={() => selectStatus(index , item)}> 
                     {
                      /*   (checkBox[index]=== undefined) */
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

                :
                <View></View>
              }

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



     











     {/* 

       <ScrollView>

          <View style={styles.contentImg} >           
            <Image
              style={styles.resizeModel}
              source={{ uri: reportList.img_one_rpt }}  
              // source={{uri: 'data:image/png;base64,' + dataRel.img_one_rpt }} //
            />

            <Image
              style={styles.resizeModel}
              source={{ uri: reportList.img_two_rpt }}  
            //   source={{ uri: 'data:image/png;base64,' + dataRel.img_two_rpt }} //
            />           
          </View>

          <View style={styles.contentImg} >
            <Image
              style={styles.resizeModel}
              source={{ uri: reportList.img_three_rpt }}  
             //  source={{ uri: 'data:image/png;base64,' + dataRel.img_three_rpt }} //
            />
            <Image
              style={styles.resizeModel}
              source={{ uri: reportList.img_four_rpt }}  
              // source={{uri: 'data:image/png;base64,' + dataRel.img_four_rpt }} //
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

          </View>

        </ScrollView >

 */}









              {/* 
                <View style={styles.containerSwiitch}>

                  <View style={styles.inputSwiitch}>
                    <Text style={styles.textSwiitch}>{` ${item.status_rpt}`}</Text>
                  </View>

                  <View style={styles.contentSwiitch}>
                    <Text style={styles.textBtn}>Pendente</Text>
                    <Pressable
                      style={[styles.checkboxBase, pending && styles.checkboxChecked]}
                      onPress={() => selectPending()}>
                      {pending && <Ionicons name="checkmark" size={20} color="white" />}
                    </Pressable>
                  </View>

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
                */}











