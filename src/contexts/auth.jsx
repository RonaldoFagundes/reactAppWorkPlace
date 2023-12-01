import React ,{
    createContext,
    useState
} from 'react';


export const AuthContext = createContext({});



function AuthProvider({children}){


    const [user,setUser] = useState ({});

    const [construction,setConstruction] = useState ({});

    const [trouble,setTrouble] = useState ({});




    return(

        <AuthContext.Provider value={
             {
                setUser , user, setConstruction , construction , setTrouble , trouble 
             }
        }>
          {children}
        </AuthContext.Provider>

)

}


export default AuthProvider;