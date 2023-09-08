import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function LModal() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const dispatch = useDispatch()

  const { theme } = useSelector((state) => state.lookSlice)
  const { words, currentQuestion } = useSelector((state) => state.scoreSlice)
  const themeColor = `${theme} my-modal`

  useEffect(() => {
    if (currentQuestion+1 === words.length) {
      setShow(true)
    }
    console.log(`show ${show}`)
  }, [currentQuestion])
  return (
    <>
      <Modal show={show} onHide={handleClose} className={themeColor}>
        <Modal.Header closeButton>
          <Modal.Title>Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congratulation you stupid as fuck</Modal.Body>
        <Modal.Footer>
          {theme === 'dark' ? (
            <Button variant="outline-light" onClick={handleClose}>
              Close
            </Button>
          ) : (
            <Button variant="outline-success" onClick={handleClose}>
              Close
            </Button>
          )}
          <Button variant="outline-danger">Reset</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LModal
