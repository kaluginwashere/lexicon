import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useDispatch } from 'react-redux'
import { resetTest } from '../redux/slices/scoreSlice'

function LModal() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(resetTest())
  }

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Reset
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleReset}>
            reset
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LModal
