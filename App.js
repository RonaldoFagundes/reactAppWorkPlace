//import {NavigationContainer} from '@react-navigation/native';

//import AuthProvider from './src/contexts/auth';

//import Routes from './src/routes';


import VisitConstructions  from './src/components/visitConstructions';
import Home from './src/components/home';
import CadConstructions from './src/components/cadConstructions';


export default function App() {


  return (
     
     //  <VisitConstructions/>
     // <Home/>
     <CadConstructions/>
         
    /* 
    <NavigationContainer>
       
        <AuthProvider>
           <Routes/>
       </AuthProvider>
        

    </NavigationContainer> 
    */
  );
}
