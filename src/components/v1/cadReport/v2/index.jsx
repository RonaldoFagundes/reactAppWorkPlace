
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





export default function CadReport({ navigation }) {





    const {
        endpointPhp,
        idConstruction,
        setLoad, load,
        day
    } = useContext(AuthContext);



    
    


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
      
        navigation.addListener('focus', () => setLoad(!load))


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

                    <Text>Tela cadastro de relatorio</Text>

                </View>

                

            </LinearGradient>

        </KeyboardAvoidingView>

    )
}


