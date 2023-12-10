import React, { useState, useEffect, useContext,  useRef} from 'react';

import {
  View,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,

} from 'react-native';



import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

import CheckBox from '../checkBox';

import { AuthContext } from '../../contexts/auth';


//import * as Print from 'expo-print';
//import AsyncStorageSales from '@react-native-async-storage/async-storage';


import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Camera } from 'expo-camera';




export default function VisitConstructions({ navigation }) {




  const { user, day, selectContruction ,setLoad, load} = useContext(AuthContext);


  const [selectedPrinter, setSelectedPrinter] = useState();




  const [onCamera, setOnCamera] = useState(false);

  const camRef = useRef(null);

  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const [type, setType] = useState(Camera.Constants.Type.back)


  const optionsSolutionsIR = [
    { text: 'Resolvido', id: 1 },
    { text: 'Pendente', id: 2 }
  ]


  const optionsSolutionsMF = [
    { text: 'Resolvido', id: 1 },
    { text: 'Pendente', id: 2 }
  ]


  const optionsSolutionsFR = [
    { text: 'Resolvido', id: 1 },
    { text: 'Pendente', id: 2 }
  ]


  const optionsSolutionsO = [
    { text: 'Resolvido', id: 1 },
    { text: 'Pendente', id: 2 }
  ]


  const [checkIR, setCheckIR] = useState({
    opcao: 0,
    statusType: "",
    flag: require(`../../../assets/logo_one.png`),
  });


  const [checkMF, setCheckMF] = useState({
    opcao: 0,
    statusType: "",
    flag: require(`../../../assets/logo_one.png`),
  });


  const [checkFR, setCheckFR] = useState({
    opcao: 0,
    statusType: "",
    flag: require(`../../../assets/logo_one.png`),
  });


  const [checkO, setCheckO] = useState({
    opcao: 0,
    statusType: "",
    flag: require(`../../../assets/logo_one.png`),
  });





  async function takePicture() {
    if (camRef) {
       const dataImg = await camRef.current.takePictureAsync();
       setCapturedPhoto(dataImg.uri)
       console.log(dataImg);
    }
 }








  const [illnessRisk, setIllnessRisk] = useState(
    {
      title:"Risco de Doenças",
      subtitle:"Ploliferação de insetos",
      cause: "",
      policy: "",
      action: "",
    }
  );


  const [materialFalling, setMaterialFalling] = useState(
    {
      title:"Queda de Materiais",
      subtitle:"Limpeza das badejas",
      cause: "",
      policy: "",
      action: "",
    }
  );


  const [fallingRisk, setFallingRisk] = useState(
    {
      title:"Risco de Queda",
      subtitle:"Passagem do elevador",
      cause: "",
      policy: "",
      action: "",
    }
  );


  const [organization, setOrganization] = useState(
    {
      title:"Organização",
      subtitle:"Limpeza dos entulhos",
      cause: "",
      policy: "",
      action: "",
    }
  );




  //const imgDefault = require(`../../../assets/logo_one.png`);

  //const  imgPending =  require(`../../../assets/pendente.PNG`) ;

  //const  imgResolved = require(`../../../assets/resolvido.PNG`) ;






  useEffect(() => {    

    navigation.addListener('focus', () => setLoad(!load))

  }, [load, navigation]);




  const toBack =  () => {   
      navigation.navigate("Home")
  }












  const inspectionIR = async (key) => {

    console.log(key);

    if (key == 1) {

      console.log("marcado com 1");

      setCheckIR({
        ...checkIR, opcao: (1),
        checkIR, statusType: "resolvido",
        checkIR, flag: require(`../../../assets/resolvido.png`)

      })

    } else if (key == 2) {

      console.log("marcado com 2");

      setCheckIR({
        ...checkIR, opcao: (2),
        checkIR, statusType: "pendente",
        checkIR, flag: require('../../../assets/pendente.png')
      })

    } else {

      console.log("desmarcado");

      setCheckIR({
        ...checkIR, opcao: (0),
        checkIR, flag: require(`../../../assets/logo_one.png`)

      })

    }
  }


  const inspectionMF = async (key) => {

    console.log(key);

    if (key == 1) {

      console.log("marcado com 1");

      setCheckMF({
        ...checkMF, opcao: (1),
        checkMF, statusType: "resolvido",
        checkMF, flag: require(`../../../assets/resolvido.png`)

      })


    } else if (key == 2) {

      console.log("marcado com 2");

      setCheckMF({
        ...checkMF, opcao: (2),
        checkMF, statusType: "pendente",
        checkIR, flag: require('../../../assets/pendente.png')
      })

    } else {

      console.log("desmarcado");

      setCheckMF({
        ...checkMF, opcao: (0),
        checkMF, flag: require(`../../../assets/logo_one.png`)
      })

    }

  }


  const inspectionFR = async (key) => {
    console.log(key);

    if (key == 1) {

      console.log("marcado com 1");

      setCheckFR({
        ...checkFR, opcao: (1),
        checkFR, statusType: "resolvido",
        checkFR, flag: require(`../../../assets/resolvido.png`)

      })


    } else if (key == 2) {

      console.log("marcado com 2");

      setCheckFR({
        ...checkFR, opcao: (2),
        checkFR, statusType: "pendente",
        checkIR, flag: require('../../../assets/pendente.png')
      })

    } else {

      console.log("desmarcado");

      setCheckFR({
        ...checkFR, opcao: (0),
        checkFR, flag: require(`../../../assets/logo_one.png`)

      })
    }
  }


  const inspectionO = async (key) => {
    console.log(key);

    if (key == 1) {

      console.log("marcado com 1");

      setCheckO({
        ...checkO, opcao: (1),
        checkO, statusType: "resolvido",
        checkO, flag: require(`../../../assets/resolvido.png`)
      })

    } else if (key == 2) {

      console.log("marcado com 2");

      setCheckO({
        ...checkO, opcao: (2),
        checkO, statusType: "pendente",
        checkIR, flag: require('../../../assets/pendente.png')
      })

    } else {

      console.log("desmarcado");

      setCheckO({
        ...checkO, opcao: (0),
        checkO, flag: require(`../../../assets/logo_one.png`)

      })
    }
  }





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
























  var dataArray = [];

  function createDynamicData() {




    if (illnessRisk.cause != "") {

      dataArray.push({
        t:illnessRisk.title,
        sb:illnessRisk.subtitle,
        c: illnessRisk.cause,
        p: illnessRisk.policy,
        a: illnessRisk.action,
        st: checkIR.statusType,
        sf: checkIR.flag
      })

    }


    if (materialFalling.cause != "") {

      dataArray.push({
        t:materialFalling.title,
        sb:materialFalling.subtitle,
        c: materialFalling.cause,
        p: materialFalling.policy,
        a: materialFalling.action,
        st: checkMF.statusType,
        sf: checkMF.flag
      })

    }


    if (fallingRisk.cause != "") {

      dataArray.push({
        t:fallingRisk.title,
        sb:fallingRisk.subtitle,
        c: fallingRisk.cause,
        p: fallingRisk.policy,
        a: fallingRisk.action,
        st: checkFR.statusType,
        sf: checkFR.flag
      })

    }


    if (organization.cause != "") {

      dataArray.push({
        t:organization.title,
        sb:organization.subtitle,
        c: organization.cause,
        p: organization.policy,
        a: organization.action,
        st: checkO.statusType,
        sf: checkO.flag
      })

    }









    var inspectionData = "";

    for (let i in dataArray) {

      const item = dataArray[i];

      inspectionData = inspectionData +

       `
        <div
          
         style=
          "
          display:block;        
          height:'100%';
          width:100%;
          "      
         >
      
        
         <div
          
          style=
          "
          display:block;   
          height: 'auto';
          width: 'auto';
          background-color:gray;
          "          
          >
            
          <div

           style=
           "
           display:flex;
           justify-content: space-between;
           height: 'auto';
           width: 'auto';
           background-color:gray;
           padding: 10px;
           "
           >

             <div 

               style=
               "              
                height: 80px;
                width: 80px;
                background-color:white;   
                border-style: solid;
                border-color: rgb(148, 183, 189);
                border-radius: 10px;   
               "               
               >
                <p>img</p>
             </div>              


              <div>

                <div><p>${item.t}</p></div>

                <div><p>${item.sb}</p></div>

              </div>


             <div
               style=
               "              
                height: 80px;
                width: 80px;
                background-color:white;   
                border-style: solid;
                border-color: rgb(148, 183, 189);
                border-radius: 10px;   
               "   
               >
               <p>img</p>
             </div>

           
           </div>
           



           <div
              style=
              "
               display:flex;
               justify-content: space-between;
               height: 30px;
               width: 'auto';
               padding: 10px;
              "
              >
               <p>data</p>
             </div>
           


          </div>
       
       </div>


       <div
       
       style=
        " 
        display:flex;
        justify-content: space-around;
        height: 'auto';
        width: 'auto';
        padding: 20px;           
        "       
       >



        <div 

         style=
          "                      
          height: 160px;
          width: 200px;
          background-color:white;   
          border-style: solid;
          border-color: rgb(148, 183, 189);
          border-radius: 10px;   
         "                  
         >
         <p>img</p>

        </div>  
        
        


        <div 

         style=
         "              
                height: 160px;
                width: 200px;
                background-color:white;   
                border-style: solid;
                border-color: rgb(148, 183, 189);
                border-radius: 10px;   
               "                 
         >
         <p>img</p>

        </div>  



       </div>




      <div 
       
        style=
          "
          display:block;
          height: '300px';
          width: '400px';
          background-color:gray;  

          "
      
      >


      <div>


       
         <p
         style=
          "
          text-transform: uppercase;
          text-align: left;  
          font-size: 20px;        
          "         
           >
            irregularidade
         </p>

         <div
         
          style=
           "
           height: 160px;
           width: 'auto';
           background-color:rgb(72, 92, 95);
           margin-bottom: 10px;
           border-style: solid;
           border-color: rgb(6, 86, 100);
           text-align: left;
           color:white;
           "                 
           >${item.c}</div> 





         <p
         style=
          "
          text-transform: uppercase;
          text-align: left;
          font-size: 20px;          
          "         
          >
           normas técnicas
         </p>
           
         <div         
          style=
          "
           height: 160px;
           width: 'auto';
           background-color:rgb(72, 92, 95);
           margin-bottom: 10px;
           border-style: solid;
           border-color: rgb(6, 86, 100);
           text-align: left;
           color:white;
          "         
           >${item.p}</div>

       


         <p
         style=
          "
          text-transform: uppercase;
          text-align: left; 
          font-size: 20px;         
          "         
           >
           Medidas de ação
         </p>  

         <div
         
         style=
         "
          height: 160px;
          width: 'auto';
          background-color:rgb(72, 92, 95);
          margin-bottom: 10px;
          border-style: solid;
          border-color: rgb(6, 86, 100);
          text-align: left;
          color:white;
         "  
         
          >${item.a}</div>

       



      </div> 


       `


    }




  const html =

      `
  <!DOCTYPE html>

   <html>

    <head>

       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" /> 
      


      <style>


      body{
        padding: 0;
        margin: 0;
        text-align: center;    
       }  
    

       section{
             width: 'auto';
             height: 'auto';
             background-color:rgb(94, 138, 146);
             padding: 20px;
       }
    

       
    
    
          
       #intru{
        display:block;
        height: 940px;
        width: "auto";
        padding: 20px;
        background-color:white;
        margin-bottom: 100px;
     }

       

    #intru-content{  
      display:flex;
      justify-content: center;      
      height: 700px;
      width: 'auto';
      background-color:rgb(223, 223, 223);
}


#day{
  height: 'auto';
  width: 14%;     
  background-color:rgb(243, 1, 1);  
  border-style: solid;
border-color: rgb(148, 183, 189);
border-radius: 10px;
      
}

#day-title{
  transform: rotate(-90deg);
  font-size: 60px; 
  font-family: Helvetica Neue; 
  font-weight: normal;
  margin-top: 150px;
  color:rgb(206, 179, 143) ;
}
  
    
#company-info{  
  display:block;
    height: 80%;
    width: 40%;
    background-color:rgb(223, 223, 223);
    margin-bottom: 100px;
}

#company-one{  
  display:block; 
  width: 'auto'; 
  background-color:rgb(223, 223, 223);  
  margin-bottom: 20px;
  /* border-style: solid;
    border-color: rgb(148, 183, 189);
    border-radius: 10px; */
}

#company-two{
  width: 'auto'; 
  display:block;  
  background-color:rgb(223, 223, 223);  
}

#img-company{
  height: 40px;
  width: 40px;
  background-color:white;   
  border-style: solid;
  border-color: rgb(148, 183, 189);
  border-radius: 10px; 
  margin-left: 20px; 
  margin-top: 10px;   
}


#intru-title{
      height: 'auto';
      width: 60%;
      position: absolute;
      text-transform: uppercase;
      font-size: 28px;
      /* desktop */
      margin-top: 62%;

      /*mobilie
      margin-top: 76%;
      
      background-color:rgb(202, 224, 228);
      
     */
      color: rgb(34, 23, 23);
      
 }

#intru-footer{  
   display:flex;
   justify-content: space-between;
    height: 'auto';
    width: 'auto';
    background-color:rgb(223, 223, 223);  
    padding: 20px;
}


#intru-img-fotter{
    height: 40px;
    width: 40px;
    background-color:white;    
        border-style: solid;
        border-color: rgb(148, 183, 189);
        border-radius: 10px;     
}







    
    #card{
          display:block;
          height: 'auto';
          width: "auto";
          padding: 20px;
          background-color:white;
          margin-bottom: 100px;
    }
    
    
      #header{
        display:block;   
        height: 'auto';
        width: 'auto';
       // background-color:rgb(5, 66, 18)
      }      
    
    
      #header-info-one{
        display:flex;
        justify-content: space-between;
        height: 'auto';
        width: 'auto';
       // background-color:rgb(31, 117, 50)
      } 
      
      #header-desc{
        display:block;
      }
    
    
      #header-info-two{
        display:flex;
        justify-content: space-between;
        height: 'auto';
        width: 'auto';
       // background-color:rgb(31, 117, 50)
      } 
    
    
    
      #card-img{
        display:flex;
        justify-content: space-around;
        height: 'auto';
        width: 'auto';
        padding: 20px;
        background-color:rgb(54, 31, 117)
      }
    
    
      #img-card{
        height: 40%;
        width: 40%;
      }
    
      #card-text{
        text-transform: uppercase;
        text-align: left;
    
      }
    
    
      #article{      
        height: 200px;
        width: 'auto';
        background-color:rgb(196, 184, 230);
        margin-bottom: 10px;
      }
    
    
     #footer{
        display:flex;
        justify-content: space-around;
        height: 'auto';
        width: 'auto';
        padding: 20px;
     background-color:rgb(117, 97, 31)
    }  

   



     </style>   
   



    </head>    


   <body>
   



    <section> 


     <div id="intru">      


       <div id="intru-content">

          <div id="day">
            <p id="day-title">data</p>
          </div>

          <div id="company-info">


            <div id="company-one">

               <div id="img-company"></div> 

               <h3>empresa</h3>
               <h4>endereco</h4>

            </div>      
            
            

            <div id="company-two">

               <div id="img-company"></div>

               <h3>empresa</h3>
               <h4>endereco</h4>
            </div>


          </div>


          <div id="intru-title">
              <h1>relatório técnico</h1>
          </div>

      </div>


      <div id="intru-footer">

          <div id="intru-img-fotter"></div> 

          <div>
              <h3>empresa</h3>
              <h4>endereco</h4>
          </div>            

      </div>
      
      

    </div>





   


     <div>${inspectionData}</div>  


  







   </section>



  </body>


  </html> 
  
  `;
    return html;

  }






  let generetePdf = async () => {

    const file = await printToFileAsync({
      html: createDynamicData(),
      base64: false
    });

    await shareAsync(file.uri);


  }














  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >

      <ScrollView>

        <LinearGradient
          // colors={['#66110A', '#FFB233']}
          colors={[
            'rgba(75, 139, 117, 0.6)',
            'rgba(75, 139, 117, 0.2)',
          ]}
          style={styles.containerMain}
        >


          <View style={styles.containerInfo}>
            <Text style={styles.textMain}>{` Tela de Inspeção `}</Text>
          </View>


          <View style={styles.containerHeader}>


            <View style={styles.contentHeader}>


              <Text style={styles.textInfo}>{`Logado com ${user}`}</Text>

              
                <Pressable style={styles.containerBtnS}
                  onPress={toBack}                 
                 >
                  <Text style={styles.textAlert}>Voltar</Text>
                </Pressable>
              

            </View>



          </View>



          <View style={styles.containerDesc}>


            <View style={styles.contentDesc}>

              <Image
                style={styles.resizeModel}
                /* source={require(`../../../assets/construction.PNG`)} */
                source={require('../../../assets/construction.png')}
              />

              <Text style={styles.textInfo}>{`Obra selecionada `}</Text>

            </View>


            <View style={styles.contentDesc}>

              
              <Text style={styles.textInfo}>{`Nome ${selectContruction.name}`}</Text>
              <Text style={styles.textInfo}>{`Responsável ${selectContruction.responsable}`}</Text>
             

              {/* 
              <Text style={styles.textInfo}>{`Nome selectContruction.name}`}</Text>
              <Text style={styles.textInfo}>{`Responsável selectContruction.responsable`}</Text>
             */}
            </View>

          </View>




          <View style={styles.containerData}>

            <View style={styles.contentData}>

              <View style={styles.containerHeaderData}>


                <View style={styles.contentHeaderDataInfoOne}>

                  <Image
                    style={styles.resizeModelS}
                    source={require(`../../../assets/logo_one.png`)}
                  />

                  <Text style={styles.textInfo}>{day}</Text>



                  <View>
                    {
                      checkIR.opcao == 0
                        ?
                        <View>
                          <Image
                            style={styles.resizeModelS}
                            source={checkIR.flag}
                          />
                        </View>
                        :
                        checkIR.opcao == 1
                          ?
                          <View>
                            <Image
                              style={styles.resizeModelS}
                              source={checkIR.flag}
                            />
                          </View>
                          :
                          <View>
                            <Image
                              style={styles.resizeModelS}
                              source={checkIR.flag}
                            />
                          </View>
                    }
                  </View>



                </View>

                <View style={styles.contentHeaderDataInfoTwo}>
                  <Text style={styles.textInfo}>{illnessRisk.title}</Text>
                  <Text style={styles.textInfo}>{illnessRisk.subtitle}</Text>
                </View>

              </View>

              <Pressable style={styles.containerBtn}>
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
                // numberOfLines={10}
                rows={3}
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
                rows={3}
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
                rows={3}
                multiline={true}
                onChangeText={
                  (valor) => handleInputChangeIllnessRisk('action', valor)
                }
              />

              <CheckBox
                options={optionsSolutionsIR}
                onChange={
                  // op => alert(op)
                  // op=>  { setStatusIR(op) && inspectionStatus(2)  }              
                  op => { inspectionIR(op) }
                }
              />

              {/*
              <CheckBox               
              options={optionsSolutionsIR}              
              onChange={ 
                     // op=> console.log("valor "+op) 
                      op=>  { ir = op }
                       }            
              />
              */}

            </View>



            <View style={styles.contentData}>

              <View style={styles.containerHeaderData}>

                <View style={styles.contentHeaderDataInfoOne}>
                  <Image
                    style={styles.resizeModelS}
                    source={require(`../../../assets/logo_one.png`)}
                  />
                  <Text style={styles.textInfo}>{day}</Text>



                  <View>
                    {
                      checkMF.opcao == 0
                        ?
                        <View>
                          <Image
                            style={styles.resizeModelS}
                            source={checkMF.flag}
                          />
                        </View>
                        :
                        checkMF.opcao == 1
                          ?
                          <View>
                            <Image
                              style={styles.resizeModelS}
                              source={checkMF.flag}
                            />
                          </View>
                          :
                          <View>
                            <Image
                              style={styles.resizeModelS}
                              source={checkMF.flag}
                            />
                          </View>
                    }
                  </View>




                </View>

                <View style={styles.contentHeaderDataInfoTwo}>
                  <Text style={styles.textInfo}>{materialFalling.title}</Text>
                  <Text style={styles.textInfo}>{materialFalling.subtitle}</Text>
                </View>

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
                rows={3}
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
                rows={3}
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
                rows={3}
                multiline={true}
                onChangeText={
                  (valor) => handleInputChangeMaterialFalling('action', valor)
                }
              // value={materialFalling.action} 
              />

              <CheckBox
                options={optionsSolutionsMF}
                onChange={
                  // op => alert(op)
                  op => { inspectionMF(op, 'mf') }
                }

              />

              {/* 
             <CheckBox 
              
              options={optionsSolutionsMF}
              
               onChange={ 
                //  op=> console.log("valor "+op) 
                op=>  { mf = op }
                }            
                 />    
             */}

            </View>



            <View style={styles.contentData}>

              <View style={styles.containerHeaderData}>

                <View style={styles.contentHeaderDataInfoOne}>
                  <Image
                    style={styles.resizeModelS}
                    source={require(`../../../assets/logo_one.png`)}
                  />
                  <Text style={styles.textInfo}>{day}</Text>


                  <View>
                    {
                      checkFR.opcao == 0
                        ?
                        <View>
                          <Image
                            style={styles.resizeModelS}
                            source={checkFR.flag}
                          />
                        </View>
                        :
                        checkFR.opcao == 1
                          ?
                          <View>
                            <Image
                              style={styles.resizeModelS}
                              source={checkFR.flag}
                            />
                          </View>
                          :
                          <View>
                            <Image
                              style={styles.resizeModelS}
                              source={checkFR.flag}
                            />
                          </View>
                    }
                  </View>



                </View>

                <View style={styles.contentHeaderDataInfoTwo}>
                  <Text style={styles.textInfo}>{fallingRisk.title}</Text>
                  <Text style={styles.textInfo}>{fallingRisk.subtitle}</Text>
                </View>

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
                rows={3}
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
                rows={3}
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
                rows={3}
                multiline={true}
                onChangeText={
                  (valor) => handleInputChangeFallingRisk('action', valor)
                }
              />

              <CheckBox
                options={optionsSolutionsFR}
                onChange={
                  //  op => alert(op)
                  op => { inspectionFR(op) }
                }
              />

            </View>


            <View style={styles.contentData}>

              <View style={styles.containerHeaderData}>

                <View style={styles.contentHeaderDataInfoOne}>
                  <Image
                    style={styles.resizeModelS}
                    source={require(`../../../assets/logo_one.png`)}
                  />
                  <Text style={styles.textInfo}>{day}</Text>


                  <View>
                    {
                      checkO.opcao == 0
                        ?
                        <View>
                          <Image
                            style={styles.resizeModelS}
                            source={checkO.flag}
                          />
                        </View>
                        :
                        checkO.opcao == 1
                          ?
                          <View>
                            <Image
                              style={styles.resizeModelS}
                              source={checkO.flag}
                            />
                          </View>
                          :
                          <View>
                            <Image
                              style={styles.resizeModelS}
                              source={checkO.flag}
                            />
                          </View>
                    }
                  </View>

                </View>

                <View style={styles.contentHeaderDataInfoTwo}>
                  <Text style={styles.textInfo}>{organization.title}</Text>
                  <Text style={styles.textInfo}>{organization.subtitle}</Text>
                </View>

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
                rows={3}
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
                rows={3}
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
                rows={3}
                multiline={true}
                onChangeText={
                  (valor) => handleInputChangeOrganization('action', valor)
                }
              />

              <CheckBox
                options={optionsSolutionsO}
                onChange={
                  //op => alert(op)
                  op => { inspectionO(op) }
                }
              />

            </View>         


            <Pressable style={styles.containerBtn}
              // disabled={true}
              onPress={generetePdf}
            >
              <Text style={styles.textAlert} >pdf</Text>
            </Pressable>


          </View>

        </LinearGradient>

      </ScrollView>

      <View style={{ height: 20 }}></View>

    </KeyboardAvoidingView>

  )
}