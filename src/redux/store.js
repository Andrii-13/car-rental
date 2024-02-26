import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { dataReducer } from './dataSlice/dataSlice';

const dataPersistConfig = {
    key: 'data',
    storage,
    whitelist: ['favoriteAdverts'],
  };

export const store = configureStore({
  reducer: {
   data : persistReducer(dataPersistConfig, dataReducer),
   },
});
