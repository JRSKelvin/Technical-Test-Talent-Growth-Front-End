import React from 'react'
import { Button, Card, Form, ListGroup, Modal } from 'react-bootstrap'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import GradeResult from '../technical-script/grade-result'
import GroupResult from '../technical-script/group-result'

const TechnicalScriptGradeSystem = ({ showModalGradeSystem, handleGradeSystemClose }) => {
  const [showResult, setShowResult] = React.useState("")
  const [name, setName] = React.useState("")
  const [score, setScore] = React.useState("")

  const submitGradeSystem = () => {
    if (name !== "" && score !== "") {
      const gradeClass = new GradeResult(name, score)
      return setShowResult(gradeClass.finalGrade())
    }
    return setShowResult("Please Fill All Blanks")
  }

  return (
    <Modal show={showModalGradeSystem} onHide={handleGradeSystemClose}>
      <Modal.Header closeButton>
        <Modal.Title>Grade System</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="John Doe"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Score</Form.Label>
          <Form.Control
            required
            onChange={(e) => setScore(e.target.value)}
            type="number"
            placeholder="80"
          />
        </Form.Group>
        {showResult}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleGradeSystemClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submitGradeSystem}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const TechnicalScriptGroupSystem = ({ showModalGroupSystem, handleGroupSystemClose }) => {
  const [showResult, setShowResult] = React.useState("")
  const [name, setName] = React.useState("")

  const submitGroupSystem = () => {
    if (name !== "") {
      const groupClass = new GroupResult(name)
      return setShowResult(groupClass.finalGroup())
    }
    return setShowResult("Please Fill All Blanks")
  }

  return (
    <Modal show={showModalGroupSystem} onHide={handleGroupSystemClose}>
      <Modal.Header closeButton>
        <Modal.Title>Group System</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="John Doe"
          />
        </Form.Group>
        {showResult}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleGroupSystemClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submitGroupSystem}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const TechnicalScriptComponent = () => {
  const [showModalGradeSystem, setShowModalGradeSystem] = React.useState(false)
  const [showModalGroupSystem, setShowModalGroupSystem] = React.useState(false)

  const handleGradeSystemClose = () => setShowModalGradeSystem(false)
  const handleGradeSystemShow = () => setShowModalGradeSystem(true)
  const handleGroupSystemClose = () => setShowModalGroupSystem(false)
  const handleGroupSystemShow = () => setShowModalGroupSystem(true)

  return (
    <React.Fragment>
      <TechnicalScriptGradeSystem
        showModalGradeSystem={showModalGradeSystem}
        handleGradeSystemClose={handleGradeSystemClose}
      />
      <TechnicalScriptGroupSystem
        showModalGroupSystem={showModalGroupSystem}
        handleGroupSystemClose={handleGroupSystemClose}
      />

      <Card md="mb-4 mb-md-0">
        <Card.Body className="text-center">
          <Card.Text>Technical Knowledge Test</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
              <AiOutlineCheckCircle />
              <Button onClick={handleGradeSystemShow} variant="primary">
                Grade Result System
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
              <AiOutlineCheckCircle />
              <Button onClick={handleGroupSystemShow} className="ms-1" variant="success">
                Group Category System
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default TechnicalScriptComponent
