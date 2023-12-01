import React, { useState, useEffect , useContext,} from 'react';

import {
  FlatList,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image, 
} from 'react-native';



import styles from './styles';






//import { AuthContext } from '../../contexts/auth';


export default function Pending({ navigation }) {


 



  




  return (



   <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >


     <ScrollView>



        <View style={styles.containerMain}>



          <Text>Tela Relatórios Pendentes</Text>




         <View style={styles.containerHeader}>




            <View style={styles.contentHeader}>



              <Text style={styles.textInfo}>{`Logado com!`}</Text>



            </View>





            <View style={styles.contentData}>



              <View >

                <View>
                  <Text style={styles.textInfo}>{`Obra selecionada`}</Text>
                </View>


                <View>
                  <Text style={styles.textInfo}>{`Nome`}</Text>
                  <Text style={styles.textInfo}>{`Responsável`}</Text>
                </View>

              </View>

            </View>




          </View>












        </View>



      </ScrollView>





      <View style={{ height: 100 }}></View>




    </KeyboardAvoidingView>



  )
}