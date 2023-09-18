import { createSlice } from '@reduxjs/toolkit'
import words from '../../words/words-2000.json'
import shuffleArray from '../../utilits/random'

const getInitialState = () => {
  return {
    score: 0,
    currentQuestion: 0,
    words: shuffleArray(words),
  }
}

const initialState = getInitialState()

export const scoreSlice = createSlice({
  name: 'scoreSlice',
  initialState,
  reducers: {
    resetTest: (state) => {
      return getInitialState()
    },
    nextQuestion: (state) => {
      state.currentQuestion += 1
    },
    setPoints: (state, action) => {
      state.score = state.score + action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { resetTest, nextQuestion, setPoints } = scoreSlice.actions

export default scoreSlice.reducer
