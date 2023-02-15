import React from 'react'
import { Card, Container } from 'react-bootstrap'

const TechnicalDescriptionComponent = () => {
  return (
    <React.Fragment>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>IT Knowledge</Card.Title>
          <Card.Text style={{ fontWeight: "bold" }}>1. What tech stack do you know? Can you elaborate more about that?</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <Card.Text>A tech stack is a combination of software, programming languages, frameworks, and data storage technologies with which developers can build and run a single application.</Card.Text>
            <Card.Text>Front End: React, Vue, Angular, NextJS</Card.Text>
            <Card.Text>Back End: Node, Express, Hapi, CodeIgniter, Laravel</Card.Text>
            <Card.Text>Database: MySQL, SQL Server, PostgreSQL, MongoDB, Firebase</Card.Text>
            <Card.Text>Infrastructure / Server: NGinx, Apache, AWS</Card.Text>
            <Card.Text>Popular Example</Card.Text>
            <Card.Text>LAMP: Linux, Apache, MySQL, PHP</Card.Text>
            <Card.Text>MEAN: MongoDB, ExpressJS, AngularJS, NodeJS</Card.Text>
            <Card.Text>MERN: MongoDB, ExpressJS, ReactJS, NodeJS</Card.Text>
            <Card.Text>MEVN: MongoDB, ExpressJS, VueJS, NodeJS</Card.Text>
          </Container>

          <Card.Text style={{ fontWeight: "bold" }}>2. What is a data type, elaborate on each type.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <Card.Text>A data type is a classification that specifies which type of value a variable has and what type of mathematical, relational, or logical operations can be applied to it. Each programming language has its data type, but here is JavaScript.</Card.Text>
            <Card.Text>1. String: Combination of characters or representation of text data</Card.Text>
            <Card.Text>2. Number: Integer or a floating-point number</Card.Text>
            <Card.Text>3. Boolean: Between True or False</Card.Text>
            <Card.Text>4. Array: Collection of similar types of data</Card.Text>
            <Card.Text>5. Object: Key-value pairs of collection of data</Card.Text>
            <Card.Text>6. Undefined: A data type whose variable is not initialized</Card.Text>
            <Card.Text>7. Null: Denotes a null value</Card.Text>
          </Container>

          <Card.Text style={{ fontWeight: "bold" }}>3. What do you know about Git? How can we get a code from the Git repository to our local machine?</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <Card.Text>Git is one of the popular version control system tools which allows saving and tracking previously saved code as commit and have many popular remote git servers such as GitHub, GitLab, and BitBucket.</Card.Text>
          </Container>

          <Card.Text style={{ fontWeight: "bold" }}>4. Explain the error type that happens in the back end, and how can we handle the error code from the back end in the front end side?</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <Card.Text>There are many types of errors in Back End, but here is the following list that describes the most common HTTP Error Codes and includes some possible resolutions.</Card.Text>
            <Card.Text>400 Bad Request: This error indicates that the user's request contains incorrect syntax. Check again if the request contains the correct syntax.</Card.Text>
            <Card.Text>401 Unauthorized: This error indicates that the requested file requires authentication (a username and password). Retry to log in with authentication.</Card.Text>
            <Card.Text>403 Forbidden: This error indicates that the server will not allow the visitor to access the requested file. Check if the user has the right to access that page or file.</Card.Text>
            <Card.Text>404 Not Found: This error indicates that the server could not find the file that the visitor requested. Check if have URL is mistyped. If the file was deleted from Back End, try to upload a new file</Card.Text>
            <Card.Text>500 Internal Server Error: This error indicates that the server has encountered an unexpected condition. This often occurs when an application request cannot be fulfilled due to the application being configured incorrectly on the server.</Card.Text>
            <Card.Text>502 Bad Gateway: This error is usually due to improperly configured proxy servers.</Card.Text>
            <Card.Text>504 Gateway Timeout: This error occurs when a server somewhere along the chain does not receive a timely response from a server further up the chain.</Card.Text>
          </Container>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default TechnicalDescriptionComponent
