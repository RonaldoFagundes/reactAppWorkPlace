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






              <FlatList

                data={obras}

                renderItem={({ item }) =>
                
                <View style={styles.listData}>

                  <View style={styles.listHeader}>

                   <Image 
                     style={styles.resizeModel}
                     source={item.img}
                    />



                   <Text style={styles.listText}>
                     {`Staus: ${item.status}`}
                   </Text>

                  </View>


                <View style={styles.listBody}>

                  <Text style={styles.listText}>
                    {`Nome : ${item.nome}`}
                  </Text>

                  <Text style={styles.listText}>
                    {`Endereço : ${item.endereco.rua}`}
                  </Text>

                  <Text style={styles.listText}>
                    {`Nº : ${item.endereco.numero}`}
                  </Text>

                  <Text style={styles.listText}>
                    {`Complemento : ${item.endereco.complemento}`}
                  </Text>

                  <Text style={styles.listText}>
                    {`Responsável : ${item.responsavel}`}
                  </Text>

               </View>



               <View style={styles.listFotter}>
                
                  {  
                  item.status  === 'em analise' 

                   ?
                  <Pressable style={styles.btnWarning}

                      onPress={() => navigation.navigate("")}
                   >
                      <Text style={styles.textAlert}>Pendência</Text>

                  </Pressable>
                    
                   :

                  <Pressable style={styles.containerBtn}

                      onPress={() => navigation.navigate("")}
                   >
                      <Text style={styles.textAlert}>Visitar Obra</Text>

                  </Pressable>

                  }




                  <Pressable  style={styles.containerBtn}

                      onPress={() => navigation.navigate("")}
                   >
                      <Text style={styles.textAlert}>Editar</Text>

                  </Pressable>

                  
                  <Pressable  style={styles.containerBtn}

                      onPress={() => navigation.navigate("")}
                    >
                    <Text style={styles.textAlert}>Excluir</Text>

                 </Pressable>


                </View>


               </View>
              
            }
             />









            </View>




          </View>












        </View>



      </ScrollView>





      <View style={{ height: 100 }}></View>




    </KeyboardAvoidingView>



  )
}