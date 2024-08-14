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


import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import * as Print from 'expo-print';




export default function Report({ navigation }) {


  const {
    endpointPhp,
    user,
    setLoad, load,
    setIdReport,
    idConstruction,
    nameConstruction,
    imgConstruction,
  } = useContext(AuthContext);


  const [reportList, setReportList] = useState([]);

 
  const [selectedPrinter , setSelectedPrinter] = useState();



  useEffect(() => {
    navigation.addListener('focus', () => setLoad(!load));
    listReport();
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
          setReportList(result)
           console.log(result)
        })
      .catch((error) => console.error(error));
  }

 

  const selectReport = (id) => {
    setIdReport(id);
    navigation.navigate("SelectReport");
  }








  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
      await Print.printAsync({
       html:createDynamicData(),
       printerUrl: selectedPrinter?.url, // iOS only
     });
    
   };



  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
     const{uri} = await Print.printToFileAsync({
        html
     });
       await shareAsync(uri,{UTI:'.pdf',mimeType:'application/pdf'});
  };




  const selectPrinter = async () => {
      const printer = await Print.selectPrinterAsync();
      setSelectedPrinter(printer);
  };











   /*
  const print = async () => {   
    createDynamicData();
    const file = await printToFileAsync({
      html: html,
      base64: true
    });
    await shareAsync(file.uri);
  };
  */





  
  
 // const array = new Array();
  const createDynamicData = () => {

     var reportData = '';
     for (let i in reportList) {
      const item = reportList[i];

   /*    
     for(let i in array){
     const item = array[i];
   */

      reportData = reportData + 
          `
            <div>
              
              <p>${item.date_rpt}</p>

              <p>${item.title_rpt}</p>

              <p>${item.description_rpt}</p>

              <p>${item.status_rpt}</p>              

            </div>           
          `
      }

    const html = 
     `
    <!DOCTYPE html> 
    <html>

     <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
     </head>
       
      <body>

        <section>
           <div><img src="data:image/png;base64,${imgConstruction}"/></div>

           <div>${reportData}</div>
        </section>

      </body>

    </html>        
     `;
    return html;
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
          <Text style={styles.textMain}>{` Tela Edição de relatório `}</Text>
        </View>


      <View style={styles.containerHeader}>




          <View style={styles.userHeader}>

            <View>
              <Image
                style={styles.imgLogo}
                source={{ uri: 'data:image/png;base64,' +imgConstruction }}              
              />
            </View>

            <Text style={styles.textInfo}>{`${nameConstruction}`}</Text>

          </View>



          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={() => { navigation.navigate("Home") }}>
              <Text style={styles.textAlert}>Home</Text>
            </Pressable>
          </LinearGradient>




          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={() => { navigation.navigate("CadReport") }}>
              <Text style={styles.textAlert}>Criar novo relatório</Text>
            </Pressable>
          </LinearGradient>





        </View>



    
         





       </LinearGradient>

    </KeyboardAvoidingView >
  );
}


















