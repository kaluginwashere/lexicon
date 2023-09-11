import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LModal from '../components/LModal'
import LResultModal from '../components/LResultModal'
import { useDispatch, useSelector } from 'react-redux'
import TestButtons from '../components/TestButtons'
import Button from 'react-bootstrap/esm/Button'

function Main() {
  const { score, currentQuestion, words } = useSelector(
    (state) => state.scoreSlice
  )
  const [showScore, setShowScore] = useState(false)
  const [showWords, setShowWords] = useState(false)

  const handleButtonClick = () => {
    setShowWords(!showWords)
  }

  const percent = (score / words.length) * 100
  const roundedPercent = percent.toFixed(1)

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
          <Col>
            <div className="score-section d-flex justify-content-center">
              <span>Percent: {roundedPercent}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="question-section d-flex justify-content-center flex-column align-items-center">
            <div className="question-count">
              <span>
                Question: {currentQuestion + 1}/{words.length}
              </span>
            </div>
            <div></div>
            <div className="question-text">
              <h1>{words[currentQuestion]}</h1>
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
            <LResultModal />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Main
