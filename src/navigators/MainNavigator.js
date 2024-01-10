import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetails from '#/screens/UserDetails';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="TabNavigator">
    <Stack.Screen
      name="TabNavigator"
      component={TabNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="UserDetails"
      component={UserDetails}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default MainNavigator;
