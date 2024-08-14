
import React, { useState, useEffect, useContext, useRef } from 'react';

import {
    View,
    Text,
    Pressable,
    Platform,
    Image,
    Modal,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';

import { AuthContext } from '../../contexts/auth';

import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';









export default function CadReportPageThree({ navigation }) {



    const {
        endpointPhp,

        setLoad, load,

        nameConstruction,

        imgConstruction,


        setDataRel,
        dataRel

    } = useContext(AuthContext);




    const [pending, setPending] = useState(false);
    const [foreseen, setForeseen] = useState(false);
    const [attention, setAttention] = useState(false);





    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load));
    }, [load, navigation]);






    const handleInputChange = (atribute, value) => {
        setDataRel(
            {
                ...dataRel, [atribute]: value
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




    const pickImage = async () => {

           if(dataRel.img_one==""){
               atribute = "img_one"
            }else if (dataRel.img_two==""){
               atribute = "img_two"
            } 




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
                    
           setDataRel(
            {
                ...dataRel, [atribute]: result.assets[0].uri, 
            }
          )           
        }


     };






     const saveReport = () => {
        console.log(
            dataRel.title + " " +
            dataRel.description + " " +
            dataRel.field_one + " " +
            dataRel.field_two + " " +
            dataRel.field_three + " " +
            dataRel.field_four + " " +
            dataRel.status + " " +        
            dataRel.img_one+" "+
            dataRel.img_two+" "+
            dataRel.img_three+" "+
            dataRel.img_four+" "+
            dataRel.img_five+" "+
            dataRel.img_six+" "
        )
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
                    <Text style={styles.textMain}>{` Tela cadastro de relatorio 3`}</Text>
                </View>



                <View style={styles.containerHeader}>

                    <View style={styles.userHeader}>

                        <View>
                            <Image
                                style={styles.imgLogo}
                                source={{ uri: 'data:image/png;base64,' + imgConstruction }}
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


                </View>



             <ScrollView>

                <View style={styles.contentMain}>


                     <View style={styles.fieldMain}>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Titulo:"
                            placeholderTextColor="#000000"
                            onChangeText={
                                (valor) => handleInputChange('title', valor)
                            }
                        />
                     </View>



                      <View style={styles.fieldDesc}>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Descrição:"
                            placeholderTextColor="#000000"
                            rows={4}
                            multiline={true}
                            onChangeText={
                                (valor) => handleInputChange('description', valor)
                            }
                        />
                       </View>



                       <View style={styles.fieldMain}>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Campo 1:"
                            placeholderTextColor="#000000"
                            onChangeText={
                                (valor) => handleInputChange('field_one', valor)
                            }
                        />
                       </View>


                       <View style={styles.fieldDesc}>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Campo 2:"
                            placeholderTextColor="#000000"
                            rows={4}
                            multiline={true}
                            onChangeText={
                                (valor) => handleInputChange('field_two', valor)
                            }
                        />
                        </View>






                        <View style={styles.containerSwiitch}>

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

                        </View>





                      <LinearGradient
                          colors={['#B1B2AB', '#7D7F72']}
                          style={styles.styleBtnImg}
                         >
                         <Pressable onPress={() => pickImage()}>
                             <FontAwesome name='image' size={20} color={"#fff"} />
                         </Pressable>
                      </LinearGradient>



                    <View style={styles.containerImg}>                   
                     

                        {dataRel.img_one && <Image source={{ uri: dataRel.img_one }} style={styles.contentImg} />}


                        {dataRel.img_two && <Image source={{ uri: dataRel.img_two }} style={styles.contentImg} />}

                    </View>


                   <View style={styles.containerImg}>                   
                     

                       {dataRel.img_three && <Image source={{ uri: dataRel.img_three }} style={styles.contentImg} />}


                       {dataRel.img_three && <Image source={{ uri: dataRel.img_three }} style={styles.contentImg} />}

                  </View>






                         <LinearGradient
                            colors={['#B1B2AB', '#7D7F72']}
                            style={styles.styleBtnOne}
                        >
                            <Pressable onPress={() => {navigation.navigate("CadReportPageTwo")}}>
                                <Text style={styles.textBtn}>Voltar</Text>
                            </Pressable>
                        </LinearGradient>



                        <LinearGradient
                            colors={['#B1B2AB', '#7D7F72']}
                            style={styles.styleBtnOne}
                        >
                            <Pressable onPress={() => saveReport()}>
                                <Text style={styles.textBtn}>Finalizar</Text>
                            </Pressable>
                        </LinearGradient>

                     

                    </View>

                   </ScrollView>











                {/* 
                        <View style={styles.containerData}>

                            <TextInput
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Campo 3:"
                                placeholderTextColor="#000000"
                                onChangeText={
                                    (valor) => handleInputChange('field_three', valor)
                                }
                            />

                            <TextInput
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Campo 4:"
                                placeholderTextColor="#000000"
                                rows={4}
                                multiline={true}
                                onChangeText={
                                    (valor) => handleInputChange('field_four', valor)
                                }
                            />


                          <LinearGradient
                            colors={['#B1B2AB', '#7D7F72']}
                            style={styles.styleBtnOne}
                            >
                            <Pressable onPress={() => saveReport()}>
                                <Text style={styles.textBtn}>salvar</Text>
                            </Pressable>
                         </LinearGradient>


                         <LinearGradient
                            colors={['#B1B2AB', '#7D7F72']}
                            style={styles.styleBtnOne}
                        >
                            <Pressable onPress={() => saveReport()}>
                                <Text style={styles.textBtn}>salvar</Text>
                            </Pressable>
                         </LinearGradient>

                        </View>

                   */}













            </LinearGradient>

        </KeyboardAvoidingView >

    )
}


