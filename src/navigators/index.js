import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient } from '#/utils';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '#/redux/store';
import MainNavigator from './MainNavigator';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <QueryClientProvider client={QueryClient}>
        <NavigationContainer>
          <StatusBar
            // backgroundColor={Colors.appBackground}
            barStyle="dark-content"
          />
          <MainNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);

export default App;
