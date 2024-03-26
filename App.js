import {NavigationContainer} from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';

//import Routes from './src/routes';




import VisitConstructions  from './src/components/visitConstructions';
import Home from './src/components/home';

import CadConstruction from './src/components/cadConstruction';
import Login from './src/components/login';
import CadUser from './src/components/cadUser';
import Report from './src/components/report';

import TestPrint from './src/components/testPrint';
import TestCamera from './src/components/testCamera'; 
import TestDefault from './src/components/testDefault';
import TestDataBase from './src/components/testDataBase';
import TestGaleria from './src/components/testGaleria';
import TestComponent from './src/components/testComponent';



import CadReport from './src/components/cadReport' ;



export default function App() {


  return (
    
 
     <AuthProvider>
         <CadReport/>
       </AuthProvider>
   
      
     //<Home/>
     // <CadConstructions/>
     // <CadUser/>
      //<Login/>
     // <Routes/>
     //<CadReport/>

     // <Report/>
         
    // <TestPrint/>
    // <TestCamera/>
    // <TestDefault/>
   // <TestDataBase/>
    //<TestGaleria/>
   // <TestComponent/>
    
    
   
    /* 
    <NavigationContainer>
       
        <AuthProvider>
           <Routes/>
       </AuthProvider>
        

    </NavigationContainer> 
   
  */

  );
}
