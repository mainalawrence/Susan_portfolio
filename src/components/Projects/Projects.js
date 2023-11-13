import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/washing-machine.jpg";
import courses from "../../Assets/Projects/D-courses.jpg";
import dryer from "../../Assets/Projects/dryer.jpg";
import nurse from "../../Assets/Projects/nurse.jpg";
import kuups from "../../Assets/Projects/kuups.jpg";
import gyno from "../../Assets/Projects/Gynecology.jpg";
import power from "../../Assets/Projects/power.jpg";


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
              imgPath={dryer}
              isBlog={false}
              title="About dryer"
              description="Best portable dryer for apartment: Our recommended options (reviews)"
              ghLink="https://machinelounge.com/?s=product+review"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nurse}
              isBlog={false}
              title="Nursing in Kenya"
              description="Is nursing marketable in Kenya?"
              ghLink="https://kenyaeducationguide.com/is-nursing-marketable-in-kenya/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kuups}
              isBlog={false}
              title="KUCCPS diploma students"
              description="How-much-does-KUCCPS-pay-for-diploma-students?"
              ghLink="https://kenyaeducationguide.com/how-much-does-kuccps-pay-for-diploma-students/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gyno}
              isBlog={false}
              title="gynecology courses in Kenya "
              description="If you are looking for information about gynecology courses in Kenya, you are in the right place…. all you need to do is read this article to the very last word."
              ghLink="https://kenyaeducationguide.com/gynecology-courses-in-kenya/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={power}
              isBlog={false}
              title="Electrical engineering power option [All you need to know]"
              description="Learn about Electrical engineering power option in this guide if you are interested in enrolling in this course  within the field of electrical engineering."
              ghLink="https://kenyaeducationguide.com/electrical-engineering-power-option-all-you-need-to-know/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
