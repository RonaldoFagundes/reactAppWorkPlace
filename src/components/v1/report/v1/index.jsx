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


import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import * as Print from 'expo-print';


export default function Report({ navigation }) {


  const {
    endpointPhp,
    user,
    setLoad, load,
    setIdReport,
    idConstruction,
    nameConstruction,
    imgConstruction,
  } = useContext(AuthContext);


  const [reportList, setReportList] = useState([]);

 
  const [selectedPrinter , setSelectedPrinter] = useState();



  useEffect(() => {
    navigation.addListener('focus', () => setLoad(!load));
    listReport();
  }, [load, navigation]);





  const listReport = async () => {
    await fetch(endpointPhp + "?action=list_report", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idConstruction
      })
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setReportList(result)
           console.log(result)
        })
      .catch((error) => console.error(error));
  }

 

  const selectReport = (id) => {
    setIdReport(id);
    navigation.navigate("SelectReport");
  }








  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
      await Print.printAsync({
       html:createDynamicData(),
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











   /*
  const print = async () => {   
    createDynamicData();
    const file = await printToFileAsync({
      html: html,
      base64: true
    });
    await shareAsync(file.uri);
  };
  */





  
  
 // const array = new Array();
  const createDynamicData = () => {

     var reportData = '';
     for (let i in reportList) {
      const item = reportList[i];

   /*    
     for(let i in array){
     const item = array[i];
   */

      reportData = reportData + 
          `
            <div>
              
              <p>${item.date_rpt}</p>

              <p>${item.title_rpt}</p>

              <p>${item.description_rpt}</p>

              <p>${item.status_rpt}</p>              

            </div>           
          `
      }

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
           <div><img src="data:image/png;base64,${imgConstruction}"/></div>

           <div>${reportData}</div>
        </section>

      </body>

    </html>        
     `;
    return html;
  }






  






  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.containerMain} >

        <View style={styles.containerInfo}>
          <Text style={styles.textMain}>{` Tela de Relatórios `}</Text>
        </View>

        <View style={styles.containerHeader}>

          <View style={styles.userHeader}>

            <View style={styles.containerLogo} >
              <Image
                style={styles.imgLogo}
                source={{ uri: 'data:image/png;base64,' +imgConstruction }}              
              />
            </View>

            <Text style={styles.textInfo}>{`${nameConstruction}`}</Text>

          </View>

          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={() => { navigation.navigate("Home") }}>
              <Text style={styles.textAlert}>Home</Text>
            </Pressable>
          </LinearGradient>

        </View>

        <FlatList

          data={reportList}

          renderItem={({ item }) =>

            <View style={styles.contentList}>

              <View style={styles.contentImg} >
                <Image
                  style={styles.resizeModel}
                    source={{ uri: item.img_one_rpt }}  
                   /* source={{  uri: 'data:image/png;base64,' +item.img_one_rpt }}   */
                />
                <Image
                  style={styles.resizeModel}
                   source={{ uri: item.img_two_rpt }} 
                 /*  source={{ uri: 'data:image/png;base64,' +item.img_two_rpt }}  */
                />
              </View>

              <View style={styles.contentImg} >
                <Image
                  style={styles.resizeModel}
                  source={{ uri: item.img_three_rpt }} 
                  /*  source={{uri: 'data:image/png;base64,' +item.img_three_rpt }} */
                />

                <Image
                  style={styles.resizeModel}
                   source={{ uri: item.img_four_rpt }}
                  /*  source={{ uri: 'data:image/png;base64,' + item.img_four_rpt }}  */
                />
              </View>

              <View style={styles.dataList}>

                <View style={styles.contentData}>
                  <Text style={styles.textAlert}>{`Data : `}</Text>
                  <Text style={styles.textList}>{item.date_rpt}</Text>
                </View>

                <View style={styles.contentData}>
                  <Text style={styles.textAlert}>{`Titulo : `}</Text>
                  <Text style={styles.textList} >{item.title_rpt}</Text>
                </View>

                <View style={styles.contentData}>
                  <Text style={styles.textAlert}>{`Descrição : `}</Text>
                  <Text style={styles.textList}>{item.description_rpt}</Text>
                </View>

                <View style={styles.contentData}>
                  <Text style={styles.textAlert}>{`Status : `}</Text>
                  <Text style={styles.textList}>{item.status_rpt}</Text>
                </View>

              </View>

              <View style={styles.containerBtn}>

                <Pressable style={styles.styleBtnOne}

                  onPress={() => selectReport(item.id_rpt)}
                >
                  <Text style={styles.textList} >selecione</Text>

                </Pressable>

              </View>

            </View>
          }
        >
        </FlatList>

        <View style={styles.containerBtn}>

          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={() => { navigation.navigate("CadReport") }}>
              <Text style={styles.textAlert}>Novo Relatório</Text>
            </Pressable>
          </LinearGradient>

          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable
              onPress={() => print()}
            >
              <Text style={styles.textAlert}>Imprimir</Text>
            </Pressable>
          </LinearGradient>

        </View>


      </View >
    </KeyboardAvoidingView >
  );
}



/* 
 How to Create Dynamic table in PDF using HTML | React-Native | Expo
   https://www.youtube.com/watch?v=fnwiIWUlo8U

   

  var reportData = "";

  function createDynamicData2() {

    for (let i in reportList) {

      const item = reportList[i];

      reportData = reportData +

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
                     <img src="data:image/png;base64,${item.img_one_rpt}"/>
                    
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
                     <img src="data:image/png;base64,${item.img_two_rpt}"/> 
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
                     <p>${item.date_rpt}</p>
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
               <img src="data:image/png;base64,${item.img_three_rpt}"/> 
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
               <img src="data:image/png;base64,${item.img_four_rpt}"/> 
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
                >Titulo
               </p>     
                  
               <div         
                style=
                 "
                 height: 160px;
                 width: 'auto';
                 background-color:gray;
                 margin-bottom: 10px;
                 border-style: solid;
                 border-color: rgb(6, 86, 100);
                 text-align: left;
                 color:white;
                 font-size: 20px; 
                 "                 
                 >${item.title_rpt}           
               </div> 
                      
               <p
               style=
                "
                text-transform: uppercase;
                text-align: left;
                font-size: 20px;          
                "         
                >Descrição
               </p>
                            
               <div         
                style=
                "
                 height: 160px;
                 width: 'auto';
                 background-color:gray;
                 margin-bottom: 10px;
                 border-style: solid;
                 border-color: rgb(6, 86, 100);
                 text-align: left;
                 color:white;
                 font-size: 20px; 
                "         
                 >${item.description_rpt}
               </div>
                    
               <p
               style=
                "
                text-transform: uppercase;
                text-align: left; 
                font-size: 20px;         
                "         
                >Status
               </p>  
            
              <div         
               style=
               "
                height: 160px;
                width: 'auto';
                background-color:gray;
                margin-bottom: 10px;
                border-style: solid;
                border-color: rgb(6, 86, 100);
                text-align: left;
                color:white;
                font-size: 20px; 
                "           
                >${item.status_rpt}
              </div>  
            </div>             
           `
    }
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
    background-color:gray;  
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
 background-color: white;
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
   height: 20%;
   width: 20%;
 }

  #card-text{
    text-transform: uppercase;
    text-align: left;   
  } 

  #rel{      
    height: 'auto';
    width: 'auto';
    background-color:rgb(72, 92, 95);
  }

  #article{      
    height: 110px;
    width: 'auto';
    background-color:rgb(72, 92, 95);
    
    border-style: solid;
    border-color: rgb(194, 138, 146);
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
          <p id="title-day">data</p>
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
         <h1>Titulo</h1>

         <h3>Descrição</h3>
       </div>

       <img src="data:image/png;base64,${imgConstruction}" id="card-img-company"/>          

    </div>

      <div id="header-info-two">data</div>

  </div>

    <section id="rel">
         ${reportData}
    </section>

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














