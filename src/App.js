import { Col, Container, Row } from 'react-bootstrap'
import BreadcrumbComponent from './components/breadcrumb'
import NavbarComponent from './components/navbar'
import ProfileAvatarComponent from './components/profile-avatar'
import ProfileDescriptionComponent from './components/profile-description'
import ProfileDetailComponent from './components/profile-detail'
import ProfileSocialComponent from './components/profile-social'
import ProjectsComponent from './components/projects'
import TechStackComponent from './components/tech-stack'
import TechnicalDescriptionComponent from './components/technical-description'
import TechnicalScriptComponent from './components/technical-script'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  return (
    <section>
      <NavbarComponent />
      <Container className="py-5">
        <Row>
          <Col>
            <BreadcrumbComponent />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col lg="4">
            <ProfileAvatarComponent />
            <ProfileSocialComponent />
            <TechnicalScriptComponent />
          </Col>
          <Col lg="8">
            <ProfileDetailComponent />
            <ProfileDescriptionComponent />
            <Row>
              <Col md="6">
                <ProjectsComponent />
              </Col>
              <Col md="6">
                <TechStackComponent />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <TechnicalDescriptionComponent />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default App
