import React from 'react'
import Button from 'react-bootstrap/Button'
import { nextQuestion, setPoints } from '../redux/slices/scoreSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'

const TestButtons = () => {
  const dispatch = useDispatch()
  const handleAnswerButtonClick = (points) => {
    dispatch(setPoints(points))
    dispatch(nextQuestion())
    
  }

  const handleKeyPress = useCallback((event) => {
   if (event.keyCode === 49) {
    handleAnswerButtonClick(1)
  }
   if (event.keyCode === 50) {
    handleAnswerButtonClick(0.5)
  }
   if (event.keyCode === 51) {
    handleAnswerButtonClick(0)
  }
  }, [])

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress)

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])
  return (
    <>
      <Button
        onClick={() => handleAnswerButtonClick(1)}
        variant="outline-success"
        size="lg"
      >
        know
      </Button>
      <Button
        onClick={() => handleAnswerButtonClick(0.5)}
        size="lg"
        variant="outline-success"
      >
        {' '}
        hear somewhere
      </Button>
      <Button
        onClick={() => handleAnswerButtonClick(0)}
        size="lg"
        variant="outline-success"
      >
        {' '}
        dont know
      </Button>
    </>
  )
}

export default TestButtons
