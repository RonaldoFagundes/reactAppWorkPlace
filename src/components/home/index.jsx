import React, { useState, useEffect } from 'react';

import {
  FlatList,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable
} from 'react-native';

import styles from './styles';

//import { LinearGradient } from 'expo-linear-gradient';


export default function Home({ navigation }) {



 
   var dta = new Date();
   var hours = dta.getHours();
 //  var minutes = dta.getMinutes();
   var day = dta.getDate().toString().padStart(2, '0');
   var month = (dta.getMonth() + 1).toString().padStart(2, '0');
   var year = dta.getFullYear();

   var today = day + "/" + month + "/" + year;


  // let stat  = "pendente" ;


   const [welcome, setWelcome] = useState();


   const helloApp = () => {

    if (hours > 0 && hours < 12) {
       setWelcome("Bom dia!!!")
    } else if (hours >= 12 && hours < 18) {
       setWelcome("Boa tarde!!!")
    } else {
       setWelcome("Boa noite!!!")
    }
 }








  const obras = [
    {
      nome: 'Pirituba',

      img: require(`../../../assets/test.png`),

      endereco: {
        rua: 'Av pirituba',
        numero: '123',
        complemento: 'frente'
      },

      responsavel: 'Geronimo',
      status: 'em analise'
    },



    {
      nome: 'Santo Amaro',
      
      img: require(`../../../assets/test.png`),

      endereco: {
        rua: 'Av Nossa Sehora do Sabara',
        numero: '54',
        complemento: 'frente'
      },

      responsavel: 'Pedro',
      status: 'resolvido'
    },

  ];



 





  


 
   useEffect(() => {

    
        helloApp();

     // navigation.addListener('focus', () => setLoad(!load))
  
    // }, [load, navigation]);

  }, []);
    
    


  




  return (





    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >



     <ScrollView>
      

        <View style={styles.containerMain}>

           <Text>Tela Home</Text>

          <View style={styles.containerHeader}>

             <View style={styles.contentHeader}>

               <Text style={styles.textInfo}>{`Bem vindo(a) user ! ${welcome}`}</Text>


               <Pressable style={styles.containerBtn}
               
                 onPress={() => navigation.navigate("Login")}
               >

                 <Text style={styles.textAlert}>Logout</Text>

               </Pressable>



              {/*
                <TouchableOpacity

                 onPress={() => navigation.navigate("Login")}
                >

                <Text style={styles.textAlert}>Logout</Text>

               </TouchableOpacity>
               */}




             </View>


          </View>



                   
                      {/* 
                      <View>
                        <Image
                          source={require(`../../../assets/test.png`)}
                          style={styles.contentImg}
                        />
                      </View>
                       */}




          <View style={styles.containerData}>



            <View style={styles.contentData}>

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












        {/*
            
            
            <LinearGradient
               colors={['#66110A', '#FFB233']}
               style={styles.containerMain}
             >
     
   
   
              <LinearGradient
     
                 colors={
                   [
                     'rgba(250, 165, 35, 1.0)',
                     'rgba(250, 185, 38, 0.5)'
                   ]
                 }
     
                 style={styles.containerHeader}
               >
     
     
   
   
              
                <Text style={styles.textMain}>Tela Home</Text>
     
     
                 <View style={styles.contentHeader}>
     
   
                   <Text style={styles.textInfo}>{`Bem vindo(a)! ${user}`}</Text>
     
                   <LinearGradient
                     colors={['#66110A', '#F42E16']}
                     style={styles.containerBtn}
                   >
     
   
                     <TouchableOpacity
                       onPress={() =>
                         navigation.navigate("Login")}
                     >
   
                       <Text style={styles.textAlert} >Logout</Text>
   
                     </TouchableOpacity>
     
   
                   </LinearGradient>
   
     
                 </View>
     
               </LinearGradient>
     
     
     
               <LinearGradient
                 colors={['#66110A', '#F42E16']}
                 style={styles.containerBtn}
               >
     
                 <TouchableOpacity
                   onPress={() =>
                     navigation.navigate("Insertproducts")}
                 >
                   <Text style={styles.textAlert}>Adcionar</Text>
                 </TouchableOpacity>
     
               </LinearGradient>
     
     
               <LinearGradient
                 colors={['#FFB233', '#66110A']}
                 style={styles.containerData}
               >
     
                 <View style={styles.containerProducts}>
     
                  <View style={styles.contentProducts}>
     
     
                     <View style={styles.contentProductsS}>
                       <Text style={styles.textDados}>id</Text>
                     </View>
     
     
                     <View style={styles.contentProductsS}>
                       <Text style={styles.textDados}>img</Text>
                     </View>
     
     
                     <View style={styles.contentProductsM}>
                       <Text style={styles.textDados}>nome</Text>
                     </View>
     
     
                     <View style={styles.contentProductsX}>
                       <Text style={styles.textDados}>informações</Text>
                     </View>
     
     
                     <View style={styles.contentProductsM}>
                       <Text style={styles.textDados}>preço</Text>
                     </View>
     
     
                     <View style={styles.contentProductsS}>
                       <Text style={styles.textDados}>Estoque</Text>
                     </View>
     
     
                     <View style={styles.contentProductsS}>
                       <Text style={styles.textDados}>Produção</Text>
                     </View>
     
     
                     <View style={styles.contentProductsX}>
                       <Text style={styles.textDados}>Ações</Text>
                     </View>
     
     
                   </View>
     
     
                   {
     
                     products.map(
     
                       (produto) =>
     
                         <View style={styles.contentProducts} key={produto.id}>
     
     
     
                           <View style={styles.contentProductsS}>
                             <Text style={styles.textDados}>{produto.id}</Text>
                           </View>
     
     
                           <View>
                             <Image
                               source={require(`../../../assets/${produto.img}.png`)}
                               style={styles.contentProductsImg}
                             />
                           </View>
     
     
     
                           <View style={styles.contentProductsM}>
                             <Text style={styles.textDados}>{produto.nome}</Text>
                           </View>
     
     
                           <View style={styles.contentProductsX}>
                             <Text style={styles.textDados} >{produto.info}</Text>
                           </View>
     
     
                           <View style={styles.contentProductsM}>
                             <Text style={styles.textDados}>{`R$ ${produto.preco},00`}</Text>
                           </View>
     
     
                           <View style={styles.contentProductsS}>
                             <Text style={styles.textDados} >{produto.estoque}</Text>
                           </View>
     
     
     
     
                           <View style={styles.contentProductsS}>
                             <Text style={styles.textDados} >{produto.producao}</Text>
                           </View>
     
     
     
     
                           <LinearGradient
                             colors={['#66110A', '#F42E16']}
                             style={styles.containerBtn}
                           >
     
                             <TouchableOpacity
                               onPress={() => updateProduct(produto.id, produto.img)}>
                               <Text style={styles.textAlert}>Update</Text>
                             </TouchableOpacity>
     
     
                           </LinearGradient>
     
     
     
                           <LinearGradient
                             colors={['#66110A', '#F42E16']}
                             style={styles.containerBtn}
                           >
     
     
                             <TouchableOpacity
     
                               onPress={() => deleteProduct(produto.id, produto.img)}>
                               <Text style={styles.textAlert} >Delete</Text>
                             </TouchableOpacity>
     
                           </LinearGradient>
     
     
                         </View>
     
                     )
     
                   }
     
     
     
                 </View>
     
     
     
               </LinearGradient>
     
     
             </LinearGradient>
             
             
             */}


      </ScrollView>



      <View style={{ height: 100 }}></View>


    </KeyboardAvoidingView>



  );
}
