import React ,{
    createContext,
    useState
} from 'react';


export const AuthContext = createContext({});


function AuthProvider({children}){


  const [load, setLoad] = useState(true);
  const [day, setDay] = useState(true);
  


 const [imgTags, setImgTags] = useState([]);

 const [imgTagsSelected, setImgTagsSelected] = useState();


 const [tags, setTags] = useState({
  id:"",
  status:"",
  desc:"",
  img:null,   
});


 const [idConstruction,setIdConstruction] = useState (""); 
 const [nameConstruction,setNameConstruction] = useState ("");  
 const [enterpriseConstruction,setEnterpriseConstruction] = useState ("");  
 const [addressConstruction,setAddressConstruction] = useState (""); 
 const [imgConstruction,setImgConstruction] = useState ("");

 const [constructions, setConstructions] = useState({
  id:"",
  name:"",
  enterprise:"",
  address:"",
  img:null,   
});




const [idReport, setIdReport] = useState ("");
const [reportNumber, setReportNumber] = useState ("");
const [reportStatus, setReportStatus] = useState ("");


const [report, setReport] = useState({
  id:"",
  number:"",
  status:"",  
});




const [detailsCompany, setDetailsCompany] = useState ({
  name:"",
  address:"",
  postal_cod:"",
  state:"",
  country:"",
  phone:"",
  web_site:"",
  img:null,
  logo:null,   
  icon:null,  
});

/*
const [company, setCompany] = useState({
  id:"",
  name:"",
  address:"",
  postal_cod:"",
  state:"",
  country:"",
  phone:"",
  web_site:"", 
  logo:null,
  icon:null,   
});
*/


  //const endpointPhp = "https://ddbabb23-115a-4fbc-ac05-d7c225982170-00-xbc9ar2bh5gb.janeway.replit.dev/";

  //const endpointPhp = "https://ddbabb23-115a-4fbc-ac05-d7c225982170-00-xbc9ar2bh5gb.janeway.replit.dev/";

  //const endpointPhp = "http://127.0.0.1/_ehs-api";

  const endpointPhp = "https://app.ehsss.com.br";


 // const endpointPhp = "https://ddbabb23-115a-4fbc-ac05-d7c225982170-00-xbc9ar2bh5gb.janeway.replit.dev/";





    return(
        <AuthContext.Provider value={
             {
              endpointPhp,
              setLoad,  load,
              setDay,  day,        
                
              setIdConstruction, idConstruction ,
              setNameConstruction, nameConstruction,
              setEnterpriseConstruction,enterpriseConstruction,
              setAddressConstruction, addressConstruction,
              setImgConstruction , imgConstruction,
                 
              setConstructions , constructions, 


              setIdReport, idReport,
              setReportNumber,reportNumber,
              setReportStatus , reportStatus,
              setReport , report , 

              setDetailsCompany ,detailsCompany, 

              setTags , tags,
              
              setImgTags , imgTags,

              setImgTagsSelected, imgTagsSelected,

                         
             }}>
          {children}
        </AuthContext.Provider>
  )
}
export default AuthProvider;