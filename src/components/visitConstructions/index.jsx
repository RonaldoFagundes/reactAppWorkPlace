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
  Pressable
} from 'react-native';


import styles from './styles';



import CheckBox from '../checkBox';


 //import { AuthContext } from '../../contexts/auth';


export default function VisitConstructions({ navigation }) {


 // const { trouble } = useContext(AuthContext);
  
 //const {  setTrouble } = useContext(AuthContext);




  const optionsSolutionsIR = [
    {text:'Resolvido' ,id:1},
    {text:'Pendente'  ,id:2}
   ]
    let ir ;
    const [statusIR, setStatusIR] = useState(false);




    const optionsSolutionsMF = [
      {text:'Resolvido' ,id:1},
      {text:'Pendente'  ,id:2}
     ]
     let mf ;
     const [statusMF, setStatusMF] = useState(false);



     const optionsSolutionsFR = [
      {text:'Resolvido' ,id:1},
      {text:'Pendente'  ,id:2}
     ]
     let fr ;
     const [statusFR, setStatusFR] = useState(false);



     const optionsSolutionsO = [
      {text:'Resolvido' ,id:1},
      {text:'Pendente'  ,id:2}
     ]
     let o ;
     const [statusO, setStatusO] = useState(false);





    














    // useEffect( () => onChange(selected), [selected] );
   
   
 

   








  //const [isOk, setIsOk] = useState(false);



  //const [isillnessRiskP, setillnessRiskP] = useState(false);


  //const [isillnessRiskR, setillnessRiskR] = useState(false);





 



  const [illnessRisk, setIllnessRisk] = useState(
    {
      irregularity: "",
      policy: "",
      action: "",      
    }
  );




  const [materialFalling, setMaterialFalling] = useState(
    {
      cause: "",
      policy: "",
      action: ""      
    }
  );



  const [fallingRisk, setFallingRisk] = useState(
    {
      cause: "",
      policy: "",
      action: ""      
    }
  );



  const [organization, setOrganization] = useState(
    {
      cause: "",
      policy: "",
      action: ""     
    }
  );










  const handleInputChangeIllnessRisk = (atribute, value) => {

    setIllnessRisk(
      {
        ...illnessRisk, [atribute]: value
      }
    )

  }





  const handleInputChangeMaterialFalling = (atribute, value) => {

    setMaterialFalling(
      {
        ...materialFalling, [atribute]: value
      }
    )

  }





  const handleInputChangeFallingRisk = (atribute, value) => {

    setFallingRisk(
      {
        ...fallingRisk, [atribute]: value
      }
    )

  }





  const handleInputChangeOrganization = (atribute, value) => {

    setOrganization(
      {
        ...organization, [atribute]: value
      }
    )

  }






 /*

  const illness = () => {

    setStatusIR(ir);
    console.log(
      " IRREGULARIDADE:  " + illnessRisk.cause +
      " EMBASAMENTO TÉCNICO: " + illnessRisk.policy +
      "  Medida de Ação: " + illnessRisk.action+
      " valor  "+status  

       )
  }





  const materialfall = () => {
    setStatusMF(mf);
    console.log(
      " IRREGULARIDADE:  " + materialFalling.cause +
      " EMBASAMENTO TÉCNICO: " + materialFalling.policy +
      "  Medida de Ação: " + materialFalling.action
    )
  }





  
  const fallrisk = () => {
    console.log(
      " IRREGULARIDADE:  " + fallingRisk.cause +
      " EMBASAMENTO TÉCNICO: " + fallingRisk.policy +
      "  Medida de Ação: " + fallingRisk.action
    )
  }



  const organizatio = () => {
    console.log(
      " IRREGULARIDADE:  " + organization.cause +
      " EMBASAMENTO TÉCNICO: " + organization.policy +
      "  Medida de Ação: " + organization.action
    )
  }

 */












  return (



    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >


     <ScrollView>


        <View style={styles.containerMain}>



          <Text>Tela Visita</Text>



          <View style={styles.containerHeader}>



            <View style={styles.contentHeader}>


                <Text style={styles.textInfo}>{`Logado com!`}</Text>


            </View>


          </View>


          


            <View style={styles.containerInfo}>


                <View>

                   <Image 
                     style={styles.resizeModel}
                     source={require(`../../../assets/test.png`)}
                    />

                  <Text style={styles.textInfo}>{`Obra selecionada`}</Text>
                  
                </View>


                <View>
                  <Text style={styles.textInfo}>{`Nome`}</Text>
                  <Text style={styles.textInfo}>{`Responsável`}</Text>
                </View>


             </View>


            



         





          <View style={styles.containerData}>




            <View style={styles.contentData}>


              <View style={styles.containerHeaderData}>

                <View>
                  <Text style={styles.textInfo}>{`logo`}</Text>
                </View>

                <View style={styles.contentHeaderData}>
                  <Text style={styles.textInfo}>{`Risco de Doenças`}</Text>
                  <Text style={styles.textInfo}>{`Proliferação de insetos`}</Text>
                  <Text style={styles.textInfo}>{`data`}</Text>
                </View>


                  {
                  statusIR == 2 ?
                    <View>
                      <Text style={styles.textInfo}>{`status pendente`}</Text>
                    </View>
                    : 
                     <View>
                       <Text style={styles.textInfo}>{`status ok  `}</Text>
                     </View>
                   }

              </View>


           
              <Pressable style={styles.containerBtn}>
                  <Text style={styles.textAlert} >selecione uma foto</Text>
              </Pressable>
           


             {/* 
              <TouchableOpacity style={styles.containerBtn}
               disabled={true}
              >
                <Text style={styles.textAlert} >selecione uma foto</Text>
              </TouchableOpacity>
               */}



              <View style={styles.containerImgSpace}>

                <View style={styles.contentImgSpace}></View>

                <View style={styles.contentImgSpace}></View>

              </View>

            


              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="IRREGULARIDADE:"
                placeholderTextColor="white"
               // numberOfLines={10}
                rows={10}
                multiline={true}

                onChangeText={
                  (valor) => handleInputChangeIllnessRisk('cause', valor)
                }

              />


              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="EMBASAMENTO TÉCNICO:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={10}
                multiline={true}

                onChangeText={
                  (valor) => handleInputChangeIllnessRisk('policy', valor)
                }
              />


              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="MEDIDA DE AÇÃO:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={10}
                multiline={true}

                onChangeText={
                  (valor) => handleInputChangeIllnessRisk('action', valor)
                }
              />
              

          

              <CheckBox  options={optionsSolutionsIR} onChange={ op=> alert(op) } />     

         


             {/*
              <CheckBox 
              
              options={optionsSolutionsIR}
              
              onChange={ 
                     // op=> console.log("valor "+op) 
                      op=>  { ir = op }
                       }            
              />
                */}   





           {/*     
            <Pressable style={styles.containerBtn}
                disabled={true}
                onPress={illness}
              >


                <Text style={styles.textAlert} >Enviar</Text>

            </Pressable>
           */}


          </View>















            <View style={styles.contentData}>

              <View style={styles.containerHeaderData}>

                <View>
                  <Text style={styles.textInfo}>{`logo`}</Text>
                </View>


                <View style={styles.contentHeaderData}>
                  <Text style={styles.textInfo}>{`Queda de Materiais`}</Text>
                  <Text style={styles.textInfo}>{`Limpeza das badejas`}</Text>
                  <Text style={styles.textInfo}>{`data`}</Text>
                </View>




                {
                  statusMF == 2 ?
                    <View>
                      <Text style={styles.textInfo}>{`status pendente`}</Text>
                    </View>
                    : 
                     <View>
                       <Text style={styles.textInfo}>{`status ok  `}</Text>
                     </View>
                 }





               {/*  {
                  isPending ?
                    <View>
                      <Text style={styles.textInfo}>{`status pendente`}</Text>
                    </View>
                    :
                    <View>
                      <Text style={styles.textInfo}>{`status ok`}</Text>
                    </View>
                }
               */}


              </View>






              <Pressable style={styles.containerBtn}
                //disabled={true}
               >
                <Text style={styles.textAlert} >selecione uma foto</Text>

              </Pressable>



              <View style={styles.containerImgSpace}>


                <View style={styles.contentImgSpace}></View>

                <View style={styles.contentImgSpace}></View>


              </View>



              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="IRREGULARIDADE:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={10}
                multiline={true}

                onChangeText={
                  (valor) => handleInputChangeMaterialFalling('cause', valor)
                }
              //   value={materialFalling.cause} 
              />



              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="EMBASAMENTO TÉCNICO:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={10}
                multiline={true}

                onChangeText={
                  (valor) => handleInputChangeMaterialFalling('policy', valor)
                }
              // value={materialFalling.policy} 
              />



              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="MEDIDA DE AÇÃO:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={10}
                multiline={true}

                onChangeText={
                  (valor) => handleInputChangeMaterialFalling('action', valor)
                }
              // value={materialFalling.action} 
              />

            
           <CheckBox options={optionsSolutionsMF} onChange={ op=> alert(op) } />  


            {/* 
             <CheckBox 
              
              options={optionsSolutionsMF}
              
               onChange={ 
                //  op=> console.log("valor "+op) 
                op=>  { mf = op }
                }            
                 />    
             */}



           
             {/* 
              <Pressable style={styles.containerBtn}
                disabled={true}
                onPress={materialfall}
              >
                <Text style={styles.textAlert} >Enviar</Text>

              </Pressable>
            */}


            </View>






          


<View style={styles.contentData}>


  <View style={styles.containerHeaderData}>

    <View>
      <Text style={styles.textInfo}>{`logo`}</Text>
    </View>

              <View style={styles.contentHeaderData}>
                
                  <Text style={styles.textInfo}>{`Risco de Queda`}</Text>
                  <Text style={styles.textInfo}>{`Passagem do elevador`}</Text>
                  <Text style={styles.textInfo}>{`data`}</Text>
                </View>



                {
                  statusFR == 2 ?
                    <View>
                      <Text style={styles.textInfo}>{`status pendente`}</Text>
                    </View>
                    : 
                     <View>
                       <Text style={styles.textInfo}>{`status ok  `}</Text>
                     </View>
                 }



                {/* {
                  isillnessRiskP ?
                    <View>
                      <Text style={styles.textInfo}>{`status pendente`}</Text>
                    </View>
                    :
                    <View>
                      <Text style={styles.textInfo}>{`status ok`}</Text>
                    </View>
                } */}


              </View>



              <Pressable style={styles.containerBtn}
              //disabled={true}
              >
                <Text style={styles.textAlert} >selecione uma foto</Text>

              </Pressable>



              <View style={styles.containerImgSpace}>


                <View style={styles.contentImgSpace}></View>

                <View style={styles.contentImgSpace}></View>


              </View>

              {/*
 
 <TextInput style={styles.input}
    placeholder=" info 1 "
    placeholderTextColor="#BBD441"
    type="text"
 
 
     onChangeText={
     (valor) => handleInputChange('email', valor)
    }
    value={credencials.email}
   
    />


    <TextInput style={styles.input}
      placeholder=" info 2 "
      placeholderTextColor="#BBD441"
      type="text"

   
      onChangeText={
       (valor) => handleInputChange('email', valor)
      }
      value={credencials.email} 
      
     /> 
    
    */}


              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="IRREGULARIDADE:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={10}
                multiline={true}

                onChangeText={
                  (valor) => handleInputChangeFallingRisk('cause', valor)
                }
              />

              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="EMBASAMENTO TÉCNICO:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={10}
                multiline={true}

                onChangeText={
                  (valor) => handleInputChangeFallingRisk('policy', valor)
                }
              />



              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="MEDIDA DE AÇÃO:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={10}
                multiline={true}

                onChangeText={
                  (valor) => handleInputChangeFallingRisk('action', valor)
                }
              />


<CheckBox  options={optionsSolutionsFR} onChange={ op=> alert(op) } />   

            {/* 

              <View style={styles.checkBoxContainer} >

                <CheckBox style={styles.checkBoxContent}

                  value={isPending}
                  onValueChange={setPending}
                />

                <Text style={styles.textAlert}>{`  Pendente ? `}</Text>

              </View>




              <View style={styles.checkBoxContainer} >

                <CheckBox style={styles.checkBoxContent}

                  value={isResolved}
                  onValueChange={setResolved}
                />

                <Text style={styles.textAlert}>{` Resolvido ? `}</Text>

              </View>

             */}



              {/* 
              <Pressable style={styles.containerBtn}
                disabled={true}
                onPress={fallrisk}
              >
                <Text style={styles.textAlert} >Enviar</Text>

              </Pressable>
              */}

            </View>











            <View style={styles.contentData}>






              <View style={styles.containerHeaderData}>

                <View>
                  <Text style={styles.textInfo}>{`logo`}</Text>
                </View>


                <View style={styles.contentHeaderData}>
                  <Text style={styles.textInfo}>{`ORGANIZAÇÃO`}</Text>
                  <Text style={styles.textInfo}>{`Limpeza de Entulhos`}</Text>
                  <Text style={styles.textInfo}>{`data`}</Text>
                </View>



                {
                  statusO == 2 ?
                    <View>
                      <Text style={styles.textInfo}>{`status pendente`}</Text>
                    </View>
                    : 
                     <View>
                       <Text style={styles.textInfo}>{`status ok  `}</Text>
                     </View>
                 }
                {/* {
                  isPending ?
                    <View>
                      <Text style={styles.textInfo}>{`status pendente`}</Text>
                    </View>
                    :
                    <View>
                      <Text style={styles.textInfo}>{`status ok`}</Text>
                    </View>
                } */}


              </View>





              <Pressable style={styles.containerBtn}
              //disabled={true}
              >
                <Text style={styles.textAlert} >selecione uma foto</Text>

              </Pressable>



              <View style={styles.containerImgSpace}>


                <View style={styles.contentImgSpace}></View>

                <View style={styles.contentImgSpace}></View>


              </View>


              {/*
 
 <TextInput style={styles.input}
    placeholder=" info 1 "
    placeholderTextColor="#BBD441"
    type="text"

 
 
     onChangeText={
     (valor) => handleInputChange('email', valor)
    }
    value={credencials.email}
   
    />


    <TextInput style={styles.input}
      placeholder=" info 2 "
      placeholderTextColor="#BBD441"
      type="text"

   
      onChangeText={
       (valor) => handleInputChange('email', valor)
      }
      value={credencials.email} 
      
    
    /> 
    
    */}



              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="IRREGULARIDADE:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={10}
                multiline={true}

                onChangeText={
                  (valor) => handleInputChangeOrganization('cause', valor)
                }
              />

              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="EMBASAMENTO TÉCNICO:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={10}
                multiline={true}

                onChangeText={
                  (valor) => handleInputChangeOrganization('policy', valor)
                }
              />


              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="MEDIDA DE AÇÃO:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={10}
                multiline={true}

                onChangeText={
                  (valor) => handleInputChangeOrganization('action', valor)
                }
              />




          <CheckBox options={optionsSolutionsO} onChange={ op=> alert(op) } />  





              {/* 

              <View style={styles.checkBoxContainer} >

                <CheckBox style={styles.checkBoxContent}

                  value={isPending}
                  onValueChange={setPending}
                />

                <Text style={styles.textAlert}>{`  Pendente ? `}</Text>

              </View>




              <View style={styles.checkBoxContainer} >

                <CheckBox style={styles.checkBoxContent}

                  value={isResolved}
                 onValueChange={setResolved}
                />

                <Text style={styles.textAlert}>{` Resolvido ? `}</Text>

              </View>

                */}




              {/* 
              <Pressable style={styles.containerBtn}
                disabled={true}
                onPress={organizatio}
              >
                <Text style={styles.textAlert} >Enviar</Text>

              </Pressable>
             */}


            </View>




             <Pressable style={styles.containerBtn}
               // disabled={true}
               
               >
                <Text style={styles.textAlert} >Enviar</Text>

             </Pressable>





            {/*
         
         
         <View style={styles.contentData}>

      

                 <Text style={styles.textInfo}>{`IPI`}</Text>




               
                  <TextInput style={styles.input}
                     placeholder=" info 1 "
                     placeholderTextColor="#BBD441"
                     type="text"

                  
                    
                      onChangeText={
                      (valor) => handleInputChange('email', valor)
                     }
                     value={credencials.email}
                  
                     />

          
               
                     <TextInput style={styles.input}
                       placeholder=" info 2 "
                       placeholderTextColor="#BBD441"
                       type="text"
  
                
                    
                       onChangeText={
                        (valor) => handleInputChange('email', valor)
                       }
                       value={credencials.email} 
                     
                     
                     />
  
  
  
      <TextInput  
        style={styles.textAreaContainer}
        underlineColorAndroid="transparent"
        placeholder="Descrição"
        placeholderTextColor="white"
        numberOfLines={10}
        multiline={true}
      />
    
          
        <TouchableOpacity  style={styles.containerBtn} 
              //disabled={true}
           >
              <Text style={styles.textAlert} >selecione uma foto</Text>

        </TouchableOpacity>
  
         
      

        <View style={styles.checkBoxContainer} >

<CheckBox style={styles.checkBoxContent} 
   value={isSelected}
   onValueChange={setSelected}
/>

<Text style={styles.textAlert}>{ `  Pendente ? `}</Text>

</View>



        <View style={styles.checkBoxContainer} >

            <CheckBox style={styles.checkBoxContent} 
             value={isOk}
             onValueChange={setOk}
            />

          <Text style={styles.textAlert}>{ `  Tudo OK ? `}</Text>

        </View>
  
  

  
     </View> 
          
          
          
   */}














          </View>





        </View>



      </ScrollView>





      <View style={{ height: 100 }}></View>




    </KeyboardAvoidingView>



  )
}