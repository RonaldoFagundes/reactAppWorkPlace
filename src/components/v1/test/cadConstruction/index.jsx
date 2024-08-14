import React, { useContext, useEffect, useState } from 'react';


import {
   View,
   Text,
   TextInput,
   Pressable,
   KeyboardAvoidingView,
   Platform,
   Image
} from 'react-native';


import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesome } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/auth';

import * as ImagePicker from 'expo-image-picker';






export default function CadConstruction() {




   //const { endpointPhp, setLoad, load } = useContext(AuthContext);

   const endpointPhp = "https://ddbabb23-115a-4fbc-ac05-d7c225982170-00-xbc9ar2bh5gb.janeway.replit.dev/";





   const [construction, setConstruction] = useState({
      img: null,
      base64:null,
      name: "",
      enterprise: "",
      address: "",
   });




   
  


   const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
         base64:true,
        // includeBase64: true
      });

      
      if (!result.canceled) {

        
         setConstruction(
            {
               ...construction, 'img': result.assets[0].uri,
                  construction, 'base64': result.assets[0].base64,
            }
         )
        
         
      }
   };






   const handleInputChange = (atribute, value) => {

      setConstruction(
         {
            ...construction, [atribute]: value
         }
      )
   }





   /*
   useEffect(() => {

      navigation.addListener('focus', () => setLoad(!load))

   }, [load, navigation]);
   */


   


   const insertConstruction = async () => {

      /*
      console.log(
         "img : " + construction.img +
         "name: " + construction.name +
         "enterprise : " + construction.enterprise +
         "address : " + construction.address
      )
     */

      await fetch(endpointPhp + "?action=cad_contruction", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },

         body: JSON.stringify({
            construction
         })

      })
         .then((res) => res.json())

         .then(
            (result) => {

               if (result != "Construtora não cadastrado!!!") {

                  navigation.navigate("Home");
                  cleanInput();
                  console.log(result);
               } else {

                  console.log(result);
               }

            });

   }




   /*    
   // img: `data:image/png;base64,${construction.img}`      

         navigation.navigate("Home");   
   */






   const cleanInput = () => {

      setConstruction(
         {
            ...construction, ['name']: "",
            construction, ['address']: "",
            construction, ['number']: "",
            construction, ['details']: "",
            construction, ['responsable']: "",
            construction, ['img']: null,
         }
      )
   }







   return (

      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
      >


         <LinearGradient
            colors={
               [
                  'rgba(255, 249, 145, 0.07)',
                  'rgba(249, 225, 175 ,0.09)',
               ]
            }
            style={styles.containerMain}
         >



            <View style={styles.containerHeader}>

               <Text style={styles.textMain}>{` Tela Cadastro de Obras `}</Text>


               <LinearGradient
                  colors={['#B1B2AB', '#7D7F72']}
                  style={styles.styleBtnOne}
               >

                  <Pressable
                      onPress={() => { navigation.navigate("Home") }}                     
                  >
                     <Text style={styles.textInfo}>Voltar</Text>
                  </Pressable>

               </LinearGradient>
            </View>


            <View style={styles.contentMain}>


               <LinearGradient
                  colors={['#B1B2AB', '#7D7F72']}
                  style={styles.styleBtnImg}
               >


                  <Pressable onPress={() => pickImage()}>
                     <FontAwesome name='image' size={20} color={"#fff"} />
                  </Pressable>


               </LinearGradient>





               {construction.img && <Image source={{ uri: construction.img }} style={styles.containerImg} />}


               <TextInput style={styles.input}
                  placeholder=" digite o nome da contrutora"
                  placeholderTextColor="#cc0000"
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('name', valor)
                  }
                  value={construction.name}
               />

               <TextInput style={styles.input}
                  placeholder=" digite o nome do empreendimento"
                  placeholderTextColor="#cc0000"
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('enterprise', valor)
                  }
                  value={construction.enterprise}
               />

               <TextInput style={styles.input}
                  placeholder="endereço"
                  placeholderTextColor="#cc0000"
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('address', valor)
                  }
                  value={construction.address}
               />

               {
                  construction.name == "" && construction.enterprise == "" &&
                     construction.address == ""
                     ?

                     <LinearGradient
                        colors={['#B1B2AB', '#7D7F72']}
                        style={styles.styleBtnOne}
                     >

                        <Pressable disabled={true}>
                           <Text style={styles.textInfo}>Cadastro</Text>
                        </Pressable>


                     </LinearGradient>



                     :




                     <LinearGradient
                        colors={['#7D7F72', '#B1B2AB']}
                        style={styles.styleBtnOne}
                     >

                        <Pressable onPress={() => insertConstruction()}                  >
                           <Text style={styles.textBtn}>Cadastrar</Text>
                        </Pressable>



                     </LinearGradient>



               }
            </View>


                      

         </LinearGradient>





         <View style={{ height: 10 }}></View>
      </KeyboardAvoidingView>
   )
};




