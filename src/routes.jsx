import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


import Login from './components/login';
import CadUser from './components/cadUser';
import Home from './components/home';
import CadConstruction from './components/cadConstruction';
import VisitConstructions from './components/visitConstructions';



export default function Routes() {


    return (

       <Stack.Navigator
         screenOptions={{
         headerShown: false
         }} 
        >
       
      
       <Stack.Screen
            name='Login'
            component={Login}
          />

          <Stack.Screen
            name='CadUser'
            component={CadUser}
          />

          <Stack.Screen
             name='Home'
             component={Home}
           /> 
 

         <Stack.Screen
            name='CadConstruction'
            component={CadConstruction}
          />



          <Stack.Screen
             name='VisitConstructions'
             component={VisitConstructions}
          />


       </Stack.Navigator>

    )};
