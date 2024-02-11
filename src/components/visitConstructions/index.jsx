import React, { useState, useEffect, useContext, useRef } from 'react';

import {
  View,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';



import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesome } from '@expo/vector-icons';

import { Switch } from 'react-native-switch';

import { AuthContext } from '../../contexts/auth';



//import AsyncStorageSales from '@react-native-async-storage/async-storage';


import { Camera } from 'expo-camera';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { printToFileAsync } from 'expo-print';



export default function VisitConstructions({ navigation }) {






  const { user, day, selectContruction, setLoad, load } = useContext(AuthContext);




  /*
    useEffect(() => {
  
      navigation.addListener('focus', () => setLoad(!load))
  
    }, [load, navigation]);
  */







  // const [selectedPrinter, setSelectedPrinter] = useState();





  // camera
  const [modalCamera, setModalCamera] = useState(false);
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back)





  const [modalInspection, setModalInspection] = useState(false);





  // img 
  const pendingImg = require('../../../assets/pendente.png');
  const sortedImg = require('../../../assets/resolvido.png');

  const [checkOne, setCheckOne] = useState(true);
  const [checkTwo, setCheckTwo] = useState(true);
  const [checkThree, setCheckThree] = useState(true);
  const [checkFour, setCheckFour] = useState(true);



  const [boxImage, setBoxImage] = useState("");






  /*
  const [subjectOne, setSubjectOne] = useState(
    {
      title: "",
      subtitle: "",
      cause: "",
      policy: "",
      action: "",
      imgOne: null,
      imgTwo: null
    }
  );


  const [subjectTwo, setSubjectTwo] = useState(
    {
      title: "",
      subtitle: "",
      cause: "",
      policy: "",
      action: "",
      imgOne: null,
      imgTwo: null
    }
  );




  const [subjectThree, setSubjectThree] = useState(
    {
      title: "",
      subtitle: "",
      cause: "",
      policy: "",
      action: "",
      imgOne: null,
      imgTwo: null
    }
  );


  const [subjectFour, setSubjectFour] = useState(
    {
      title: "",
      subtitle: "",
      cause: "",
      policy: "",
      action: "",
      imgOne: null,
      imgTwo: null
    }
  );
  */







  const toBack = () => {
    navigation.navigate("Home")
  }





  // camera

  const changeImg = async (value) => {

    switch (value) {

      case 'subjectOneImgOne':
        setBoxImage("one");
        setSubjectOne(
          {
            ...subjectOne, 'imgOne': null,
          }
        )
        break;

      case 'subjectOneImgTwo':
        setBoxImage("one");
        setSubjectOne(
          {
            ...subjectOne, 'imgTwo': null,
          }
        )
        break;

      case 'subjectTwoImgOne':
        setBoxImage("two");
        setSubjectTwo(
          {
            ...subjectTwo, 'imgOne': null,
          }
        )
        break;

      case 'subjectTwoImgTwo':
        setBoxImage("two");
        setSubjectTwo(
          {
            ...subjectTwo, 'imgTwo': null,
          }
        )
        break;

      case 'subjectThreeImgOne':
        console("implementar subjectThreeImgOne ");
        break;


      case 'subjectThreeImgTwo':
        console("implementar subjectThreeImgTwo ");
        break;


      case 'subjectFourImgOne':
        console("implementar subjectFourImgOne ");
        break;


      case 'subjectTFourImgTwo':
        console("implementar subjectFourImgTwo ");
        break;

      default:
        console("erro no switch do metodo changeImg ");
        break;
    }

    setModalCamera(true);
  }









  async function takePicture() {

    if (camRef) {

      //const options = { quality: 0.5, base64: true };
      const dataImg = await camRef.current.takePictureAsync();

      console.log(dataImg);

      setModalCamera(false);


      console.log(" box " + boxImage);

      switch (boxImage) {


        case "one":

          if (subjectOne.imgOne == null && subjectOne.imgTwo == null) {

            setSubjectOne(
              {
                ...subjectOne, 'imgOne': dataImg.uri,
              }
            )

          } else if (subjectOne.imgOne != null && subjectOne.imgTwo == null) {

            setSubjectOne(
              {
                ...subjectOne, 'imgTwo': dataImg.uri,
              }
            )

          } else if (subjectOne.imgOne == null && subjectOne.imgTwo != null) {

            setSubjectOne(
              {
                ...subjectOne, 'imgOne': dataImg.uri,
              }
            )
          }

          break;


        case "two":

          if (subjectTwo.imgOne == null && subjectTwo.imgTwo == null) {

            setSubjectTwo(
              {
                ...subjectTwo, 'imgOne': dataImg.uri,
              }
            )

          } else if (subjectTwo.imgOne != null && subjectTwo.imgTwo == null) {

            setSubjectTwo(
              {
                ...subjectTwo, 'imgTwo': dataImg.uri,
              }
            )

          } else if (subjectTwo.imgOne == null && subjectTwo.imgTwo != null) {

            setSubjectTwo(
              {
                ...subjectTwo, 'imgOne': dataImg.uri,
              }
            )
          }

          break;


        case "three":

          console.log(" implementar takepicture case three ");

          break;


        case "four":

          console.log(" implementar takepicture case four ");

          break;

        default:

          console.log(" padrao ");
      }

    }

  }





  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };





  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };



  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };


  /*
    let generetePdf = async () => {
      const file = await printToFileAsync({
        html: createDynamicData(),
        base64: false
      });
      await shareAsync(file.uri);
    }
  */












  let optionSwitchOne = async () => {

    setCheckOne(!checkOne)

    if (!checkOne) {

      setSubjectOne(
        {
          ...subjectOne, flag: pendingImg
        }
      )

    } else {

      setSubjectOne(
        {
          ...subjectOne, flag: sortedImg
        }
      )

    }
    console.log(" check one " + checkOne + "     " + subjectOne.flag)
  }











  let optionSwitchTwo = async () => {

    setCheckTwo(!checkTwo)

    if (!checkTwo) {

      setSubjectTwo(
        {
          ...subjectTwo, flag: pendingImg
        }
      )

    } else {

      setSubjectTwo(
        {
          ...subjectTwo, flag: sortedImg
        }
      )

    }
    console.log(" check two " + checkTwo + "     " + subjectTwo.flag)
  }






  let optionSwitchThree = async () => {

    setCheckThree(!checkThree)

    if (!checkThree) {

      setSubjectThree(
        {
          ...subjectThree, flag: pendingImg
        }
      )

    } else {

      setSubjectThree(
        {
          ...subjectThree, flag: sortedImg
        }
      )

    }
    console.log(" check three " + checkThree + "     " + subjectThree.flag)
  }





  let optionSwitchFour = async () => {

    setCheckFour(!checkFour)

    if (!checkFour) {

      setSubjectFour(
        {
          ...subjectFour, flag: pendingImg
        }
      )

    } else {

      setSubjectFour(
        {
          ...subjectFour, flag: sortedImg
        }
      )

    }
    console.log(" check four " + checkFour + "     " + subjectFour.flag)
  }










  const handleInputChange = (atribute, value) => {

    setSubjectOne(
      {
        ...subjectOne, [atribute]: value
      }
    )

  }


  const handleInputChangeTwo = (atribute, value) => {

    setSubjectTwo(
      {
        ...subjectTwo, [atribute]: value
      }
    )

  }


  const handleInputChangeThree = (atribute, value) => {

    setSubjectThree(
      {
        ...subjectThree, [atribute]: value
      }
    )

  }


  const handleInputChangeFour = (atribute, value) => {

    setSubjectFour(
      {
        ...subjectFour, [atribute]: value
      }
    )

  }







  var dataArray = [];

  function createDynamicData() {


    if (subjectOne.action != "" || subjectOne.cause != "" || subjectOne.policy != "") {

      dataArray.push({
        t: subjectOne.title,
        sb: subjectOne.subtitle,
        c: subjectOne.cause,
        p: subjectOne.policy,
        a: subjectOne.action,
        sf: subjectOne.flag
      })

    }


    if (subjectTwo.cause != "") {

      dataArray.push({
        t: subjectTwo.title,
        sb: subjectTwo.subtitle,
        c: subjectTwo.cause,
        p: subjectTwo.policy,
        a: subjectTwo.action,
        sf: subjectTwo.flag
      })

    }


    if (subjectThree.cause != "") {

      dataArray.push({
        t: subjectThree.title,
        sb: subjectThree.subtitle,
        c: subjectThree.cause,
        p: subjectThree.policy,
        a: subjectThree.action,
        sf: subjectThree.flag
      })

    }


    if (subjectFour.cause != "") {

      dataArray.push({
        t: subjectFour.title,
        sb: subjectFour.subtitle,
        c: subjectFour.cause,
        p: subjectFour.policy,
        a: subjectFour.action,
        sf: subjectFour.flag
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
       





         <p
         style=
          "
          text-transform: uppercase;
          text-align: left;  
          font-size: 20px;        
          "         
          >irregularidade
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
           >${item.c}           
         </div> 





         <p
         style=
          "
          text-transform: uppercase;
          text-align: left;
          font-size: 20px;          
          "         
          >normas técnicas
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
           >${item.p}
         </div>

       








         <p
         style=
          "
          text-transform: uppercase;
          text-align: left; 
          font-size: 20px;         
          "         
          >Medidas de ação
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
          >${item.a}
        </div>




      </div> 
       `
    }








    const html =
      `
  <html>

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />


  <style>   

    body{
     padding: 0;
     margin: 0;
     text-align: center;    
    }  
 
    #container-intru{
      display:block;
      width: 'auto';
      height: 'auto';
      background-color: rgba(27, 59, 78, 1);
      background-image: linear-gradient(to bottom, transparent, rgba(27, 59, 78, 0.5));
      padding: 20px;          
    }
  
   #content-intru{
       display:flex;
       justify-content: center;   
       height: 75%;
       width: "auto";
       padding: 20px;
       background-color:rgb(223, 223, 223);  
    }
 
   #content-day{
     height: 'auto';
     width: 14%;     
     background-color:rgb(243, 1, 1);  
     border-style: solid;
     border-color: rgb(148, 183, 189);
     border-radius: 10px;             
  }
 
  #title-day{
     transform: rotate(-90deg);
     font-size: 60px; 
     font-family: Helvetica Neue; 
     font-weight: normal;
     margin-top: 150px;
     color:rgb(206, 179, 143) ;
  }
 
    #intru-img-company{
     height: 20%;
     width: 20%;    
 }

 #company-info{  
   display:block;
   height: 80%;
   width: 40%;
   background-color:rgb(223, 223, 223);
   margin-bottom: 60px;
 }
 
 #company-one{  
   display:block; 
   width: 'auto'; 
   background-color:rgb(223, 223, 223);  
   margin-bottom: 60px;    
 }

 #company-two{
   width: 'auto'; 
   display:block;  
   background-color:rgb(223, 223, 223);  
 } 

 #intru-title{
       height: 'auto';
       width: 60%;
       position: absolute;
       text-transform: uppercase;
       font-size: 28px;          
       margin-top: 66%;      
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
     height: 10%;
     width: 10%;       
 }
 
  #container-rel{
  width: 'auto';
  height: 'auto';
  background-color: rgba(27, 59, 78, 1);
  background-image: linear-gradient(to bottom, transparent, rgba(27, 59, 78, 0.5));
  padding: 20px;
}
 
 #card{
       display:block;
       height: 'auto';
       width: "auto";
       padding: 10px;
       background-color:white;
       margin-bottom: 10px;    
 }
  
   #header{
     display:block;   
     height: 'auto';
     width: 'auto';
     background-color:rgb(5, 66, 18)
   }      
  
   #header-info-one{
     display:flex;
     justify-content: space-between;
     height: 'auto';
     width: 'auto';
     background-color:rgb(31, 117, 50)
   } 
   
   #header-desc{
     display:block;
   } 
 
   #header-info-two{
     display:flex;
     justify-content: space-between;
     height: 'auto';
     width: 'auto';
     background-color:rgb(31, 117, 50)
   }  

   #card-img-company{
    height: 10%;
    width: 10%;
  }
 
   #card-img{
     display:flex;
     justify-content: space-around;
     height: 'auto';
     width: 'auto';
     padding: 20px;
     background-color:rgb(54, 31, 117);       
   }

   #card-img-register{
    height: 16%;
    width: 16%;
  }

   #card-text{
     text-transform: uppercase;
     text-align: left;   
   } 
 
   #article{      
     height: 112px;
     width: 'auto';
     background-color:rgb(72, 92, 95);
     margin-bottom: 10px;
     border-style: solid;
     border-color: rgb(194, 138, 146);
     color:rgb(206, 179, 143) ;       
   }
 
  #footer{
     display:flex;
     justify-content: space-between;
     height: 'auto';
     width: 'auto';
     padding: 18px;
  background-color:rgb(117, 97, 31)
 }  
 
 #footer-img-company{
  height: 10%;
  width: 10%;   
}

</style>   

</head>


<body>

<div>
  <h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
    RFIDEAFACTORY51 
  </h1>
</div>  


<section id="container-intru"> 
  
    <div id="content-intru">
       <div id="content-day">
           <p id="title-day">data</p>
       </div>

       <div id="company-info">
          <div id="company-one">   
              <img src="data:image/png;base64,${imgOne}" id="intru-img-company"/>
              <h3>empresa</h3>
              <h4>endereco</h4>
          </div>  
          <div id="company-two">    
              <img src="data:image/png;base64,${imgOne}" id="intru-img-company"/>
              <h3>empresa</h3>
              <h4>endereco</h4>
          </div>            
       </div>

       <div id="intru-title">
          <h1>relatório técnico</h1>
       </div>
    </div>



    <div id="intru-footer">  
      <img src="data:image/png;base64,${imgOne}" id="intru-img-fotter"/> 
      <div>
         <h3>empresa</h3>
         <h4>endereco</h4>
      </div>
    </div>  

</section>

<section id="container-rel">

  <div id="card">

   <div id="header">

     <div id="header-info-one" >             
       
        <img src="data:image/png;base64,${imgOne}" id="card-img-company"/> 

        <div id="header-desc">
          <h1>Risco de Doenças</h1>

          <h3>Ploliferação de insetos</h3>
        </div>

        <img src="data:image/png;base64,${imgOne}" id="card-img-company"/>          

     </div>

       <div id="header-info-two">data</div>

   </div>

   <div id="card-img">      
      <img src="data:image/png;base64,${imgOne}" id="card-img-register""/>
                 
      <img src="data:image/png;base64,${imgOne}" id="card-img-register"/>
   </div>

  <div>
     <h2 id="card-text">Irregularidade:</h2>
      <div id="article">
         ${item.cause}
     </div>

     <h2 id="card-text">Embasamento Técnico:</h2>
      <div id="article">
         ${item.policy}
      </div>

      <h2 id="card-text">Medida de Ação:</h2>
      <div id="article">
         ${item.action}
      </div>    
  </div>


  <div id="footer"> 
    <img src="data:image/png;base64,${imgOne}" id="footer-img-company"/>    

    <div id="footer-info" >
       <h2>empresa</h2>
       <h4>endereço</h4>
    </div>
  </div>

</section>

    <img src="data:image/png;base64,${imgOne}" style="width: 90vw; "/>

      <div>${inspectionData}</div>  

  </body>
</html>
  `;
    return html;
  }












  return (



    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >





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
            <Pressable style={styles.styleBtnS}
              onPress={toBack}
            >
              <Text style={styles.textAlert}>Voltar</Text>
            </Pressable>
          </View>
        </View>




        <View style={styles.containerDesc}>

          {/* 
            <View style={styles.contentDesc}>
              <Image
                // source={{ uri: `data:image/png;base64,${selectContruction.img}` }}
                source={{ uri: selectContruction.img }}
                style={styles.resizeModelB}
              />
              <Text style={styles.textInfo}>{`Obra selecionada `}</Text>
            </View>

 */}
          <View style={styles.contentDesc}>

            {/*  
              <Text style={styles.textInfo}>{`Nome ${selectContruction.name}`}</Text>
              <Text style={styles.textInfo}>{`Responsável ${selectContruction.responsable}`}</Text>
             */}

            <Text style={styles.textInfo}>{`Nome selectContruction.name}`}</Text>
            <Text style={styles.textInfo}>{`Responsável selectContruction.responsable`}</Text>


          </View>


        </View>




        <View>

          <Pressable style={styles.styleBtn}
            onPress={() => setModalInspection(true)}
          >
            <Text style={styles.textInfo} >Relatório</Text>
          </Pressable>

        </View>





        <View style={styles.containerList}>


          <View style={styles.contentList}>





            {/* 
              <FlatList

                // showsVerticalScrollIndicator={false}

                data={reportList}

                renderItem={({ item }) =>


                  <View>

                    
                  </View>



                }

              >

              </FlatList>

          */}


          </View>


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
                () => createDynamicReport()

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



































        {/*  
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
                      checkOne ?
                        <Image
                          style={styles.resizeModelS}
                          source={sortedImg}
                        />
                        :
                        <Image
                          style={styles.resizeModelS}
                          source={pendingImg}
                        />
                    }
                  </View>
                </View>

                <View style={styles.contentHeaderDataInfoTwo}>

                  <Text style={styles.textTitle}>{subjectOne.title}</Text>
                  <TextInput
                    style={styles.inputTitle}
                    underlineColorAndroid="transparent"
                    placeholder="Titulo:"
                    placeholderTextColor="white"
                    onChangeText={
                      (valor) => handleInputChangeOne('title', valor)
                    }
                  />


                  <Text style={styles.textTitle}>{subjectOne.subtitle}</Text>
                  <TextInput
                    style={styles.inputTitle}
                    underlineColorAndroid="transparent"
                    placeholder="SubTitulo:"
                    placeholderTextColor="white"
                    onChangeText={
                      (valor) => handleInputChangeOne('subtitle', valor)
                    }
                  />

                </View>
              </View>



              <View style={styles.containerImgSpace}>
                <View style={styles.contentImgSpace}>
                  <Image
                    style={styles.resizeModelB}
                    source={{ uri: subjectOne.imgOne }}
                  />
                  {
                    subjectOne.imgOne == null ?
                      <View></View>
                      :
                      <View >
                        <Pressable style={styles.styleBtnS}
                          onPress={() => {
                            changeImg('subjectOneImgOne')
                          }}
                        >
                          <Text style={styles.textData} >Mudar a foto</Text>
                        </Pressable>
                      </View>
                  }
                </View>

                <View style={styles.contentImgSpace}>
                  <Image
                    style={styles.resizeModelB}
                    source={{ uri: subjectOne.imgTwo }}
                  />
                  {
                    subjectOne.imgTwo == null ?
                      <View></View>
                      :
                      <View >
                        <Pressable style={styles.styleBtnS}
                          onPress={() => {
                            changeImg('subjectOneImgTwo')
                          }}
                        >
                          <Text style={styles.textData} >Mudar a foto</Text>
                        </Pressable>
                      </View>
                  }
                </View>
              </View>



              <Pressable
                style={styles.styleBtn}
                onPress={() => setModalCamera(true) & setBoxImage("one")}
              >
                <Text style={styles.textAlert} >selecione uma foto</Text>
              </Pressable>



              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="IRREGULARIDADE:"
                placeholderTextColor="white"
                // numberOfLines={10}
                rows={3}
                multiline={true}
                onChangeText={
                  (valor) => handleInputChangeOne('cause', valor)
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
                  (valor) => handleInputChangeOne('policy', valor)
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
                  (valor) => handleInputChangeOne('action', valor)
                }
              />

              <View style={styles.switchBox}>
                <Switch
                  value={checkOne}
                  onValueChange={
                    () =>
                      optionSwitchOne()
                  }
                  //disabled={true}
                  activeText={'Resolvido'}
                  inActiveText={'Pendente'}
                  circleSize={24}
                  barHeight={30}
                  backgroundActive='green'
                  backgroundInactive='red'
                  //renderInsideCircle={()=><Text>S.G</Text>}
                  switchBorderRadius={5}
                  switchWidthMultiplier={4}
                  switchLeftPx={16}
                  switchRightPx={16}
                />
              </View>
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
                      checkTwo ?
                        <Image
                          style={styles.resizeModelS}
                          source={sortedImg}
                        />
                        :
                        <Image
                          style={styles.resizeModelS}
                          source={pendingImg}
                        />
                    }
                  </View>
                </View>
                <View style={styles.contentHeaderDataInfoTwo}>

                  <Text style={styles.textTitle}>{subjectTwo.title}</Text>
                  <TextInput
                    style={styles.inputTitle}
                    underlineColorAndroid="transparent"
                    placeholder="Titulo:"
                    placeholderTextColor="white"
                    onChangeText={
                      (valor) => handleInputChangeTwo('title', valor)
                    }
                  />

                  <Text style={styles.textTitle}>{subjectTwo.subtitle}</Text>
                  <TextInput
                    style={styles.inputTitle}
                    underlineColorAndroid="transparent"
                    placeholder="SubTitulo:"
                    placeholderTextColor="white"
                    onChangeText={
                      (valor) => handleInputChangeTwo('subtitle', valor)
                    }
                  />

                </View>
              </View>





              <View style={styles.containerImgSpace}>


                <View style={styles.contentImgSpace}>
                  <Image
                    style={styles.resizeModelB}
                    source={{ uri: subjectTwo.imgOne }}
                  />
                  {
                    subjectTwo.imgOne == null ?
                      <View></View>
                      :
                      <View >
                        <Pressable style={styles.styleBtnS}
                          onPress={() => {
                            changeImg('subjectTwoImgOne')
                          }}
                        >
                          <Text style={styles.textData} >Mudar a foto</Text>
                        </Pressable>
                      </View>
                  }
                </View>


                <View style={styles.contentImgSpace}>
                  <Image
                    style={styles.resizeModelB}
                    source={{ uri: subjectTwo.imgTwo }}
                  />
                  {
                    subjectTwo.imgTwo == null ?
                      <View></View>
                      :
                      <View >
                        <Pressable style={styles.styleBtnS}
                          onPress={() => {
                            changeImg('subjectTwoImgTwo')
                          }}
                        >
                          <Text style={styles.textData} >Mudar a foto</Text>
                        </Pressable>
                      </View>
                  }
                </View>
              </View>








              <Pressable
                style={styles.styleBtn}
                onPress={() => setModalCamera(true) & setBoxImage("two")}
              >
                <Text style={styles.textAlert} >selecione uma foto</Text>
              </Pressable>










              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="IRREGULARIDADE:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={3}
                multiline={true}
                onChangeText={
                  (valor) => handleInputChangeTwo('cause', valor)
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
                  (valor) => handleInputChangeTwo('policy', valor)
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
                  (valor) => handleInputChangeTwo('action', valor)
                }
              // value={materialFalling.action} 
              />
              <View style={styles.switchBox}>
                <Switch
                  value={checkTwo}
                  onValueChange={
                    () =>
                      optionSwitchTwo()
                  }
                  //disabled={true}
                  activeText={'Resolvido'}
                  inActiveText={'Pendente'}
                  circleSize={24}
                  barHeight={30}
                  backgroundActive='green'
                  backgroundInactive='red'
                  //renderInsideCircle={()=><Text>S.G</Text>}
                  switchBorderRadius={5}
                  switchWidthMultiplier={4}
                  switchLeftPx={16}
                  switchRightPx={16}
                />
              </View>
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
                      checkThree ?
                        <Image
                          style={styles.resizeModelS}
                          source={sortedImg}
                        />
                        :
                        <Image
                          style={styles.resizeModelS}
                          source={pendingImg}
                        />
                    }
                  </View>
                </View>
                <View style={styles.contentHeaderDataInfoTwo}>
                  <Text style={styles.textTitle}>{subjectThree.title}</Text>
                  <TextInput
                    style={styles.inputTitle}
                    underlineColorAndroid="transparent"
                    placeholder="Titulo:"
                    placeholderTextColor="white"
                    onChangeText={
                      (valor) => handleInputChangeThree('title', valor)
                    }
                  />


                  <Text style={styles.textTitle}>{subjectThree.subtitle}</Text>
                  <TextInput
                    style={styles.inputTitle}
                    underlineColorAndroid="transparent"
                    placeholder="SubTitulo:"
                    placeholderTextColor="white"
                    onChangeText={
                      (valor) => handleInputChangeThree('subtitle', valor)
                    }
                  />

                </View>
              </View>




              <View style={styles.containerImgSpace}>

                <View style={styles.contentImgSpace}>
                  <Image
                    style={styles.resizeModelB}
                    source={{ uri: subjectThree.imgOne }}
                  />
                  {
                    subjectThree.imgOne == null ?
                      <View></View>
                      :
                      <View >
                        <Pressable style={styles.styleBtnS}
                          onPress={() => {
                            changeImg('subjectThreeImgOne')
                          }}
                        >
                          <Text style={styles.textData} >Mudar a foto</Text>
                        </Pressable>
                      </View>
                  }
                </View>

                <View style={styles.contentImgSpace}>
                  <Image
                    style={styles.resizeModelB}
                    source={{ uri: subjectThree.imgTwo }}
                  />
                  {
                    subjectThree.imgTwo == null ?
                      <View></View>
                      :
                      <View >
                        <Pressable style={styles.styleBtnS}
                          onPress={() => {
                            changeImg('subjectThreeImgTwo')
                          }}
                        >
                          <Text style={styles.textData} >Mudar a foto</Text>
                        </Pressable>
                      </View>
                  }
                </View>
              </View>


              <Pressable
                style={styles.styleBtn}
                onPress={() => setModalCamera(true) & setBoxImage("three")}
              >
                <Text style={styles.textAlert} >selecione uma foto</Text>
              </Pressable>


              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="IRREGULARIDADE:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={3}
                multiline={true}
                onChangeText={
                  (valor) => handleInputChangeThree('cause', valor)
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
                  (valor) => handleInputChangeThree('policy', valor)
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
                  (valor) => handleInputChangeThree('action', valor)
                }
              />
              <View style={styles.switchBox}>
                <Switch
                  value={checkThree}
                  onValueChange={
                    () =>
                      optionSwitchThree()
                  }
                  //disabled={true}
                  activeText={'Resolvido'}
                  inActiveText={'Pendente'}
                  circleSize={24}
                  barHeight={30}
                  backgroundActive='green'
                  backgroundInactive='red'
                  //renderInsideCircle={()=><Text>S.G</Text>}
                  switchBorderRadius={5}
                  switchWidthMultiplier={4}
                  switchLeftPx={16}
                  switchRightPx={16}
                />
              </View>
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
                      checkFour ?
                        <Image
                          style={styles.resizeModelS}
                          source={sortedImg}
                        />
                        :
                        <Image
                          style={styles.resizeModelS}
                          source={pendingImg}
                        />
                    }
                  </View>
                </View>
                <View style={styles.contentHeaderDataInfoTwo}>
                  <Text style={styles.textTitle}>{subjectFour.title}</Text>
                  <TextInput
                    style={styles.inputTitle}
                    underlineColorAndroid="transparent"
                    placeholder="Titulo:"
                    placeholderTextColor="white"
                    onChangeText={
                      (valor) => handleInputChangeFour('title', valor)
                    }
                  />


                  <Text style={styles.textTitle}>{subjectFour.subtitle}</Text>
                  <TextInput
                    style={styles.inputTitle}
                    underlineColorAndroid="transparent"
                    placeholder="SubTitulo:"
                    placeholderTextColor="white"
                    onChangeText={
                      (valor) => handleInputChangeFour('subtitle', valor)
                    }
                  />

                </View>
              </View>



              <View style={styles.containerImgSpace}>

                <View style={styles.contentImgSpace}>
                  <Image
                    style={styles.resizeModelB}
                    source={{ uri: subjectFour.imgOne }}
                  />
                  {
                    subjectFour.imgOne == null ?
                      <View></View>
                      :
                      <View >
                        <Pressable style={styles.styleBtnS}
                          onPress={() => {
                            changeImg('subjectFourImgOne')
                          }}
                        >
                          <Text style={styles.textData} >Mudar a foto</Text>
                        </Pressable>
                      </View>
                  }
                </View>

                <View style={styles.contentImgSpace}>
                  <Image
                    style={styles.resizeModelB}
                    source={{ uri: subjectFour.imgTwo }}
                  />
                  {
                    subjectFour.imgTwo == null ?
                      <View></View>
                      :
                      <View >
                        <Pressable style={styles.styleBtnS}
                          onPress={() => {
                            changeImg('subjectFourImgTwo')
                          }}
                        >
                          <Text style={styles.textData} >Mudar a foto</Text>
                        </Pressable>
                      </View>
                  }
                </View>
              </View>



              <Pressable
                style={styles.styleBtn}
                onPress={() => setModalCamera(true) & setBoxImage("four")}
              >
                <Text style={styles.textAlert} >selecione uma foto</Text>
              </Pressable>






              <TextInput
                style={styles.textAreaContainer}
                underlineColorAndroid="transparent"
                placeholder="IRREGULARIDADE:"
                placeholderTextColor="white"
                //numberOfLines={10}
                rows={3}
                multiline={true}
                onChangeText={
                  (valor) => handleInputChangeFour('cause', valor)
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
                  (valor) => handleInputChangeFour('policy', valor)
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
                  (valor) => handleInputChangeFour('action', valor)
                }
              />
              <View style={styles.switchBox}>
                <Switch
                  value={checkFour}
                  onValueChange={
                    () =>
                      optionSwitchFour()
                  }
                  //disabled={true}
                  activeText={'Resolvido'}
                  inActiveText={'Pendente'}
                  circleSize={24}
                  barHeight={30}
                  backgroundActive='green'
                  backgroundInactive='red'
                  //renderInsideCircle={()=><Text>S.G</Text>}
                  switchBorderRadius={5}
                  switchWidthMultiplier={4}
                  switchLeftPx={16}
                  switchRightPx={16}
                />
              </View>
            </View>


            <Pressable style={styles.styleBtn}
              // disabled={true}
              onPress={print}
            >
              <Text style={styles.textAlert} >pdf</Text>
            </Pressable>


        </View>

 */}






      </LinearGradient>







      <Modal
        animationType='fade'
        visible={modalCamera}
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

          <Text style={styles.textMain}>Camera</Text>

          <Camera
            style={styles.containnerCamera}
            type={type}
            ref={camRef}
          >

            <View style={styles.contentCamera}>

              <Pressable style={styles.btnCameraFlip}

                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <FontAwesome name='exchange' size={22} color={"#F3102F"} />
              </Pressable>


              <Pressable style={styles.btnCameraTake}
                onPress={() => takePicture()}
              >
                <FontAwesome name='camera' size={22} color={"#FCF9F8"} />
              </Pressable>

            </View>

          </Camera>


          <Pressable style={styles.styleBtn}
            onPress={() => setModalCamera(false)}
          >
            <Text style={styles.textInfo} >desligar a camera</Text>
          </Pressable>

        </LinearGradient>

      </Modal>






      <View style={{ height: 20 }}></View>

    </KeyboardAvoidingView>

  )
}