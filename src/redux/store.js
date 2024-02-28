import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { dataReducer } from './dataSlice/dataSlice';
import { favoriteCardsReducer } from './favoriteSlice/favoriteSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist';

const favoritePersistConfig = {
    key: 'favorite',              //  ключ, під яким дані будуть збережені в локальному сховищі
    storage,                        // використовуємо локальне сховище браузера
    whitelist: ['favorite'],    // потрібно зберегти лише дані з ключем favorite
  };

export const store = configureStore({
  reducer: {
   data : dataReducer,
   favorite : persistReducer(favoritePersistConfig, favoriteCardsReducer),
   },
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

export const persistor = persistStore(store)