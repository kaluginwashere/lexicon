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
    setShow(false)
  }

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Reset
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Reset test</Modal.Title>
        </Modal.Header>
        <Modal.Body>you really want to start over?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleReset}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LModal
