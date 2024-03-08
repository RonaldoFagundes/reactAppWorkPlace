import React, { useState } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Platform,
  Pressable,
  StyleSheet,
  Image,
  Button
} from 'react-native';


import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';



// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import * as FileSystem from 'expo-file-system';
// npx expo install expo-file-system

//import * as DocumentPicker from 'expo-document-picker';

import * as ImagePicker from 'expo-image-picker';



export default function TestGaleria() {



  const [image, setImage] = useState(null);



  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
 

  
 
 
    if (!result.canceled) {
      setImage(result.assets[0].uri);

      console.log(result.uri)
    }
  };
 
  


  
 
/*
  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };

*/







  
  


/*
   const fetchImageData =async (uri) => {

    try {

      const data = await FileSystem.readAsStringAsync('file://' + uri, {
     // const data = await FileSystem.readAsStringAsync( uri, {

        encoding: FileSystem.EncodingType.UTF8,
        encoding: FileSystem.EncodingType.Base64,

      });

      console.log(`Loaded ${data.length} bytes`);

    } catch (error) {

      console.log(`Big error in importing: ${error}`);

    }
  }
*/


return (

  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Button title="Pick an image from camera roll" onPress={pickImage} />

    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

  </View>
);
}
 
  
 


 

  




const styles = StyleSheet.create({

  body: {
    flex: 1
  },

  containerMain: {
    height: '100%',
    with: "100%"
  },

  contentMain: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(25, 126, 162, 0.3)',
    borderRadius: 10,
    height: "100%",
    padding: 20,
    with: "auto"
  },

  containerBtn: {
    alignItems: 'center',
    backgroundColor: 'rgba(6, 12, 127, 0.8)',
    width: 140,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
  },

  textMain: {
    color: 'white',
    //color: '#3AF1A3',
    fontWeight: 'bold',
    fontSize: 24
  },

  textInfo: {
    color: '#3AF1A3',
    fontWeight: 'bold',
    fontSize: 14,
  },

  textAlert: {
    color: '#BBD441',
    fontSize: 14
  },




  resizeModel: {
    resizeMode: 'cover',
    height: 160,
    width: 180,   
  },
 



 





  





 





 


});