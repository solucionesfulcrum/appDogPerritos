import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Principal from '../../screens/main/Principal'
import Detalle from '../../screens/main/Detalle'
import splash from '../../screens/intro/splash'
import Person from '../../screens/main/Person'
import Videos from '../../screens/main/Videos';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      >
      <Stack.Screen
        name="splash"
        component={splash}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Principal"
        component={Principal}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Detalle"
        component={Detalle}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Person"
        component={Person}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Videos"
        component={Videos}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
