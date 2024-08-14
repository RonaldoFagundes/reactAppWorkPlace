
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

import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../../contexts/auth';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';





export default function CadReport({ navigation }) {





    const {
        endpointPhp,
        idConstruction,
        setLoad, load,
        day
    } = useContext(AuthContext);






    // const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [modalCamera, setModalCamera] = useState(false);



    const [modalForm, setModalForm] = useState(false);


    const [count, setCount] = useState(0);


    const [dataRel, setDataRel] = useState(
        {
            date: day,
            title: "",
            desc: "",
            status: "",
            img1: null,
            img2: null,
            img3: null,
            img4: null,
            id: idConstruction,
        }
    );




    const [pending, setPending] = useState(false);
    const [foreseen, setForeseen] = useState(false);
    const [attention, setAttention] = useState(false);




    useEffect(() => {


        setModalForm(true);
        /*
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
        */

        navigation.addListener('focus', () => setLoad(!load))


    }, [load, navigation]);

    /*
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    */







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



    const takePicture = async () => {

       // setCount(count + 1);
    

        if (camera) {

            const data = await camera.takePictureAsync(null);

               if(dataRel.img1 =! null ){
                 

                setDataRel(
                    {
                        ...dataRel, ['img1']: data.uri
                    }
                )


               }else if (dataRel.img2 =! null ){
                 
                setDataRel(
                    {
                        ...dataRel, ['img2']: data.uri
                    }
                )


               }else if(dataRel.img3 =! null ){
                 
                setDataRel(
                    {
                        ...dataRel, ['img3']: data.uri
                    }
                )

               }else if(dataRel.img4 =! null ){
                 
                setDataRel(
                    {
                        ...dataRel, ['img4']: data.uri
                    }
                )

               }


           /*  setDataRel(
                {
                    ...dataRel, [`img${count}`]: data.uri
                }
            ) */



        }
        setModalCamera(false);
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

                    if (result == "Relatorio cadastrado com sucesso") {
                        setModalForm(false);
                        resetReport();
                        navigation.navigate("Report");
                        alert(result);
                        // console.log(result);
                    } else {
                        alert(result);
                        //  console.log(result);
                    }

                })
            .catch(function (error) {
                console.log('erro' + error.message);
            });
    }





    const resetReport = () => {

        setDataRel(
            {
                ...dataRel, 'date': '',
                dataRel, 'title': '',
                dataRel, 'desc': '',
                dataRel, 'status': '',
                dataRel, 'img1': null,
                dataRel, 'img2': null,
                dataRel, 'img3': null,
                dataRel, 'img4': null,
            }
        )
        setPending(false);
        setForeseen(false);
        setAttention(false);
        //setCount(0);
    }





    const changeImg = (img) => {

        setDataRel(
            {
                ...dataRel, [img]: null
            }
        )

    }





    const back = () => {
        setModalForm(false);
        navigation.navigate("Home");
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

                <View style={styles.contentMain}>
                    {
                        dataRel.title == "" ?
                            <View>
                                <LinearGradient
                                    colors={['#B1B2AB', '#7D7F72']}
                                    style={styles.styleBtnOne}
                                >
                                    <Pressable onPress={() => setModalForm(true)}>
                                        <Text style={styles.textBtn}>adcionar relatorio</Text>
                                    </Pressable>
                                </LinearGradient>
                            </View>
                            :

                            <View style={styles.containerRel}>


                                <LinearGradient
                                    colors={['#B1B2AB', '#7D7F72']}
                                    style={styles.styleBtnOne}
                                >
                                    {
                                        dataRel.img1 == null &&
                                        dataRel.img2 == null &&
                                        dataRel.img3 == null &&
                                        dataRel.img4 == null
                                            ?
                                            <Pressable onPress={() => setModalCamera(true)}>
                                                <Text style={styles.textBtn}>adicionar imagens</Text>
                                            </Pressable>
                                            :
                                            <Pressable disabled={true}>
                                                <Text style={styles.textBtn}>limit img exceeded</Text>
                                            </Pressable>
                                    }
                                </LinearGradient>



                                {
                                    dataRel.img1 != null ||
                                    dataRel.img2 != null ||
                                    dataRel.img3 != null ||
                                    dataRel.img4 != null

                                        ?


                                        <View style={styles.contentImg}>

                                            <View>
                                                {dataRel.img1 && <Image source={{ uri: dataRel.img1 }} style={styles.resizeModel} />}
                                                <Pressable onPress={() => changeImg('img1')}>
                                                    <Text style={styles.textBtn}>Excluir</Text>
                                                </Pressable>
                                            </View>




                                            <View>
                                                {dataRel.img2 && <Image source={{ uri: dataRel.img2 }} style={styles.resizeModel} />}
                                                <Pressable onPress={() => changeImg('img2')}>
                                                    <Text style={styles.textBtn}>Excluir</Text>
                                                </Pressable>
                                            </View>



                                            <View>
                                                {dataRel.img3 && <Image source={{ uri: dataRel.img3 }} style={styles.resizeModel} />}
                                                <Pressable onPress={() => changeImg('img3')}>
                                                    <Text style={styles.textBtn}>Excluir</Text>
                                                </Pressable>
                                            </View>


                                            <View>
                                                {dataRel.img4 && <Image source={{ uri: dataRel.img4 }} style={styles.resizeModel} />}

                                                <Pressable onPress={() => changeImg('img4')}>
                                                    <Text style={styles.textBtn}>Excluir</Text>
                                                </Pressable>
                                            </View>

                                            {/* 
       {dataRel.img1 && <Image source={{ uri: 'data:image/png;base64,' + dataRel.img1 }} style={styles.resizeModel} />}
       {dataRel.img2 && <Image source={{ uri: 'data:image/png;base64,' + dataRel.img2 }} style={styles.resizeModel} />}
       {dataRel.img3 && <Image source={{ uri: 'data:image/png;base64,' + dataRel.img3 }} style={styles.resizeModel} />}
       {dataRel.img4 && <Image source={{ uri: 'data:image/png;base64,' + dataRel.img4 }} style={styles.resizeModel} />}
      */}


                                        </View>

                                        :
                                        <View></View>


                                }


                                <View style={styles.cardRel}>

                                    <Text style={styles.textData}>{` Data : ${dataRel.date}`}</Text>
                                    <Text style={styles.textData}>{` Titulo : ${dataRel.title}`}</Text>
                                    <Text style={styles.textData}>{` Descrição : ${dataRel.desc}`}</Text>
                                    <Text style={styles.textData}>{` Status : ${dataRel.status}`}</Text>

                                </View>

                                <LinearGradient
                                    colors={['#B1B2AB', '#7D7F72']}
                                    style={styles.styleBtnOne}
                                >
                                    <Pressable onPress={() => saveReport()}>
                                        <Text style={styles.textBtn}>salvar</Text>
                                    </Pressable>
                                </LinearGradient>
                            </View>
                    }

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
                                placeholder="Titulo:"
                                placeholderTextColor="#000000"
                                onChangeText={
                                    (valor) => handleInputChange('title', valor)
                                }
                            />

                            <TextInput
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Descrição:"
                                placeholderTextColor="#000000"
                                rows={4}
                                multiline={true}
                                onChangeText={
                                    (valor) => handleInputChange('desc', valor)
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
                        </View>



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
                            <Pressable onPress={() => back()}>
                                <Text style={styles.textBtn}>voltar</Text>
                            </Pressable>
                        </LinearGradient>




                    </View>


                </Modal>




                <Modal
                    animationType='fade'
                    visible={modalCamera}
                >

                    <View style={styles.modalCameraStyle}>

                        <View style={styles.containnerCamera} >

                            <Camera
                                ref={ref => setCamera(ref)}
                                style={styles.camera}
                                type={type}
                                ratio={'1:1'}
                            />


                            <Pressable style={styles.styleBtnFlip}
                                onPress={() => {
                                    setType(
                                        type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back
                                    );
                                }}>
                                <Ionicons name="camera-reverse-outline" size={32} color="#33EAD1" />
                            </Pressable>



                        </View>

                        <View style={styles.containerBtnCamera}>

                            <Pressable style={styles.styleBtnCamera}
                                onPress={() => takePicture()}>
                                <Ionicons name="camera-outline" size={32} color="#33EAD1" />
                            </Pressable>


                            <Pressable style={styles.styleBtnCamera}
                                onPress={() => setModalCamera(false)}>
                                <Text style={styles.textAlert}>voltar</Text>
                            </Pressable>

                        </View>

                    </View>

                </Modal>

            </LinearGradient>

        </KeyboardAvoidingView>

    )
}


