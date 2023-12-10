import {NavigationContainer} from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';



import VisitConstructions  from './src/components/visitConstructions';
import Home from './src/components/home';
import CadConstructions from './src/components/cadConstructions';
import Login from './src/components/login';
import CadUser from './src/components/cadUser';
import Routes from './src/routes';




export default function App() {


  return (
     
     // <VisitConstructions/>
     //<Home/>
     // <CadConstructions/>
     //   <CadUser/>
     // <Login/>
     //<Routes/>
         


    
   
    
    <NavigationContainer>
       
        <AuthProvider>
           <Routes/>
       </AuthProvider>
        

    </NavigationContainer> 
 
   




  );
}
