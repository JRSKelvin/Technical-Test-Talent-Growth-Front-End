import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiReact } from 'react-icons/di'

const TechStackComponent = () => {
  return (
    <React.Fragment>
      <Card md="mb-4 mb-md-0">
        <Card.Body>
          <Card.Text className="mb-4">
            <span className="text-primary font-italic me-1">Tech</span>Stacks
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
              <AiFillHtml5 />
              <Card.Text>HTML</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
              <DiCss3 />
              <Card.Text>CSS</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
              <DiJavascript1 />
              <Card.Text>Javascript</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
              <DiReact />
              <Card.Text>React JS</Card.Text>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default TechStackComponent
