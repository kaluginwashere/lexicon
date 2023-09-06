import { configureStore } from '@reduxjs/toolkit'
import lookSlice from './slices/lookSlice'

export const store = configureStore({
  reducer: { lookSlice },
})
