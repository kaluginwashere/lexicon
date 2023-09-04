import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'
import words from './words/words-2000.json'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerButtonClick = (points) => {
    setScore(score + points)

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < words.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

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
      <div className="container main-block ">
        <Row>
          <Col>
            <div className="score-section d-flex justify-content-center">
              You scored {score} из {words.length} points!
            </div>
          </Col>
        </Row>
        <Row>
          <div className="question-section d-flex justify-content-center flex-column align-items-center">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{shuffledArray.length}
            </div>
            <div>
              <h3>Do you know this word?</h3>
            </div>
            <div className="question-text">
              <h2>{shuffledArray[currentQuestion]}</h2>
            </div>
          </div>
        </Row>
        <Row>
          <Col className="d-grid gap-3 col-2 mx-auto">
            <Button
              onClick={() => handleAnswerButtonClick(2)}
              variant="outline-success"
              size="lg"
            >
              know
            </Button>
            <Button
              onClick={() => handleAnswerButtonClick(1)}
              size="lg"
              variant="outline-success"
            >
              {' '}
              hear somewhere
            </Button>
            <Button
              onClick={() => handleAnswerButtonClick(0.5)}
              size="lg"
              variant="outline-success"
            >
              {' '}
              need context
            </Button>
            <Button
              onClick={() => handleAnswerButtonClick(0)}
              size="lg"
              variant="outline-success"
            >
              {' '}
              dont know
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default App
