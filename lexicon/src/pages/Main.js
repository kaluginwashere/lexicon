import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import words from '../words/words-2000.json'
import LModal from '../components/LModal'
import { useDispatch, useSelector } from 'react-redux'
import TestButtons from '../components/TestButtons'
import { useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button'

function Main() {
  const { score, currentQuestion } = useSelector((state) => state.scoreSlice)
  const [showScore, setShowScore] = useState(false)
  const [showWords, setShowWords] = useState(false)
  const [shuffledArray, setShuffledArray] = useState([])

  const handleAnswerButtonClick = (points) => {
    // Update score here
    // Update currentQuestion here
    // Check if the quiz is completed and set setShowScore accordingly
  }

  useEffect(() => {
    function shuffleArray(array) {
      const newArray = [...array]

      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      }

      return newArray
    }

    // Shuffle words and set the shuffled array in state
    const shuffled = shuffleArray(words)
    setShuffledArray(shuffled)
  }, [])

  const handleButtonClick = () => {
    setShowWords(!showWords)
  }

  // Пример использования

  return (
    <div className="app">
      <div className="main-block ">
        <Row>
          <Col>
            <div className="score-section d-flex justify-content-center">
              <span>
                Score: {score}/{words.length} points!
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="question-section d-flex justify-content-center flex-column align-items-center">
            <div className="question-count">
              <span>
                Question: {currentQuestion + 1}/{shuffledArray.length}
              </span>
            </div>
            <div></div>
            <div className="question-text">
              <h1>{shuffledArray[currentQuestion]}</h1>
            </div>
          </div>
        </Row>
        <Row>
          <Col className="d-grid gap-3 col-12 col-md-6 mx-auto">
            <TestButtons />
          </Col>
        </Row>
        <Row>
          <Col className="col-3 mt-3">
            <LModal />
          </Col>
        </Row>
        <Row>
          <Col className="col-3 mt-3">
            <Button onClick={() => handleButtonClick()}>Show Words</Button>
          </Col>
        </Row>
        <Row>
          {showWords && (
            <div>
              <ul>
                {shuffledArray.map((word, index) => (
                  <li key={index}>{word}</li>
                ))}
              </ul>
            </div>
          )}
        </Row>
      </div>
    </div>
  )
}

export default Main
