import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const AppStack = createStackNavigator();
import Incidents from './pages/Incidents';
import IncidentsDetail from './pages/Detail';

export default function Routes(){
  return(
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{headerShown: false}}>

        <AppStack.Screen name='Incidents' component={Incidents} />
        <AppStack.Screen name='IncidentsDetail'  component={IncidentsDetail} />

      </AppStack.Navigator>

    </NavigationContainer>
  );
}