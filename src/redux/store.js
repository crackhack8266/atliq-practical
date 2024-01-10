import AsyncStorage from '@react-native-async-storage/async-storage';
import { legacy_createStore as createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';

import rootReducer from './reducers';

const reducers = persistCombineReducers(
  {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['favorite'],
  },
  rootReducer
);

export const store = createStore(reducers);

export const persistor = persistStore(store);
