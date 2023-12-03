import React ,{
    createContext,
    useState
} from 'react';


export const AuthContext = createContext({});



function AuthProvider({children}){


    const [email,setEmail] = useState ( ) ;   

    const [user,setUser] = useState ({});


   




    const [trouble,setTrouble] = useState ({});




    const [modal , setModal] = useState (true) ;


    const [load, setLoad] = useState(true)

   
    const [id, setId] = useState ( ) ;



    return(

        <AuthContext.Provider value={
             {
                setUser , user,                
                setTrouble , trouble ,
                setModal,  modal,
                setLoad, load,
                setEmail, email,
                setUser , user,
                setId, id    
             }
        }>
          {children}
        </AuthContext.Provider>

)

}


export default AuthProvider;