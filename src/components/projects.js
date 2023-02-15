import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'

const ProjectsComponent = () => {
  return (
    <React.Fragment>
      <Card md="mb-4 mb-md-0">
        <Card.Body>
          <Card.Text className="mb-4">
            <span className="text-primary font-italic me-1">Assigned</span>Projects
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontSize: ".88rem" }}>
            CutiLine (Employee Leave System)
          </Card.Text>
          <Card.Text className="rounded">
            <ProgressBar now={100} valuemin={0} valuemax={100} />
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontSize: ".88rem" }}>
            Employee Attendance System
          </Card.Text>
          <Card.Text className="rounded">
            <ProgressBar now={100} valuemin={0} valuemax={100} />
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontSize: ".88rem" }}>
            LingoParents Project
          </Card.Text>
          <Card.Text className="rounded">
            <ProgressBar now={100} valuemin={0} valuemax={100} />
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontSize: ".88rem" }}>
            Future Project
          </Card.Text>
          <Card.Text className="rounded">
            <ProgressBar now={0} valuemin={0} valuemax={100} />
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default ProjectsComponent
