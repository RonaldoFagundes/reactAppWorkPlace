import React ,{
    createContext,
    useState
} from 'react';


export const AuthContext = createContext({});



function AuthProvider({children}){


  const [user,setUser] = useState ({}); 

  const [idProduct, setIdProduct] = useState (""); 


  
   // localhost 
    const endpointPhp = 'http://127.0.0.1:4000/github/php_api_workPlace'; 
  



   /* replit 
   const endpointPhp = 'https://phpapibistrodata.ronaldofagundes.repl.co'; 
   */




   /*
    const [email,setEmail] = useState ( ) ; 
    const [user,setUser] = useState ({});
    const [modal , setModal] = useState (true) ;
    const [load, setLoad] = useState(true)
    const [day, setDay] = useState(true)   

   const [selectContruction, setSelectContruction] = useState({
            name:"",
            responsable:"",
            img:""
      });
   */


    



    return(

        <AuthContext.Provider value={
             {

              setUser , user ,
              setIdProduct , idProduct,
              endpointPhp


                /*
                setUser,  user,    
                setModal, modal,
                setLoad,  load,
                setEmail, email,
                setDay,  day,        
                setSelectContruction,  
                selectContruction,
                */
            


             }}>
          {children}
        </AuthContext.Provider>
  )
}


export default AuthProvider;