import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import words from '../words/words-2000.json'
import LModal from '../components/LModal'
import { useDispatch, useSelector } from 'react-redux'
import TestButtons from '../components/TestButtons'

function Main() {
  const { score, currentQuestion } = useSelector((state) => state.scoreSlice)
  const [showScore, setShowScore] = useState(false)
  // const handleAnswerButtonClick = (points) => {
  //   setScore(score + points)

  // const nextQuestion = currentQuestion + 1
  // if (nextQuestion < words.length) {
  //   setCurrentQuestion(nextQuestion)
  // } else {
  //   setShowScore(true)
  // }
  // }
  console.log(showScore)

  function shuffleArray(array) {
    // Копируем исходный массив, чтобы не изменять его напрямую
    const newArray = [...array]

    for (let i = newArray.length - 1; i > 0; i--) {
      // Генерируем случайный индекс от 0 до i
      const j = Math.floor(Math.random() * (i + 1))

      // Меняем местами элементы с индексами i и j
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }

    return newArray
  }

  // Пример использования
  const shuffledArray = shuffleArray(words)

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
      </div>
    </div>
  )
}

export default Main
