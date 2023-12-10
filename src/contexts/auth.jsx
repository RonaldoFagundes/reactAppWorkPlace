import React ,{
    createContext,
    useState
} from 'react';


export const AuthContext = createContext({});



function AuthProvider({children}){




    const [email,setEmail] = useState ( ) ;   

    const [user,setUser] = useState ({});

    const [modal , setModal] = useState (true) ;

    const [load, setLoad] = useState(true)


    const [day, setDay] = useState(true)
   

   const [selectContruction, setSelectContruction] = useState({
            name:"",
            responsable:""
      });



    



    return(

        <AuthContext.Provider value={
             {
                setUser,  user,    
                setModal, modal,
                setLoad,  load,
                setEmail, email,
                setDay,  day,        
                setSelectContruction,  
                selectContruction,
             }
        }>
          {children}
        </AuthContext.Provider>

)

}


export default AuthProvider;