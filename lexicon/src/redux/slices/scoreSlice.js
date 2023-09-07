import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  score: 0,
  currentQuestion: 0,
}

export const scoreSlice = createSlice({
  name: 'scoreSlice',
  initialState,
  reducers: {
    resetTest: (state) => {
      return {
        ...state,
        score: 0,
        currentQuestion: 0,
      }
    },
    nextQuestion: (state) => {
      state.currentQuestion += 1
    },
    setPoints: (state, action) => {
      state.score = state.score + action.payload;
    }

  },
})

// Action creators are generated for each case reducer function
export const { resetTest, nextQuestion, setPoints } = scoreSlice.actions

export default scoreSlice.reducer
