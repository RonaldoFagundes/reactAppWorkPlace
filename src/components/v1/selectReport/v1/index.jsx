import {
  FlatList,
  View,
  ScrollView,
  Text, 
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable
} from 'react-native';


import React, { useContext, useEffect, useState } from 'react';

import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../contexts/auth';

import { shareAsync } from 'expo-sharing';
import { printToFileAsync } from 'expo-print';
import * as Print from 'expo-print';

//import Textarea from 'react-native-textarea/src/Textarea';




export default function SelectReport({ navigation }) {

  const {
    endpointPhp,
    idReport, 
    user,
    nameConstruction,
    imgConstruction,
    setLoad, load,  
    setIdReport,   
  } = useContext(AuthContext);



  const [reportList, setReportList] = useState([]);
 
  const [selectedPrinter , setSelectedPrinter] = useState();



    useEffect(() => { 
  
      navigation.addListener('focus', () => setLoad(!load))  
      listReportById();
    }, [load, navigation]);
  



  const listReportById = async () => {    
      await fetch(endpointPhp+"?action=list_report_by_id", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idReport
      })
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setReportList(result)
        //  console.log(result)
        })
      .catch((error) => console.error(error));
  }




  const editReport = async (id) => {      
     setIdReport(id);   
     navigation.navigate("EditReport");
  };





  const deleteReport = async (idReport) => {   
      await fetch(endpointPhp+"?action=delete_report", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idReport
      })
    })
      .then((res) => res.json())
      .then(
        (result) => {        
          navigation.navigate("Home")
          alert("Relatório deletado com sucesso");
        //  console.log(result)
        })
      .catch((error) => console.error(error));
  }





  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
      await Print.printAsync({
       html:html,
       printerUrl: selectedPrinter?.url, // iOS only
     });
    
   };



  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
     const{uri} = await Print.printToFileAsync({
        html
     });
       await shareAsync(uri,{UTI:'.pdf',mimeType:'application/pdf'});
  };




  const selectPrinter = async () => {
      const printer = await Print.selectPrinterAsync();
      setSelectedPrinter(printer);
  };



 
  const html = 
  `
 <!DOCTYPE html> 
 <html>

  <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
    
  <body>

   <section>
        
    <div>   
     
       <img src="data:image/png;base64,${imgConstruction}"/> 

       <img src="data:image/jpg;base64,${{uri:reportList.img_one_rpt}}"/> 
       <img src="data:image/png;base64,${{uri:reportList.img_two_rpt}}"/>                 
       <img src="data:image/jpg;base64,${{uri:reportList.img_three_rpt}}"/> 
       <img src="data:image/png;base64,${{uri:reportList.img_four_rpt}}"/> 

       <p>${reportList.date_rpt}</p>
       <p>${reportList.title_rpt}</p>
       <p>${reportList.description_rpt}</p>
       <p>${reportList.status_rpt}</p>

    </div>



   </section>

   </body>

 </html>        
  `;
 return html;




 
  





  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <View style={styles.containerMain} >
     
        <View style={styles.containerHeader}>

          <View style={styles.userHeader}>
        
          <View style={styles.containerLogo}>
               <Image
                  style={styles.resizeModelLogo}
                  source={{ uri: 'data:image/png;base64,' + imgConstruction }}
                 />           
            </View>        

            <Text style={styles.textInfo}>{`${nameConstruction}`}</Text>          

          </View>

          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable  onPress={() => { navigation.navigate("Home") }}>
              <Text style={styles.textAlert}>Home</Text>
            </Pressable>
          </LinearGradient>

        </View>

        <View style={styles.containerInfo}>
          <Text style={styles.textMain}>{` Relatório Selecionado `}</Text>
        </View>

        <ScrollView>      

          <View style={styles.contentImg} >
            <Image
              style={styles.resizeModel}
              source={{ uri: reportList.img_one_rpt }}
              /* source={{ uri: 'data:image/png;base64,' + reportList.img_one_rpt }} */
            />
            <Image
              style={styles.resizeModel}
              source={{ uri: reportList.img_two_rpt }}
             /*  source={{ uri: 'data:image/png;base64,' + reportList.img_two_rpt }} */
            />
          </View>

          <View style={styles.contentImg} >
            <Image
              style={styles.resizeModel}
              source={{ uri: reportList.img_three_rpt }}
             /*  source={{ uri: 'data:image/png;base64,' + reportList.img_three_rpt }} */
            />
            <Image
              style={styles.resizeModel}
              source={{ uri: reportList.img_four_rpt }}
            /*   source={{ uri: 'data:image/png;base64,' + reportList.img_four_rpt }} */
            />
          </View>

         <View style={styles.containerList}>

          <View style={styles.contentList}>
            <Text style={styles.textData}>{` Data    :   ${reportList.date_rpt}` }</Text>           
          </View>

          <View style={styles.contentList}>
            <Text style={styles.textData}>{` Titulo   :  ${reportList.title_rpt}` }</Text>           
          </View>

          <View style={styles.contentList} >
            <Text style={styles.textData}>{` Descrição :  ${reportList.description_rpt}` }</Text>
          </View>

          <View style={styles.contentList}>
            <Text style={styles.textData}>{` Status    :  ${reportList.status_rpt}` }</Text>
          </View>

        </View>

        <View style={styles.containerBtn}>
           
          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={() => editReport(reportList.id_rpt)}>
              <Text style={styles.textAlert}>Editar</Text>
            </Pressable>
          </LinearGradient>

          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={() => print()}>
              <Text style={styles.textAlert}>Imprimir</Text>
            </Pressable>
          </LinearGradient>

          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={() => deleteReport(reportList.id_rpt)}>
              <Text style={styles.textAlert}>Deletar</Text>
            </Pressable>
          </LinearGradient>
       
        </View>
       </ScrollView >
     </View >
  </KeyboardAvoidingView >
  );
}






/* 
  

const print2 = async () => {  
    const file = await printToFileAsync({
      html: html,
      base64: false
    });
    await shareAsync(file.uri);
  };






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
     padding: 36px;          
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
    font-size: 40px; 
    font-family: Helvetica Neue; 
    font-weight: normal;
    margin-top: 150px;
    color:rgb(206, 179, 143) ;
 }

#intru-img-company{
    height: 30%;
    width: 40%;    
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
      margin-top: 82%;      
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
    height: 120px;
    width: 'auto';
    padding: 10px;
    background-color:rgb(54, 31, 117);       
  }

  #card-img-register{
    object-fit: cover;
    width: 100%;
 }

  #card-text{
    text-transform: uppercase;
    text-align: left;   
  } 

  #article{      
    height: 110px;
    width: 'auto';
    background-color:rgb(72, 92, 95);
    
    border-style: solid;
    border-color: rgb(194, 138, 146);
    color:rgb(206, 179, 143) ;       
  }

  #title-article{  
    font-size: 40px; 
    font-family: Helvetica Neue; 
    font-weight: normal; 
    color:rgb(206, 179, 143) ;
  }

 #footer{
    display:flex;
    justify-content: space-between;
    height: 'auto';
    width: 'auto';
    padding: 10px;
    background-color:rgb(117, 97, 31);
    margin-top:12px;
}  

#footer-img-company{
 height: 10%;
 width: 10%;   
}

</style>   

</head>

<body>


<section id="container-intru"> 
 
   <div id="content-intru">
      <div id="content-day">
          <p id="title-day">${reportList.date_rpt}</p>
      </div>

      <div id="company-info">

         <div id="company-one">   
             <img src="data:image/png;base64,${imgConstruction}" id="intru-img-company"/>
             <h3>empresa</h3>
             <h4>endereco</h4>
         </div> 

         <div id="company-two">    
             <img src="data:image/png;base64,${imgConstruction}" id="intru-img-company"/>
             <h3>empresa</h3>
             <h4>endereco</h4>
         </div>  

      </div>

      <div id="intru-title">
         <h1>relatório técnico</h1>
      </div>

   </div>

   <div id="intru-footer">  

     <img src="data:image/png;base64,${imgConstruction}" id="intru-img-fotter"/> 

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
      
       <img src="data:image/png;base64,${imgConstruction}" id="card-img-company"/> 

       <div id="header-desc">
         <h1>Risco de Doenças</h1>

         <h3>Ploliferação de insetos</h3>
       </div>

       <img src="data:image/png;base64,${imgConstruction}" id="card-img-company"/>          

    </div>

      <div id="header-info-two">data</div>

  </div>

  <div id="card-img">       
    
     <img src="data:image/jpg;base64,${{uri:reportList.img_one_rpt}}" id="card-img-register"/> 

     <img src="data:image/png;base64,${{uri:reportList.img_two_rpt}}" id="card-img-register"/> 
                
     <img src="data:image/jpg;base64,${{uri:reportList.img_three_rpt}}" id="card-img-register"/> 

     <img src="data:image/png;base64,${{uri:reportList.img_four_rpt}}" id="card-img-register"/> 

  </div>

 <div>

    <h2 id="card-text">Titulo:</h2>
     <div id="article">
       <span id="title-article"> ${reportList.title_rpt}</span>
    </div>


    <h2 id="card-text">Descrição:</h2>
     <div id="article">
       <span id="title-article">${reportList.description_rpt}</span>
     </div>


     <h2 id="card-text">Status:</h2>
     <div id="article">
       <span id="title-article">${reportList.status_rpt}</span>
     </div> 

 </div>

 <div id="footer">    
  
   <img src=${`data:image/png;base64,${imgConstruction}`} id="footer-img-company" />

   <div id="footer-info" >
      <h2>empresa</h2>
      <h4>endereço</h4>
   </div>
 </div>

</section>

 </body>
</html>

 `; 

*/












