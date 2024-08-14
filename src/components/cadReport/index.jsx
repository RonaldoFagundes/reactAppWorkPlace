
import React, { useState, useEffect, useContext } from 'react';

import {
    FlatList,
    View,
    Text,
    Pressable,
    Platform,
    Image,
    Modal,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Switch

} from 'react-native';

import { AuthContext } from '../../contexts/auth';

import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



import * as ImagePicker from 'expo-image-picker';



export default function CadReport({ navigation }) {


    const {
        endpointPhp,
        setLoad,
        load,

        idConstruction,
        nameConstruction,
        imgConstruction,

      //  constructions,

        reportNumber,

      //  report,


      //  tags,

        imgTags


    } = useContext(AuthContext);


    // const [isLoading, setIsLoading] = useState(true);

    const [modalForm, setModalForm] = useState(false);



    const [dataRel, setDataRel] = useState(
        {
            number_rpt: reportNumber,
            page: 0,
            date: "",
            title: "",
            desc: "",
            status: "",

            img_one: null,
            img_two: null,
            img_three: null,
            img_four: null,

            base64_one: null,
            base64_two: null,
            base64_three: null,
            base64_four: null,


            idConst: idConstruction,
        }
    );




    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load));
        console.log(" report number " + reportNumber);
      //  setReportNumber();
    }, [load, navigation]);




    const handleInputChange = (atribute, value) => {
        setDataRel(
            {
                ...dataRel, [atribute]: value
            }
        )
    }



    const [checkBox, setCheckBox] = useState([]);
    const [randomCheckBox, setRandomCheckBox] = useState(null);
    const [statusCheckBox, setStatusCheckBox] = useState(null);
    const [tagStatus, setTagStatus] = useState(null);



    const selectStatus = (index , item) => {
        setStatusCheckBox(index);    
         if(statusCheckBox !== index && checkBox[index] !== undefined){          
            checkBox[index] = undefined;
         }else{
            checkBox[index] = item.id_tag;
            setStatusCheckBox(index);           
         }
          setRandomCheckBox(Math.random());      
         // setTagStatus(item.status_tag);

          setDataRel(
            {
              ...dataRel, ['status']: item.status_tag,
            }
          )
     }

   
  /*
    const [pending, setPending] = useState(false);
    const [foreseen, setForeseen] = useState(false);
    const [attention, setAttention] = useState(false);
  */



  /*
   const selectPending = (value) => {
        setPending(!pending);
        setForeseen(!foreseen);
        setAttention(!attention);
        setDataRel(
            {
                ...dataRel, 'status': `status: ${value}`
            }
        )
    }
   */


    /*
    const selectForeseen = () => {
        setForeseen(!foreseen);
        setPending(false);
        setAttention(false);
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






    const pickImage = async () => {
     

        let img;
        let base64;

        if (dataRel.img_one == null) {
            img = "img_one"
            base64 = "base64_one"         

        } else if (dataRel.img_two == null) {

            img = "img_two"
            base64 = "base64_two"           

        } else if (dataRel.img_three == null) {

            img = "img_three"
            base64 = "base64_three"          

        } else if (dataRel.img_four == null) {

            img = "img_four"
            base64 = "base64_four"
           
        }

        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
            // includeBase64: true
        });

        if (!result.canceled) {

            setDataRel(
                {
                    ...dataRel, [img]: result.assets[0].uri,
                       dataRel, [base64]: result.assets[0].base64,
                }
            )
         
       }

    };


    const cancel = () => {
        setModalForm(false);
        dataRel.date = "",
            dataRel.title = "",
            dataRel.desc = "",
            dataRel.status = ""
    }


     /*
    const setReportNumber = () => {

        if (reportNumber !== "") {
            setDataRel(
                {
                    ...dataRel, 'number_rpt': reportNumber,
                }
            )
        }
    }
    */


    const finish = () => {
        dataRel.page = dataRel.page + 1;
        saveReport();
        navigation.navigate("Report");
        reset();
        console.log(" relatório nº " + dataRel.number_rpt + " cadastro da " + dataRel.page + " pagina ");
    }


    const addPage = () => {
        dataRel.page = dataRel.page + 1;
        saveReport();
        setModalForm(true);
        reset();
        console.log(" relatório nº " + dataRel.number_rpt + " cadastro da " + dataRel.page + " pagina ");
    }


    const removeImage = (atribute) => {
        setDataRel(
            {
                ...dataRel, [atribute]: null
            }
        )
    }


    const reset = () => {

        setDataRel(
            {
                ...dataRel, 'date': "",
                dataRel, 'title': "",
                dataRel, 'desc': "",
                dataRel, 'status': "",
                dataRel, 'img_one': null,
                dataRel, 'img_two': null,
                dataRel, 'img_three': null,
                dataRel, 'img_four': null,
            }
        )
    }



    const saveReport = async () => {
        await fetch(endpointPhp + "?action=cad_report", {
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
                  alert(" pagina salva com sucesso!");
                  console.log(result);
                })
            .catch(function (error) {
                console.log('erro' + error.message);
            });
    }




    /*
      if(isLoading){
          return(
           <View style={styles.containerLoading}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text>Loading...</Text>
           </View>
          )
     }  
    */




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
                    <Text style={styles.textMain}>{` Tela cadastro de relatório `}</Text>
                </View>


                <View style={styles.containerHeader}>

                    <View style={styles.contentHeader}>

                        <View>
                            <Image
                                style={styles.imgLogo}
                                source={{ uri: 'data:image/png;base64,' + imgConstruction }}
                            />
                        </View>

                        <Text style={styles.textMain}>{`${nameConstruction}`}</Text>

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

                    {
                        dataRel.title == ""

                            ?

                            <View style={styles.boxWith} >

                                <LinearGradient
                                    colors={['#B1B2AB', '#7D7F72']}
                                    style={styles.styleBtnOne}
                                >
                                    <Pressable onPress={() => setModalForm(true)}>
                                        <Text style={styles.textAlert}>{`criar relatório`}</Text>
                                    </Pressable>
                                </LinearGradient>

                            </View>
                            :

                            <View style={styles.boxWithOut} >

                                <View style={styles.containerImg} >

                                    {
                                        dataRel.img_one == null ||
                                            dataRel.img_two == null ||
                                            dataRel.img_three == null ||
                                            dataRel.img_four == null
                                            ?
                                            <LinearGradient
                                                colors={['#B1B2AB', '#7D7F72']}
                                                style={styles.styleBtnImg}
                                            >
                                                <Pressable onPress={() => pickImage()}>
                                                    <FontAwesome name='image' size={40} color={"#fff"} />
                                                </Pressable>
                                                <Text style={styles.textBtn}>Adcionar Imagem</Text>
                                            </LinearGradient>

                                            :

                                            <View>
                                                <Text style={styles.textInfo}>limite de imagems excedido</Text>
                                            </View>
                                    }


                                    <View style={styles.contentImg}>
                                        {
                                            dataRel.img_one &&
                                            <View style={styles.boxImg}>
                                                <Image source={{ uri: dataRel.img_one }} style={styles.resizeModel} />

                                                <Pressable onPress={() => removeImage('img_one')}>
                                                    <FontAwesome name='remove' size={12} color={"#B8AAA7"} />
                                                </Pressable>
                                            </View>
                                        }


                                        {
                                            dataRel.img_two &&
                                            <View style={styles.boxImg}>
                                                <Image source={{ uri: dataRel.img_two }} style={styles.resizeModel} />
                                                <Pressable onPress={() => removeImage('img_two')}>
                                                    <FontAwesome name='remove' size={12} color={"#B8AAA7"} />
                                                </Pressable>
                                            </View>
                                        }
                                    </View>

                                    <View style={styles.contentImg}>
                                        {
                                            dataRel.img_three &&
                                            <View style={styles.boxImg}>
                                                <Image source={{ uri: dataRel.img_three }} style={styles.resizeModel} />
                                                <Pressable onPress={() => removeImage('img_three')}>
                                                    <FontAwesome name='remove' size={12} color={"#B8AAA7"} />
                                                </Pressable>
                                            </View>
                                        }

                                        {dataRel.img_four &&
                                            <View style={styles.boxImg}>
                                                <Image source={{ uri: dataRel.img_four }} style={styles.resizeModel} />
                                                <Pressable onPress={() => removeImage('img_four')}>
                                                    <FontAwesome name='remove' size={12} color={"#B8AAA7"} />
                                                </Pressable>
                                            </View>
                                        }
                                    </View>
                                </View>
                                <View style={styles.cardRel}>
                                    {dataRel.page == 0 ?
                                        <Text style={styles.textData}>{` Data ${dataRel.date} `}</Text>
                                        :
                                        <View></View>
                                    }
                                    <Text style={styles.textData}>{`  ${dataRel.title} `}</Text>
                                    <Text style={styles.textData}>{`  ${dataRel.desc} `}</Text>
                                    {dataRel.page == 0 ?
                                        <Text style={styles.textData}>{` ${dataRel.status} `}</Text>
                                        :
                                        <View></View>
                                    }
                                </View>
                                <View style={styles.containerBtn}>

                                    <LinearGradient
                                        colors={['#B1B2AB', '#7D7F72']}
                                        style={styles.styleBtnOne}
                                    >
                                        <Pressable onPress={() => finish()}>
                                            <Text style={styles.textBtn}>Finalizar</Text>
                                        </Pressable>
                                    </LinearGradient>

                                    <LinearGradient
                                        colors={['#B1B2AB', '#7D7F72']}
                                        style={styles.styleBtnOne}
                                    >
                                        <Pressable onPress={() => addPage()}>
                                            <Text style={styles.textBtn}>Adcionar Pagina</Text>
                                        </Pressable>
                                    </LinearGradient>

                                </View>
                            </View>
                    }
                </View>

                <Modal
                    animationType='fade'
                    visible={modalForm}
                >
                    <View style={styles.contentMain}>
                        <View><Text style={styles.textMain}>Criar Relatório</Text></View>
                        {
                            dataRel.page == 0 ?
                                <View style={styles.fieldMain}>

                                    <TextInput
                                        style={styles.input}
                                        underlineColorAndroid="transparent"
                                        placeholder="Data:"
                                        placeholderTextColor="#000000"
                                        onChangeText={
                                            (valor) => handleInputChange('date', valor)
                                        }
                                    />
                                </View>
                                :
                                <View></View>
                        }

                        <View style={styles.fieldMain}>
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                /* placeholder="Titulo:" */
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
                                /* placeholder="Descrição:" */
                                placeholderTextColor="#000000"
                                rows={4}
                                multiline={true}
                                onChangeText={
                                    (valor) => handleInputChange('desc', valor)
                                }
                            />
                        </View>

               {
                dataRel.page  === 0 ?
                      
                      
               <View style={styles.containerCheckBox}>

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

               {/*                  
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
                    */}

                       <View>
                          <LinearGradient
                            colors={['#B1B2AB', '#7D7F72']}
                             style={styles.styleBtnOne}
                           >
                         
                            <Pressable onPress={() => setModalForm(false)}>
                               <Text style={styles.textBtn}>proximo</Text>
                            </Pressable>                             

                            </LinearGradient>

                            <LinearGradient
                                colors={['#B1B2AB', '#7D7F72']}
                                style={styles.styleBtnOne}
                            >
                                <Pressable onPress={() => cancel()}>
                                    <Text style={styles.textBtn}>cancelar</Text>
                                </Pressable>
                            </LinearGradient>

                        </View>

                    </View>

                </Modal>

            </LinearGradient>

        </KeyboardAvoidingView >
    )
}


