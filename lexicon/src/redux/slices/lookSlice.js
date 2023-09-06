import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'dark',
}

export const lookSlice = createSlice({
  name: 'lookSlice',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = lookSlice.actions

export default lookSlice.reducer
