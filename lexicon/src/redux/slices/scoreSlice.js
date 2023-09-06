import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  score: 0,
  currentQuestion: 0
}

export const scoreSlice = createSlice({
  name: 'scoreSlice',
  initialState,
  reducers: {
    resetTest: (state) => {
      state.score = state.score === 0
      state.currentQuestion = state.currentQuestion === 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { resetTest } = scoreSlice.actions

export default scoreSlice.reducer
