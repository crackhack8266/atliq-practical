import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient } from '#/utils';
import MainNavigator from './MainNavigator';

const App = () => (
  <QueryClientProvider client={QueryClient}>
    <NavigationContainer>
      <StatusBar
        // backgroundColor={Colors.appBackground}
        barStyle="dark-content"
      />
      <MainNavigator />
    </NavigationContainer>
  </QueryClientProvider>
);

export default App;
