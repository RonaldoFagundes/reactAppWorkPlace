import {NavigationContainer} from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';


import VisitConstructions  from './src/components/visitConstructions';
import Home from './src/components/home';
import CadConstructions from './src/components/cadConstructions';
import Login from './src/components/login';
import CadUser from './src/components/cadUser';

import TestPrint from './src/components/testPrint';
import TestCamera from './src/components/testCamera'; 
import TestDefault from './src/components/testDefault';
import TestDataBase from './src/components/testDataBase';



export default function App() {


  return (
     
     
      //<VisitConstructions/>
     // <Home/>
     // <CadConstructions/>
     // <CadUser/>
     // <Login/>
     // <Routes/>


         
    // <TestPrint/>
    // <TestCamera/>
    // <TestDefault/>
    <TestDataBase/>
    
    
    
   
    /* 
    <NavigationContainer>
       
        <AuthProvider>
           <Routes/>
       </AuthProvider>
        

    </NavigationContainer> 
   
  */

  );
}
