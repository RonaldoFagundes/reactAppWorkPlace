

import React, { useState, useEffect , useContext,} from 'react';

import {
    View,
    Text,
    Pressable    
  } from 'react-native';

 // import { AuthContext } from '../../contexts/auth';  

 // import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

  //import { MaterialCommunityIcons } from '@expo/vector-icons';

  import Ionicons from '@expo/vector-icons/Ionicons';

  import styles from './styles'; 



   const CheckBox  = ({ options = [] , onChange , multiple = false }) => {


   const [selected, setSelected] = useState([]);

   
  // useEffect (() => onChange(selected),[selected]);
   

    useEffect(() => {

      try{

        onChange(selected),[selected]

       } catch (error) {
        console.error(error+' Error check box');
     }

  
    }, []);
  







     function toggle(id){    

        let index = selected.findIndex( i => i === id);
        let arrSelecteds = [...selected];

            if (index !== -1 ) {

              arrSelecteds.splice(index,1);

            }else{

             multiple ? arrSelecteds.push(id) : (arrSelecteds = [id] ) ;

            }
            setSelected(arrSelecteds);         


       }



     
  


     return (

         <View style={styles.containner}>

            {options.map((op , index) => (

               <View style={styles.optionsContainner}>

                <Pressable style={ [styles.touchable,{ 

                       backgroundColor:selected.findIndex(i=> i === op.id) !== -1
                       
                       //? 'BEBD93' 

                       ? 'green'

                       : '#fff'

                        
                    
                       } ] }
                      
                      onPress={ () => toggle(op?.id) }
                    >

                    {selected.findIndex(i=> i=== op.id) !== -1 ? (
              
                     /*  <Icon name="check-bold" color={'#fff'} size={16} /> */
                           
                        <Ionicons name="md-checkmark-circle" size={18} color="white" />

                    ):
                    
                    null}                    

                </Pressable>                     

                  <Text style={styles.openText}>{op?.text}</Text> 

               </View>

            )           
            
          )}

         </View>
     );

  };
    



    /*
    const styles = StyleSheet.create({


          containner:{
             marginLeft:12

          },


          optionsContainner:{
               flexDirection:'row',
               alignItems:'center  '
          },

          touchable:{
            height:20,
            width:20,
            borderRadius:4,
            justifyContent:'center',
            alignItems:'center',
            borderColor:'#3EBD93',
            borderWidth:2,
            marginBottom:10
          },
     
          openText:{
             marginLeft:12,
             color:'#fff',
             fontSize:16,
             fontWeight:'600',
             marginBottom:10
          }
     

      })
    */


    
    export default CheckBox; 


     









   
