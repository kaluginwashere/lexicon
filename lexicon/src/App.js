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

  return (
    <div className="app">
      <div className="container main-block ">
        <Row>
          <Col>
            <div className="score-section d-flex justify-content-center">
              Вы набрали {score} из {words.length} баллов!
            </div>
          </Col>
        </Row>
        <Row>
          <div className="question-section d-flex justify-content-center flex-column align-items-center">
            <div className="question-count">
              <span>Вопрос {currentQuestion + 1}</span>/{words.length}
            </div>
            <div>
              <h3>знаете это слово?</h3>
            </div>
            <div className="question-text">
              <h2>{words[currentQuestion]}</h2>
            </div>
          </div>
        </Row>
        <Row>
          <Col className="d-grid gap-3 col-2 mx-auto">
            <Button
              onClick={() => handleAnswerButtonClick(1)}
              variant="primary"
              size="lg"
            >
              know
            </Button>
            <Button onClick={() => handleAnswerButtonClick(32)}>
              {' '}
              hear somwhere
            </Button>
            <Button onClick={() => handleAnswerButtonClick(35)}>
              {' '}
              need context
            </Button>
            <Button onClick={() => handleAnswerButtonClick(43)}>
              {' '}
              не знаю
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default App
