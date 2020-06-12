import { createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import reducer from './reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const initialState = {
    fileList: [],
    keys: {},
    user: {},
};

const store = createStore(persistedReducer, initialState);

const persistor = persistStore(store);

export { store, persistor };
