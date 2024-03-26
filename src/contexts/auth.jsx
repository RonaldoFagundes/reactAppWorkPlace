import React ,{
    createContext,
    useState
} from 'react';


export const AuthContext = createContext({});



function AuthProvider({children}){

  const [load, setLoad] = useState(true);

  const [day, setDay] = useState(true);

  const [user,setUser] = useState (""); 
  
  const [idProduct, setIdProduct] = useState (""); 

  const [idConstruction,setIdConstruction] = useState (""); 

  const [idReport, setIdReport] = useState (""); 

  
   // localhost 
   // const endpointPhp = 'http://127.0.0.1:4000/github/php_api_workPlace'; 

    const endpointPhp = 'http://localhost:3322'; 
   

   /* replit 
   const endpointPhp = 'https://phpapibistrodata.ronaldofagundes.repl.co'; 
   */





    return(

        <AuthContext.Provider value={
             {
              setLoad,  load,
              setDay,  day,        
              setUser, user ,             
              endpointPhp,
              setIdConstruction, idConstruction ,
              setIdReport, idReport,
             }}>
          {children}
        </AuthContext.Provider>
  )
}


export default AuthProvider;