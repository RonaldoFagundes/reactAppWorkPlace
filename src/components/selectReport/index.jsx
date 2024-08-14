import {
  FlatList,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';


import React, { useContext, useEffect, useState } from 'react';

import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../contexts/auth';

import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import * as Print from 'expo-print';






export default function SelectReport({ navigation }) {



  const {
    endpointPhp,
    setLoad, load,
    setIdReport,
    reportNumber,
    reportStatus,
    // setReport,
    // report ,
    nameConstruction,
    enterpriseConstruction,
    addressConstruction,
    imgConstruction,
    // constructions,
    detailsCompany,
    tags,
    imgTags,    
  } = useContext(AuthContext);




  const [isLoading, setIsLoading] = useState(true);


  const [standards, setStandards] = useState([]);


  /*
  const [standard, setStandard] = useState({
    id: "",
    name: "",
    desc: "",
  });
 */







  useEffect(() => {

    navigation.addListener('focus', () => setLoad(!load))

    listReportByNumber(); 

    listStandards();

    checkImgStatus();

    console.log(" tela selectReport nome da construtora "+nameConstruction+ "   report selecionado "+reportNumber);

  }, [load, navigation]);




  const [reportList, setReportList] = useState([]);

 // const [indexImg, setIndexImg] = useState(null);

  const [imgStatus,  setImgStatus] = useState(null);

 




  /*
  const checkStandards = () => {

    console.log(
      "  img tags status [0] " + standards[0].name_sta
    )

    console.log(
      "  img tags status [1] " + standards[1].name_sta
    )

    console.log(
      "  img tags status [2] " + standards[2].name_sta
    )

    console.log(
      "  img tags status [3] " + standards[3].name_sta
    )

  }
  */


  

  const checkImgStatus = () => {

    for (let i = 0; i < imgTags.length; i++) {

     if ( reportStatus === imgTags[i].status_tag ) {
        
      //  console.log(' imgTags.length '+imgTags.length+' reportStatus '+reportStatus+' index  => '+imgTags[i].status_tag);

        setImgStatus(imgTags[i].img_tag);
       // setIndexImg(i);        
      }

    }


    /*  
    console.log(
      "  img tags status [0] "+imgTags[0].status_tag     
     )
  
     console.log(
      "  img tags status [1] "+imgTags[1].status_tag     
     )
  
     console.log(
      "  img tags status [2] "+imgTags[2].status_tag     
     )
  
     console.log(
      "  img tags status [3] "+imgTags[3].status_tag     
     )
  
    
      // console.log(imgTags.length);
      // item.status_rpt === `status: ${imgTags[0].status_tag.toLowerCase()}`
  
  
     for (i = 0; i < imgTags.length; i++) {
       if(`status: ${imgTags[i].status_tag.toLowerCase()}` === value ){
         setimgStatus(imgTags[i].img_tag);
   
       
         console.log(        
           " encontrou "+imgTags[i].status_tag+" i "+i              
          )      
      }   
           
     console.log(imgTags[i]);
    
    if(imgTags[i].status_tag === "ATENÇÃO" ){
       console.log(        
        " encontrou "+imgTags[i].status_tag+" i "+i              
         )
        }   
       console.log(
           
           "  img tags status "+imgTags[i].status_tag+" i "+i               
        )
      } 
    
    console.log(
         "  img tags status [1] "+imgTags[1].status_tag+
         " =>  img tags status [2] "+imgTags[2].status_tag      
    )
    
    for(var i =0; i < imgTags.size ; i++ ){
     
     console.log(
         " img tags id "+imgTags[i].id_tag+" img tags status "+imgTags[i].status_tag+" img tags desc "+imgTags[i].desc_tag
      )
    }   
   
     console.log(" tags id "+tags.id_sta+" name  "+tags.name)
   
     console.log(
       " img tags id "+imgTags[0].id_tag+" img tags status "+imgTags[0].status_tag+" img tags desc "+imgTags[0].desc_tag
    )
     console.log(   
       " => img tags id "+imgTags[1].id_tag+" img tags status "+imgTags[1].status_tag+" img tags desc "+imgTags[1].desc_tag
       )
     console.log(   
       " => img tags id "+imgTags[2].id_tag+" img tags status "+imgTags[2].status_tag+" img tags desc "+imgTags[2].desc_tag
      )
    */
 }







  /* 
   const selectStatus = (value) => {
     console.log("   status value =>  "+value+" status selectReport => "+`status: ${tags.status.toLowerCase()}`)
      if (value === `status: ${tags.status.toLowerCase()}` ) {     
         setStatus(tags.img);    
      }    
    
      console.log(
       " report number "+value+
       " status tags "+`status: ${tags.status.toLowerCase()}`+
       "img "+"tags.img"
     )
       
   }
  */





  /*
  const selectStatus2 = (value) => {

    switch (value) {
      case "status: atenção":
        setStatus(require('../../../assets/status_atention.png'))
        setStatus(require('../../../assets/status_atention.png'))
        break;
      case "status: resolvido":
        setStatus(require('../../../assets/status_ok.png'))
        break;
      case "status: pendente":
        setStatus(require('../../../assets/status_pedding.png'))
        break;
      case "status: previsto":
        setStatus(require('../../../assets/status_previst.png'))
        break;
    }
  }
  */

 // const [status, setStatus] = useState(null);




  const [selectedPrinter, setSelectedPrinter] = useState();


  const listReportByNumber = async () => {
    await fetch(endpointPhp + "?action=list_report_by_number", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        reportNumber
      })
    })
      .then((res) => res.json())
      .then(
        (result) => {

          if (result !== "not found") {

            setIsLoading(false);
            setReportList(result);

           // console.log(result);

            /*
            console.log(" tela select report report number " +
              reportNumber +
              "  status tela selectStatus  " +
              reportStatus
            );
            */
            // selectStatus(reportStatus);

            

          } else {
            console.log(result);
          }
        })
      .catch((error) => console.error(error));
  }




  const deleteReport = async () => {
    await fetch(endpointPhp + "?action=delete_report", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        reportNumber
      })
    })
      .then((res) => res.json())
      .then(

        (result) => {

          if (result != "delete error") {
            navigation.navigate("Report");
            alert("Relatório excluido com sucesso");
          } else {
            console.log(result);
          }
        })
      .catch(function (error) {
        console.log('erro => ' + error.message);
      });
  }




  const updateReport = (id) => {
    console.log("editar relatório id " + id);
    setIdReport(id);
    navigation.navigate("EditReport");
  }



  const printReport = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html: createDynamicData(),
      printerUrl: selectedPrinter?.url, // iOS only     
    }); 
      checkImgStatus();      
  };





  const listStandards = async () => {
    await fetch(endpointPhp + "?action=list_standards")
      .then(res => res.json())
      .then(
        (result) => {
          if (result !== "not found") {

            setStandards(result);
            /*
             {
              result.map(            
                (item ) =>  
                  console.log(" name starndard "+item.name_sta),             
                  setStandards(
                    {
                       ...standards, ['id']: item.id_sta,
                          standards, ['name']: item.name_sta,
                          standards, ['desc']: item.desc_sta,                                         
                    }
                  )
               )
             }
            */

          } else {
            console.log(result);
          }
        }
      )
      .catch(() => {
        console.log('Erro', 'Não foi possível carregar os dados de tags');
      });
  }



  /*
  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html
    });
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync();
    setSelectedPrinter(printer);
  };
   
  const printReport2 = async () => {
    createDynamicData();
    const file = await printToFileAsync({
      html: html,
      base64: true
    });
    await shareAsync(file.uri);
  };
 */



  const createDynamicData = () => {

    var dataReport = '';
    var reportData = '';


    for (let i in reportList) {

      const item = reportList[i];

      dataReport = dataReport +
        `
        <p
        style="
        transform: rotate(-90deg);
        font-size: 70px;
        font-family: Helvetica Neue;
        font-weight: normal;
        margin-top:460px;  
        color: #ffff;
        ">${item.date_rpt}</p>
       `


      reportData = reportData +
        `
        <div 
          style="
           display:block;
            height:1052px;
            width:814px;           
         ">         
            

           <div            
              style="
              display:flex;
              justify-content: space-between;
              height:15%;
              width:100%;              
            ">              

             <div
                 height:auto;
                 width:10%;                              
               ">
                 <img src="data:image/png;base64,${detailsCompany.logo}"                    
                  style="width:120px;height:120px;"  
                 />                 
               </div>              
                   

                <div
                  style="            
                    height:15%;
                    width:90%;              
                  ">
                    <p 
                      style=
                      "
                      font-size:30px;
                      color:black;                      
                      ">                               
                       ${item.title_rpt}
                    </p>
                 </div>
           
             </div>


            <div            
              style="
              display:flex;
              justify-content: space-between;
              height:15%;
              width:100%;              
            "> 

                  <div
                   style="            
                    height:15%;
                    width:80%;
                    text-align:center;              
                  ">
                    <p 
                      style=
                      "
                      font-size:30px;
                      color:black;
                      ">                               
                      ${item.description_rpt}
                    </p>
                 </div>   

                 <div
                   style=" 
                    display:block;           
                    height:15%;
                    width:20%;
                    text-align:center;              
                  ">                   
                   
                   <img src="data:image/png;base64,${imgStatus}"                    
                     style="width:60px;height:60px;"  
                    /> 

                    <p 
                      style=
                      "
                      font-size:30px;
                      color:black;                      
                      ">                               
                        ${item.status_rpt}
                    </p>

                 </div>                  

            </div>


           <div            
              style="
              display:flex;
              justify-content: space-around;
              height:25%;
              width:100%;              
              margin-bottom: 20px;
            "> 

              
              <div>

                <img src="data:image/png;base64,${item.img_one_rpt}"                    
                     style="width:260px;height:260px;"  
                    /> 
                
              </div>

              <div>

                <img src="data:image/png;base64,${item.img_two_rpt}"                    
                     style="width:260px;height:260px;"  
                /> 
               
              </div>            
              
            </div>


            <div            
              style="
              display:flex;
              justify-content: space-around;
              height:28%;
              width:100%;              
            "> 
            
              <div>
                 <img src="data:image/png;base64,${item.img_three_rpt}"                    
                     style="width:260px;height:260px;"  
                 />                 
              </div>

              <div>
                <img src="data:image/png;base64,${item.img_four_rpt}"                    
                     style="width:260px;height:260px;"  
                 />                 
              </div>             

            </div>


             <div 
              style="
               display:flex;
               justify-content: space-between;
               height:15%;
               width:100%;                           
               ">           

               <div>
                 <img src="data:image/png;base64,${detailsCompany.icon}"                    
                  style="width:80px; height:80px;  margin-top:30px;"  
                 />                 
               </div>              

                <div
                  style="
                   display:block;                   
                   height:15%;
                   width:100%;                   
                   text-align: right;
                   margin-top: 30px;
                   margin-left:20px;
                   margin-right:10px; 
                  ">

                   <h3>${detailsCompany.name}</h3>
                   <h4>${detailsCompany.address}</h4>
                   <h4>CEP ${detailsCompany.postal_cod} - ${detailsCompany.state} - ${detailsCompany.country} - ${detailsCompany.phone} - ${detailsCompany.web_site}</h4>
              
                </div>
             
             </div>              
             
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
      

<style>  

body{
      padding: 0;
      margin: 0;
      text-align: center;    
} 


#intru-container{    
        display: block;   
        height:1057px;
        width:814px;             
}

#intru-main{  
        display:flex;  
        height:86%;
        width: 100%        
}

#data-main{    
      height:100%;
      width: 26%;
      background-color: rgb(190, 111, 8);
      border-style: solid;
      border-color: black;
      border-radius: 50px;
      margin-left:10px;
      margin-top:10px;          
}
      
   
#company-main{  
        display:block;
        justify-content: center;
        height:100%;
        width: 70%;        
}


#company-img{    
       height:25%;
       width: auto; 
       margin-top:10px;       
       margin-bottom: 5px;
}


#company-img img{  
       height:180px;
       width: 180px;
}


#company-info{    
       height:auto;
       width: auto;        
       text-align: left;
	     padding-top:100px;
       padding-left:20px;
       margin-top: 40px;
}  
   
     

#company-info h3{  
     color: rgb(190, 111, 8);
     font-size: 18px;
     font-weight: bold;  
}
     

#company-info h2 {  
     font-size: 20px;  
     font-weight: bold;   
}


#company-info h2 , p{     
  color: #1c1755;   
}
  



#title-report{    
      height: auto;
      width: 70%;
      position: absolute;
      text-transform: uppercase;
      font-size: 74px;
      margin-top: 56%;
      margin-left:220px;
      color: #1c1755;       
}



#intru-footer {
      display: flex;
      justify-content: space-between;      
      height:18%;
      width:auto;      
}


#intru-footer-info {
      height: 60%;
      text-align: right;
      margin-top: 40px;
      margin-left:20px;
      margin-right:10px;      
}


#intru-footer h2 {
      color: black;
      font-size: 18px;
      font-weight: 900;
}


#intru-footer h3 {
     color: black;
     font-size: 14px;
}
     

#intru-footer-logo {
      margin-top: 60px;
      height: 10%;
      width: 10%;
}




#desc-container{    
       display: block;   
       height:1057px;
       width:814px;                 
}


#desc-header{
      display: flex;
      justify-content: space-between;      
      height:14%;
      width:auto; 
}

#desc-company-img {      
       width: 20%;
}

#desc-company-img img{
       height:120px;
       width: 120px;
}

#desc-title{  
      text-align: center;   
      width: 80%;      
      font-size: 30px;
}



  
#details-header-desc{  
      height:auto;  
      font-size: 22px;     
      width:auto;      
}



#container-desc-tags{
      display: flex;
      justify-content: space-between;
      height:22%; 
      width:auto;
}




#content-desc-tags{
    display: flex;
    justify-content: space-between;  
    text-align: left;       
}


#desc-img img{
  height:160px;
  width: 160px;
}


 #desc-info{     
   margin-left:20px;
   margin-right:10px;
 }



#container-standards{
    display: flex;
    justify-content: space-between;  
    height:auto; 
    padding: 12px;
}



#content-standards{
  display: block;         
  height:auto;
  width:auto;             
}


#standards-title h3{
   font-size: 22px;
}
    


#standards-info{
  display:flex;  
  text-align:left;
  margin-left:5px;  
}


#standards-info p{
   font-size: 14px;
   margin-left:5px;
}


     

#footer-container{
       display: block;   
       height:1050px;
       width:814px; 
}


#img-footer{
       height:82%;
       width: 100%; 
}

#img-footer img{
       height:118%;
       width: 100%;   
}  
  </style>  
   
</head>

      
<body>

   <section id="intru-container">
         
        <div id="title-report">Relatório</div>

        <div id="intru-main">
           <div id="data-main">                  
               ${dataReport}              
           </div>

           <div id="company-main">
             <div id="company-img">
                  <img src="data:image/png;base64,${detailsCompany.logo}" />
             </div>
             <div id="company-img">
                   <img src="data:image/png;base64,${imgConstruction}" />
             </div>
             <div id="company-info"> 
                  <h3>Empresa:</h3>
                  <h2>${nameConstruction}</h2>
                  <h3>Empreendimento:</h3>
                  <h2>${enterpriseConstruction}</h2>
                  <h3>Local da Obra:</h3>
                  <p>${addressConstruction}</p>
             </div> 
           </div>   
         </div> 

         <div id="intru-footer">	
	          <div id="intru-footer-logo">
              <img src="data:image/png;base64,${detailsCompany.icon}" />
	          </div>  
             <div id="intru-footer-info">
               <h2>${detailsCompany.name}</h2>
               <h3>${detailsCompany.address}</h3>
               <h3>CEP ${detailsCompany.postal_cod} - ${detailsCompany.state} - ${detailsCompany.country} - ${detailsCompany.phone} - ${detailsCompany.web_site}</h3>
            </div>
       </div>
  </section>


 <section id="desc-container">

    <div id="desc-header">   
       <div id="desc-company-img">
           <img src="data:image/png;base64,${detailsCompany.logo}" />
       </div>
       <div id="desc-title"> 
          <h3>${standards[0].name_sta}</h3>             
       </div>
     </div>

    <div id="details-header-desc">          
         <p>${standards[0].desc_sta}</p>
     </div> 


  <div id="container-desc-tags"> 
              
      <div id="content-desc-tags">
         <div id="desc-img">
            <img src="data:image/png;base64,${imgTags[0].img_tag}"/>
          </div>

          <div id="desc-info"> 
             <h3>${imgTags[0].status_tag}</h3>             
             <h3>${imgTags[0].desc_tag}</h3>    
           </div> 
       </div>    
       

      <div id="content-desc-tags">

           <div id="desc-img">
              <img src="data:image/png;base64,${imgTags[1].img_tag}"/>
           </div>

           <div id="desc-info"> 
             <h3>${imgTags[1].status_tag}</h3>             
             <h3>${imgTags[1].desc_tag}</h3>    
           </div>   

      </div>

   </div>

  <div id="container-desc-tags"> 

              
      <div id="content-desc-tags">

           <div id="desc-img">
              <img src="data:image/png;base64,${imgTags[2].img_tag}"/>
           </div>

           <div id="desc-info"> 
             <h3>${imgTags[2].status_tag}</h3>             
             <h3>${imgTags[2].desc_tag}</h3>    
           </div>   

      </div>      
       


      <div id="content-desc-tags">

           <div id="desc-img">
              <img src="data:image/png;base64,${imgTags[3].img_tag}"/>
           </div>

           <div id="desc-info"> 
             <h3>${imgTags[3].status_tag}</h3>             
             <h3>${imgTags[3].desc_tag}</h3>    
           </div>   

      </div>


   </div>



  <div id="desc-standards">

         <div id="standards-title">
           <h3>${standards[1].name_sta}</h3>
        </div>

          <div id="container-standards"> 

             <div id="content-standards">

                  <div id="standards-info">
                     <strong>${standards[2].name_sta}-</strong>
                     <span>${standards[2].desc_sta}</span>
                   </div>  

                  <div id="standards-info">
                     <strong>${standards[3].name_sta}-</strong>
                     <span>${standards[3].desc_sta}</span>
                  </div>                 

                  <div id="standards-info">
                    <strong>${standards[4].name_sta}-</strong>
                    <span>${standards[4].desc_sta}</span>
                  </div>                 

                  <div id="standards-info">
                    <strong>${standards[5].name_sta}-</strong>
                    <span>${standards[5].desc_sta}</span>
                  </div>
                 
                  <div id="standards-info">
                     <strong>${standards[6].name_sta}-</strong>
                     <span>${standards[6].desc_sta}</span>
                   </div>                   
              </div>

              <div id="content-standards">
                  <div id="standards-info">
                     <strong>${standards[7].name_sta}-</strong>
                     <span>${standards[7].desc_sta}</span>
                  </div>                 
                 
                  <div id="standards-info">
                    <strong>${standards[8].name_sta}-</strong>
                    <span>${standards[8].desc_sta}</span>
                  </div>                  
                
                  <div id="standards-info">
                    <strong>${standards[9].name_sta}-</strong>
                    <span>${standards[9].desc_sta}</span>
                  </div>               
                 
                 <div id="standards-info">
                   <strong>${standards[10].name_sta}-</strong>
                   <span>${standards[10].desc_sta}</span>
                </div>   

            </div> 

         </div>

    </div> 
      
          <div id="intru-footer">	
	          <div id="intru-footer-logo">
              <img src="data:image/png;base64,${detailsCompany.icon}" />
	          </div>  
             <div id="intru-footer-info">
               <h2>${detailsCompany.name}</h2>
               <h3>${detailsCompany.address}</h3>
               <h3>CEP ${detailsCompany.postal_cod} - ${detailsCompany.state} - ${detailsCompany.country} - ${detailsCompany.phone} - ${detailsCompany.web_site}</h3>
            </div>
        </div>

  </section>


  <section>  
     ${reportData}  
  </section>


  <section id="footer-container">

     <div id="img-footer">
        <img src="data:image/png;base64,${detailsCompany.img}" />
	   </div>      
      

      <div id="intru-footer">	
	          <div id="intru-footer-logo">
              <img src="data:image/png;base64,${detailsCompany.icon}" />
	          </div>  
             <div id="intru-footer-info">
               <h2>${detailsCompany.name}</h2>
               <h3>${detailsCompany.address}</h3>
               <h3>CEP ${detailsCompany.postal_cod} - ${detailsCompany.state} - ${detailsCompany.country} - ${detailsCompany.phone} - ${detailsCompany.web_site}</h3>
            </div>
      </div>   

  </section>


 </body>

 </html>        
    `;
    return html;
}








  if (isLoading) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    )
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <View style={styles.containerMain}>

        <View style={styles.containerHeader}>

          <View style={styles.userHeader}>

            <View>
              <Image
                style={styles.imgLogo}
                source={{ uri: 'data:image/png;base64,' + imgConstruction }}
              />

            </View>

            <Text style={styles.textInfo}>{nameConstruction}</Text>

          </View>

          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={() => { navigation.navigate("Home") }}>
              <Text style={styles.textAlert}>Voltar</Text>
            </Pressable>
          </LinearGradient>

        </View>


        <View style={styles.containerInfo}>
          <Text style={styles.textMain}>{` Relatório Selecionado `}</Text>
        </View>


        <FlatList

          data={reportList}

          renderItem={({ item }) =>

            <View style={styles.dataList}>

              {

                item.img_one_rpt != null ?

                  <View style={styles.contentImg}>

                    <Image source={{ uri: item.img_one_rpt }}
                      style={styles.resizeModel}
                    />

                    <Image source={{ uri: item.img_two_rpt }}
                      style={styles.resizeModel}
                    />

                  </View>

                  :

                  <View></View>
              }

              {

                item.img_three_rpt != null ?

                  <View style={styles.contentImg}>

                    <Image source={{ uri: item.img_three_rpt }}
                      style={styles.resizeModel}
                    />

                    <Image source={{ uri: item.img_four_rpt }}
                      style={styles.resizeModel}
                    />

                  </View>

                  :

                  <View></View>
              }

              <View style={styles.contentList}>

                <View>
                  <Text style={styles.textData}>{` Pagina : ${item.page_rpt}`}</Text>
                </View>

                <View>
                  <Text style={styles.textData}>{`  ${item.date_rpt}`}</Text>
                </View>

                <View>
                  <Text style={styles.textData}>{`  ${item.title_rpt}`}</Text>
                </View>

                <View>
                  <Text style={styles.textData}>{`  ${item.description_rpt}`}</Text>
                </View>

                {
                  item.status_rpt !== ""
                    ?


                    <View style={styles.contentStatus}>

                      <Text style={styles.textData}>
                        {` Status : ${item.status_rpt}`}                       
                      </Text>


                      {
                        //item.status_rpt === `status: ${imgTags[0].status_tag.toLowerCase()}`
                        item.status_rpt === imgTags[0].status_tag
                          ?
                          <Image
                            style={styles.imgLogo}
                            source={{ uri: 'data:image/png;base64,' + imgTags[0].img_tag }}
                          />
                          :
                          // item.status_rpt === `status: ${imgTags[1].status_tag.toLowerCase()}`
                          item.status_rpt === imgTags[1].status_tag
                            ?
                            <Image
                              style={styles.imgLogo}
                              source={{ uri: 'data:image/png;base64,' + imgTags[1].img_tag }}
                            />
                            :
                           // item.status_rpt === `status: ${imgTags[2].status_tag.toLowerCase()}`
                           item.status_rpt === imgTags[2].status_tag
                              ?
                              <Image
                                style={styles.imgLogo}
                                source={{ uri: 'data:image/png;base64,' + imgTags[2].img_tag }}
                              />
                              :
                             // item.status_rpt === `status: ${imgTags[3].status_tag.toLowerCase()}`
                             item.status_rpt === imgTags[3].status_tag
                                ?
                                <Image
                                  style={styles.imgLogo}
                                  source={{ uri: 'data:image/png;base64,' + imgTags[3].img_tag }}
                                />
                                :
                                <View></View>
                      }
                    </View>

                    :

                    <View></View>

                }



                <View style={styles.containerBtnIn}>

                  <LinearGradient
                    colors={['#B1B2AB', '#7D7F72']}
                    style={styles.styleBtnOne}
                  >
                    <Pressable onPress={() => updateReport(item.id_rpt)}>
                      <Text style={styles.textAlert}>Editar</Text>
                    </Pressable>
                  </LinearGradient>

                </View>

              </View>

            </View>
          }
        >
        </FlatList>

        <View style={styles.containerBtnOut}>

          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={() => printReport()}>
              <Text style={styles.textAlert}>Imprimir</Text>
            </Pressable>
          </LinearGradient>

          <LinearGradient
            colors={['#B1B2AB', '#7D7F72']}
            style={styles.styleBtnOne}
          >
            <Pressable onPress={() => deleteReport()}>
              <Text style={styles.textAlert}>Excluir</Text>
            </Pressable>
          </LinearGradient>

        </View>
      </View >
    </KeyboardAvoidingView >
  );
}



















