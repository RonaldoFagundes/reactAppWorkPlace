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


  
export default function TestModal({ navigation }) {



    const [modalInspection, setModalInspection] = useState(false);

   return(
        
    <SafeAreaView>      
      



      <View>

<Pressable style={styles.styleBtn}
    onPress={() => setModalInspection(true)}
>
    <Text style={styles.textInfo} >open modal</Text>
</Pressable>

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