import { configureStore } from '@reduxjs/toolkit'
import lookSlice from './slices/lookSlice'
import scoreSlice from './slices/scoreSlice'

export const store = configureStore({
  reducer: { lookSlice, scoreSlice },
})
