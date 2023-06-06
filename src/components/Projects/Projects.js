import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Skin from "../../Assets/Projects/skin.jpg";
import chatify from "../../Assets/Projects/washing-machine.jpg";
import courses from "../../Assets/Projects/D-courses.jpg";
import dryer from "../../Assets/Projects/dryer.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Washing machine"
              description="so,is it possible to wash your shoes in a washing machine?"
              ghLink="https://machinelounge.com/?s=can+shoes+be+washed+in+a+washing+machine%3F"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={courses}
              isBlog={false}
              title="courses in university of Nairobi"
              description="D+ courses in university of Nairobi [All you need to know]."
              ghLink="https://kenyaeducationguide.com/d-courses-in-university-of-nairobi-all-you-need-to-know/"
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dryer}
              isBlog={false}
              title="About dryer"
              description="Best portable dryer for apartment: Our recommended options (reviews)"
              ghLink="https://machinelounge.com/?s=product+review"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
