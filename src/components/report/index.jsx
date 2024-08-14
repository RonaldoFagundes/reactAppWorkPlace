import {
  FlatList,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';


import React, { useContext, useEffect, useState } from 'react';

import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../contexts/auth';



export default function Report({ navigation }) {


  const {
    endpointPhp,

    setLoad,
    load,

    setIdReport,
    setReportNumber,
    setReportStatus,

   // reportStatus,

    //setReport,

    idConstruction,
    nameConstruction,
    imgConstruction,

    //setConstructions,

  //  tags,

    imgTags,

    setImgTagsSelected, 
    imgTagsSelected,

    


  } = useContext(AuthContext);


  const [reportList, setReportList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);





 // const [imgStatus, setimgStatus] = useState([]);
  




  useEffect(() => {
    navigation.addListener('focus', () => setLoad(!load));
    listReport();

  //  checkStatus();

  }, [load, navigation]);





  const listReport = async () => {
    await fetch(endpointPhp + "?action=list_report", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idConstruction
      })
    })
      .then((res) => res.json())
      .then(
        (result) => {

          if (result !== "not found") {

            /*
            {
              result.map(              
                (item ) =>                  
                   checkStatus(item.status_rpt)                  
               )
            }
            */

            setIsLoading(false);
            setReportList(result);

           // console.log(result);


          } else {
            alert(result);
            alert("favor verificar sua conexão com a internet");
          }

        })
      .catch((error) => console.error(error));
  }


  



  const selectReport = (id, number, status) => {
    setIdReport(id);
    setReportNumber(number);
    setReportStatus(status);
    navigation.navigate("SelectReport");
  //  console.log(" id " + id + "  number " + number + " status report " + status);
  }








/*
  const checkStatus = (value) => {
   // console.log(imgTags.length);
   // item.status_rpt === `status: ${imgTags[0].status_tag.toLowerCase()}`
  for (i = 0; i < imgTags.length; i++) {
    if(`status: ${imgTags[i].status_tag.toLowerCase()}` === value ){
      setimgStatus(imgTags[i].img_tag);

      //
      console.log(        
        " encontrou "+imgTags[i].status_tag+" i "+i              
       )
      //
   }   

     //
    console.log(imgTags[i]);
    if(imgTags[i].status_tag === "ATENÇÃO" ){
        console.log(        
          " encontrou "+imgTags[i].status_tag+" i "+i              
         )
     }   
      console.log(
        
        "  img tags status "+imgTags[i].status_tag+" i "+i
            
       )
     //

    } 
 
  console.log(
      "  img tags status [1] "+imgTags[1].status_tag+
      " =>  img tags status [2] "+imgTags[2].status_tag      
  )
 
  for(var i =0; i < imgTags.size ; i++ ){
  
    console.log(
      " img tags id "+imgTags[i].id_tag+" img tags status "+imgTags[i].status_tag+" img tags desc "+imgTags[i].desc_tag
   )
  }


 // console.log(" tags id "+tags.id_sta+" name  "+tags.name)

  console.log(
    " img tags id "+imgTags[0].id_tag+" img tags status "+imgTags[0].status_tag+" img tags desc "+imgTags[0].desc_tag
 )
  console.log(   
    " => img tags id "+imgTags[1].id_tag+" img tags status "+imgTags[1].status_tag+" img tags desc "+imgTags[1].desc_tag
    )
  console.log(   
    " => img tags id "+imgTags[2].id_tag+" img tags status "+imgTags[2].status_tag+" img tags desc "+imgTags[2].desc_tag
   )
}


*/












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

          <Text style={styles.textMain}>{` Tela Relatórios `}</Text>

          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={() => { navigation.navigate("CadReport") }}>
              <Text style={styles.textAlert}>Novo Relatório</Text>
            </Pressable>
          </LinearGradient>
          
        </View>

         

        <FlatList

          data={reportList}

          renderItem={({ item }) =>

            <View style={styles.dataList}>

              {
                item.img_one_rpt != null ?


                  <View style={styles.contentImg}>
               

                    <Image source={{ uri: item.img_one_rpt }}
                      style={styles.resizeModel}
                    />
                    <Image source={{ uri: item.img_two_rpt }}
                      style={styles.resizeModel}
                    />
                 
                
                 
               {/* 
                 <Image                            
                  source={{ uri: `data:image/png;base64,${item.img_one_rpt}` }}
                  style={styles.resizeModel}   
                  />

                  <Image                 
                  source={{ uri: 'data:image/png;base64,' + item.img_two_rpt }}
                  style={styles.resizeModel}
                 />
               */}  


                </View>


                  :
                  <View></View>
              }

              {
                item.img_three_rpt != null ?
                  <View style={styles.contentImg}>
                    <Image source={{ uri: item.img_three_rpt }}
                      style={styles.resizeModel}
                    />
                    <Image source={{ uri: item.img_four_rpt }}
                      style={styles.resizeModel}
                    />
                  </View>
                  :
                  <View></View>
              }


              <View style={styles.contentData} >


              <Text style={styles.textList}>
                  {` Nº : ${item.number_rpt}`}
                </Text>

                <Text style={styles.textList}>
                  {` Data : ${item.date_rpt}`}
                </Text>

                <Text style={styles.textList}>
                  {` Titulo :  ${item.title_rpt}`}
                </Text>

                <Text style={styles.textList}>
                  {` Descrição : ${item.description_rpt}`}
                </Text>


             <View style={styles.contentStatus}>

                  <Text style={styles.textList}>
                    {` Status :  ${item.status_rpt}`}
                  </Text>                             

                {              
                //item.status_rpt === `status: ${imgTags[0].status_tag.toLowerCase()}`
                item.status_rpt === imgTags[0].status_tag
                 ?   
                 <Image
                   style={styles.imgLogo}
                  source={{ uri: 'data:image/png;base64,' + imgTags[0].img_tag }}                        
                 />
                 :
                // item.status_rpt === `status: ${imgTags[1].status_tag.toLowerCase()}`
                item.status_rpt === imgTags[1].status_tag
                 ?                 
                 <Image
                   style={styles.imgLogo}
                  source={{ uri: 'data:image/png;base64,' + imgTags[1].img_tag }}                        
                 />
                 :
                // item.status_rpt === `status: ${imgTags[2].status_tag.toLowerCase()}`
                item.status_rpt === imgTags[2].status_tag
                 ?                 
                 <Image
                   style={styles.imgLogo}
                  source={{ uri: 'data:image/png;base64,' + imgTags[2].img_tag }}                        
                 />
                 :
               // item.status_rpt === `status: ${imgTags[3].status_tag.toLowerCase()}`
                 item.status_rpt === imgTags[3].status_tag
                 ?                 
                 <Image
                   style={styles.imgLogo}
                  source={{ uri: 'data:image/png;base64,' + imgTags[3].img_tag }}                        
                 />
                :
                <View></View>
                }
          


             
             </View>




             </View>


              <LinearGradient
                colors={['#B1B2AB', '#7D7F72']}
                style={styles.styleBtnOne}
              >
                <Pressable
                  onPress={() => selectReport(item.id_rpt, item.number_rpt, item.status_rpt)}
                >
                  <Text style={styles.textAlert}>Selecione</Text>
                </Pressable>
              </LinearGradient>

            </View>

          }
        >

        </FlatList>

        <View style={{ height: 10 }}></View>

      </View>
    </KeyboardAvoidingView >

  );
}


















