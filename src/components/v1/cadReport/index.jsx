
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





export default function CadReport({ navigation }) {



    const {
        endpointPhp,
    
        setLoad, load,   
            
        nameConstruction,
    
        imgConstruction,    
      
      } = useContext(AuthContext);

      


    const [modalForm, setModalForm] = useState(false);


    // const [count, setCount] = useState(0);


    const [dataRel, setDataRel] = useState(
        {
            title:"",
            description:"",
            field_one: "",
            field_two: "",
            field_three: "",
            field_four: "",         
            status: "",
            img_one:"",
            img_two:"",
            img_three:"",
            img_four:"",
            img_five:"",
            img_six:"",

        }
    );






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






    const saveReport = async () => {

        console.log(dataRel);
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
          <Text style={styles.textMain}>{` Tela cadastro de relatorio `}</Text>
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


       </View>




          <View style={styles.contentMain}>             
                 

                 <View style={styles.containerData}>

                      <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Campo 1:"
                            placeholderTextColor="#000000"
                            onChangeText={
                                (valor) => handleInputChange('field_one', valor)
                            }
                        />

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
                            style={styles.styleBtnOne}
                        >
                            <Pressable onPress={() => setModalForm(true)}>
                                <Text style={styles.textBtn}>proxima pagina</Text>
                            </Pressable>
                        </LinearGradient>                     

                    </View>

                </View>







                <Modal
                    animationType='fade'
                    visible={modalForm}
                >

                    <View style={styles.modalContent} >


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





                        <LinearGradient
                            colors={['#B1B2AB', '#7D7F72']}
                            style={styles.styleBtnOne}
                        >
                            <Pressable onPress={() => setModalForm(false)}>
                                <Text style={styles.textBtn}>fechar</Text>
                            </Pressable>
                        </LinearGradient>



                    </View>

                </Modal>


            </LinearGradient>

        </KeyboardAvoidingView >

    )
}


