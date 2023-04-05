import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/washing-machine.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={bitsOfCode}
              isBlog={false}
              title="courses in university of Nairobi"
              description="D+ courses in university of Nairobi [All you need to know]."
              ghLink="https://kenyaeducationguide.com/d-courses-in-university-of-nairobi-all-you-need-to-know/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Type of skins"
              description="Types of skins for different people"
              ghLink="https://susanbella.wordpress.com/2022/12/20/types-of-skins-for-different-people/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
