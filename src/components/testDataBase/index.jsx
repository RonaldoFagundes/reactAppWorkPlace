import React, { useState, useEffect, useContext, useRef } from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    Platform,
    Image,
    Modal,
    StyleSheet,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    FlatList,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';



//import AsyncStorage from '@react-native-community/async-storage';
//import AsyncStorage from 'react-native';

import { shareAsync } from 'expo-sharing';
import AsyncStorageSales from '@react-native-async-storage/async-storage';




export default function TestDataBase() {





    const [count, setCount] = useState(1);


    const [modalInspection, setModalInspection] = useState(false);


    const [reportList, setReportList] = useState([]);





    const [dataRel, setDataRel] = useState(

        {
            id: 1,
            title: "",
            subtitle: "",
            cause: "",
            policy: "",
            action: "",
            imgOne: null,
            imgTwo: null
        }


    );



    const [dataRelOne, setDataRelOne] = useState(

        {
            active: false,
            title: "",
            subtitle: "",
            cause: "",
            policy: "",
            action: "",
            imgOne: null,
            imgTwo: null
        }


    );


    const [dataRelTwo, setDataRelTwo] = useState(

        {
            active: false,
            title: "",
            subtitle: "",
            cause: "",
            policy: "",
            action: "",
            imgOne: null,
            imgTwo: null
        }


    );



    const [dataRelThree, setDataRelThree] = useState(

        {
            active: false,
            title: "",
            subtitle: "",
            cause: "",
            policy: "",
            action: "",
            imgOne: null,
            imgTwo: null
        }


    );


    const [dataRelFour, setDataRelFour] = useState(

        {
            active: false,
            title: "",
            subtitle: "",
            cause: "",
            policy: "",
            action: "",
            imgOne: null,
            imgTwo: null
        }


    );








    /*
    const dataModel = [
        {
            title: "Queda de Materiasi",
            subtitle: "Segurança",
            cause: "falta de suportes",
            policy: "infra-estrutura",
        },

        {
            title: "Risco de Queda",
            subtitle: "Segurança",
            cause: "falta de equipamentos",
            policy: "ppi & ppa",
        }

    ]

   */

    const dataModel2 = [];



    const includeData = async () => {

      if (dataRelOne.active === false) {

            setDataRelOne({
                ...dataRelOne, ['active']: true
            })

            console.log(" dataRelOne.active ",dataRelOne.active)
        }

         if (dataRelTwo.active === false) {

            setDataRelTwo({
                ...dataRelTwo, ['active']: true
            })
            console.log(dataRelTwo.active)


        }  if (dataRelThree.active === false) {

            setDataRelThree({
                ...dataRelThree, ['active']: true
            })
            console.log(dataRelThree.active)


        } if (dataRelFour.active === false) {

            setDataRelFour({
                ...dataRelFour, ['active']: true
            })
            console.log(dataRelFour.active)
        }

        /*
       setDataRel({
           ...dataRel, ['id']: dataRel.id + 1
       })
        */
        setModalInspection(true);

        //   console.log(" função ",dataRel.id)

        //   setData('id',dataRel.id)



    }







    const arrayData = [];



    const handleInputChange = (atribute, value) => {

        if (dataRelOne.title === "") {

            setDataRelOne(
                {
                    ...dataRel, [atribute]: value
                }
            )

        } else if (dataRelTwo.title === "") {

            setDataRelTwo(
                {
                    ...dataRel, [atribute]: value
                }
            )


        } else if (dataRelThree.title ==="") {

            setDataRelThree(
                {
                    ...dataRel, [atribute]: value
                }
            )


        } else if (dataRelFour.title === "") {

            setDataRelFour(
                {
                    ...dataRel, [atribute]: value
                }
            )


        }


    }














    const setData = (key, value) => {
        AsyncStorageSales.setItem(key, value);
        console.log("metodo setData ", key, " " + value)
    }




    const getData = async () => {
       
        console.log(dataRelOne.active)


      
      
        if (dataRelOne.active === true) {

           // console.log(" dataRelOne.title ",  dataRelOne.title)
            console.log(" dataRelOne.ativo ",dataRelOne.active)
        }        
      
     
        else if (dataRelTwo.active === true) {

          //  console.log(" dataRelOne.title ", dataRelTwo.title)
          console.log(" dataRelTwo.ativo ",dataRelTwo.active)


        } else if (dataRelThree.active === true) {

           // console.log(" dataRelOne.title ", dataRelThree.title)
           console.log(" dataRelThree.ativo ",dataRelThree.active)


        } else if (dataRelFour.active === true) {

           // console.log(" dataRelOne.title ", dataRelFour.title)
           console.log(" dataRelFour.ativo ",dataRelFour.active)

        }
     



    }






    const getData2 = async (key) => {

        // const quantidade = parseInt(await AsyncStorageSales.getItem(key));

        const data = await AsyncStorageSales.getItem(key);

        console.log(" metdo getData ", data)


        switch (data) {

            case 1:

                setDataRel(
                    {
                        ...dataRel, [atribute]: value
                    }
                )

                break;

        }


    }












    /*
    const addData = async () => {    
      
        dataModel2.push(

            {
                title: dataRel.title,
                subtitle: dataRel.subtitle,

            },
        );
      
        setReportList(dataModel2);    
    }
*/







    /*
    const addData = async () => {
    
        dataModel2.push(
            {
              title: dataRel.title,
              subtitle: dataRel.subtitle,
            },
        );  
    
     for (let i=0; i < 2 ; i++ ){
    
            dataModel2.push(
                {
                  title: dataRel.title,
                  subtitle: dataRel.subtitle,
                },
            );  
    
        }   
          setReportList(dataModel2);    
      }
    
     */










    /*
      const test = async () => {
    
            setModalInspection(false)
    
            if (dataRel.title != "") {
    
                console.log("diferente de vazio ");
    
                arrData.push({
                    t: dataRel.title,
                    sb: dataRel.subtitle,
                    c: dataRel.cause,
                })
    
                for (let i in arrData) {
    
                    const item = arrData[i];
    
                    console.log(item.t);
                }
            }
        }
     */
















    /*
        const increment = async () => {
    
            setCount(count + 1);
    
            for (let i = 0; i < count; i++) {
                console.log(count);
            }
            console.log(dataRel.title)
        }
    */










    /*
        / botao cadastrar dentro do modal  /
       const storeData = async () => {


             /fecha o modal  /
           setModalInspection(false);


         
             / verifica se já existe uma chave  /
         if(await AsyncStorage.getItem("user")){
             
               try {

                   const userData = JSON.parse(await AsyncStorage.getItem("user"))
                   console.log(userData);

                   } catch (error) {
     
                    console.log(error); 
     
                   }
     
             }



                  / se não push o array   /
             dataModel2.push(
               {
                   title: dataRel.title,
                   subtitle: dataRel.subtitle,    
               },    
           );



                   / e salva os dados  /
           try {
                await AsyncStorage.setItem("user", JSON.stringify(dataModel2));

               } catch (error) {
                 console.log(error);
               }
            

             /
           const userDataString = JSON.stringify(dataModel2);
 
           AsyncStorage.setItem('user', userDataString)
           .then(() => console.log('Dados do usuário salvos com sucesso!'))
           .catch(error => console.error('Erro ao salvar os dados:', error));
             /
         
       };
   
   
   */









    /*    
           / pega os dados /
      const getData = async () => {

        try {

            const userData = JSON.parse(await AsyncStorage.getItem("user"))

            } catch (error) {

             console.log(error); 

            }

            
        /
        await AsyncStorage.getItem('user')
          .then(userDataString => {
            if (userDataString) {
              // Converter a string de volta para um objeto
              const userData = JSON.parse(userDataString);
              console.log('Dados do usuário recuperados:', userData);
            } else {
              console.log('Nenhum dado encontrado para o usuário.');
            }
          })
          .catch(error => console.error('Erro ao recuperar os dados:', error));
             /

      };
   */






    /*
 / asyncstorage string /
   let storeInfo = async () => {
 
       try {
           await AsyncStorage.setItem('my-key', dataRel.title);
       } catch (e) {
           // saving error
       }
   }
 

 
   const getInfo = async () => {
       try {
           const value = await AsyncStorage.getItem('my-key');
           if (value !== null) {
               // value previously stored
           }
       } catch (e) {
           // error reading value
       }
   };


    /  asyncstorage array  /
    let storeData = async () => {

    try {
        const jsonValue = JSON.stringify(dataModel2);
        await AsyncStorage.setItem('my-key', jsonValue);

       } catch (e) {
           console.log("errr set")
       }

    }


    const getData = async () => {
        try {
           const jsonValue = await AsyncStorage.getItem('my-key');

           return jsonValue != null ? JSON.parse(jsonValue) : null;  
                    
       } catch (e) {
           // error reading value
           console.log("errr get ")
       }
    }
 
*/






    /* 
      firebase:
    
        const insertReport = async () => {
          
           console.log(
           "email: "+email+   
           "nome: "+construction.name+
           "endereco: "+construction.address+
           "numero: "+construction.number+
           "complemento: "+construction.others+       
           "responsavel: "+construction.responsable   
              )
          
      
          await setDoc(doc(db, email, construction.name), {
      
             nome: construction.name,
             endereco: construction.address,
             numero: construction.number,
             complemento: construction.others,
             responsavel: construction.responsable,
            -- img: `data:image/png;base64,${construction.img}`
            img: construction.img
      
          }).then(() => {
      
             console.log("metodo addReport");            
      
          }).catch((error) => {
             console.log(error);
          }); 
      
       }
    
      
    
       const selectReport = async () => {
      
        db.collection(email).onSnapshot((query) => {
      
          const list = [];
      
          query.forEach((doc) => {
      
            list.push({ ...doc.data(), id: doc.id });
      
          });
      
          setReportList(list);
      
          console.log(list)
      
          console.log("----------------------------------")
      
          console.log(list[0].nome)   
      
        })
      }    
    
     */



















    return (

        <SafeAreaView>



            <View><Text>{dataRel.title}</Text></View>









            <View>

                <Pressable style={styles.styleBtn}
                    onPress={() => includeData()}
                >
                    <Text style={styles.textInfo} >Relatório</Text>
                </Pressable>

            </View>




            <View>

                <Pressable style={styles.styleBtn}
                    onPress={() => getData()}
                >
                    <Text style={styles.textInfo} >gerar dados</Text>
                </Pressable>

            </View>






            <View style={styles.containerList} >

                <FlatList

                    // showsVerticalScrollIndicator={false}

                    data={reportList}

                    renderItem={({ item }) =>


                        <View style={styles.contentList}>

                            <Text style={styles.textInfo} >{item.title}</Text>
                            <Text style={styles.textInfo} >{item.subtitle}</Text>
                            <Text style={styles.textInfo} >{item.cause}</Text>
                            <Text style={styles.textInfo} >{item.policy}</Text>

                        </View>
                    }

                >

                </FlatList>
            </View>








            <Modal
                animationType='fade'
                visible={modalInspection}
            >

                <LinearGradient
                    colors={
                        [
                            'rgba(10, 40, 90, 0.97)',
                            'rgba(19, 53, 75 ,1)',
                        ]
                    }
                    style={styles.modalContent}
                >




                    <View style={styles.containerData}>

                        <View style={styles.contentHeaderDataInfoTwo}>


                            <TextInput
                                //  style={styles.inputTitle}
                                // underlineColorAndroid="transparent"
                                placeholder="Titulo:"
                                placeholderTextColor="white"
                                onChangeText={
                                    (valor) => handleInputChange('title', valor)
                                }
                            />


                            <TextInput
                                //  style={styles.inputTitle}
                                //  underlineColorAndroid="transparent"
                                placeholder="SubTitulo:"
                                placeholderTextColor="white"
                                onChangeText={
                                    (valor) => handleInputChange('subtitle', valor)
                                }
                            />



                        </View>





                        <View>

                            <TextInput
                                style={styles.textAreaContainer}
                                underlineColorAndroid="transparent"
                                placeholder="IRREGULARIDADE:"
                                placeholderTextColor="white"
                                // numberOfLines={10}
                                rows={3}
                                multiline={true}
                                onChangeText={
                                    (valor) => handleInputChange('cause', valor)
                                }
                            />


                            <TextInput
                                style={styles.textAreaContainer}
                                underlineColorAndroid="transparent"
                                placeholder="EMBASAMENTO TÉCNICO:"
                                placeholderTextColor="white"
                                //numberOfLines={10}
                                rows={3}
                                multiline={true}
                                onChangeText={
                                    (valor) => handleInputChange('policy', valor)
                                }
                            />



                            <TextInput
                                style={styles.textAreaContainer}
                                underlineColorAndroid="transparent"
                                placeholder="MEDIDA DE AÇÃO:"
                                placeholderTextColor="white"
                                //numberOfLines={10}
                                rows={3}
                                multiline={true}
                                onChangeText={
                                    (valor) => handleInputChange('action', valor)
                                }
                            />

                        </View>



                    </View>


                    <Pressable style={styles.styleBtn}
                        onPress={
                            () => setModalInspection(false)

                        }
                    >
                        <Text style={styles.textInfo} >Cadastrar</Text>
                    </Pressable>





                    <Pressable style={styles.styleBtn}
                        onPress={() => setModalInspection(false)}
                    >
                        <Text style={styles.textInfo} >Voltar</Text>
                    </Pressable>



                </LinearGradient>

            </Modal>











        </SafeAreaView>
    )
}




const styles = StyleSheet.create({

    body: {
        flex: 1,
    },

    containerMain: {
        height: '800px',
        with: "100%",
        marginBottom: 80,
    },

    contentMain: {
        marginTop: 20,
        alignItems: 'center',
        //backgroundColor: 'rgba(25, 126, 162, 0.3)',
        borderRadius: 10,
        height: "auto",
        padding: 20,
        with: "auto"
    },



    containerList: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        height: "auto",
        padding: 20,
        with: "auto"
    },


    contentList: {
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 10,
        height: "auto",
        padding: 20,
        with: "auto",
        marginBottom: 100
    },












    styleBtn: {
        alignItems: 'center',
        backgroundColor: 'rgba(6, 12, 127, 0.8)',
        width: 140,
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 30,
    },


    imgBtn: {
        alignItems: 'center',
        backgroundColor: 'rgba(6, 12, 127, 0.8)',
        width: 100,
        height: 20,
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 76,
        padding: 5

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

    containerImgSpace: {
        height: '60%',
        width: '98%',
        flexDirection: 'col',
        alignItems: 'center',
        backgroundColor: 'rgba(25, 126, 162, 0.7)',
        marginBottom: 50
    },

    contentImgSpace: {
        width: '70%',
        height: '58%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#6BA995",
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(25, 126, 162, 0.2)',
    },

    cardImg: {
        height: 180,
        width: 200,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#6BA995",
        backgroundColor: 'white',
        borderRadius: 10,
    },



    resizeModel: {
        resizeMode: 'cover',
        height: 160,
        width: 180,
    },







    containnerCamera: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
        width: 'auto',
        backgroundColor: 'black',
    },


    camera: {
        height: 200,
        width: 200,
        marginTop: 60,
        marginBottom: 100,
        backgroundColor: 'green'
    },


    cameraBtn: {
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: 'rgba(6, 12, 127, 0.8)',
        width: 'auto',
        height: 40,
        marginLeft: 10,
        marginTop: 50,
        borderRadius: 10,
        padding: 10
    },



    contentModalBtn: {
        height: 'auto',
        width: 'auto',
        backgroundColor: 'black',
        marginTop: 30,
        alignItems: 'center'
    },


});