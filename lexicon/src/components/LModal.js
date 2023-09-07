import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
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
  const { theme } = useSelector((state) => state.lookSlice)
  const themeColor = `${theme} my-modal`

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Reset
      </Button>

      <Modal show={show} onHide={handleClose} className={themeColor}>
        <Modal.Header closeButton>
          <Modal.Title>Reset test</Modal.Title>
        </Modal.Header>
        <Modal.Body>you really want to start over?</Modal.Body>
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
          <Button variant="outline-danger" onClick={handleReset}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LModal
