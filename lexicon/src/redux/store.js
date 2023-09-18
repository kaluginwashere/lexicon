import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import lookSlice from './slices/lookSlice'
import scoreSlice from './slices/scoreSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  lookSlice, scoreSlice 
}))

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)