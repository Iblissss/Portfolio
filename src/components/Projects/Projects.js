import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cube from "../../Assets/Projects/cube.png";
import hospi from "../../Assets/Projects/hospi.png";
import minor from "../../Assets/Projects/minor.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospi}
              isBlog={false}
              title="Hospi"
              description="Private Chat Room or Workspace to have real time consultation with Doctors build with react.js, Node,js, and Express. Have features which allows user for messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Iblissss/Projet-WEBSERVER"
              demoLink="//www.hospicorp.com/b.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minor}
              isBlog={false}
              title="The Minor 2D"
              description="The project I created is a captivating 2D game developed using JavaScript (JS). The game offers an interactive and entertaining experience for players. With attractive graphics and fluid game mechanics, it offers stimulating challenges and levels."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cube}
              isBlog={false}
              title="Cube"
              description=""
              ghLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
