import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient } from '#/utils';
import { Provider } from 'react-redux';
import { store } from '#/redux/store';
import { Colors } from '#/styles';
import MainNavigator from './MainNavigator';

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={QueryClient}>
      <NavigationContainer>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <MainNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  </Provider>
);

export default App;
