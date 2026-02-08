import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Algorithm Decision Engine"
              description="Built a Java-based decision engine to recommend optimal algorithms using constraints and input size. Implemented algorithm database and selection logic using time complexity rules for optimal recommendations."
              ghLink="https://github.com/Asif-rehman012/Algorithm decision engine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart Price Comparison App"
              description="Developed a full-stack price comparison web app to compare product prices across multiple platforms. Implemented real-time search and a modern dark UI for better user experience."
              ghLink="https://github.com/Asif-rehman012/Price Comparison App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Resume Builder"
              description="JavaScript website which allows users to generate their CV. Users can choose templates, upload image, update details, and download resume in PDF format."
              ghLink="https://github.com/Asif-rehman012/Resume-Builder-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio Website"
              description="A modern personal portfolio website built using React.js to showcase my skills, projects, education, and achievements with a responsive UI."
              ghLink="https://github.com/Asif-rehman012"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Full Stack Web Projects"
              description="Worked on multiple full-stack web applications using React (Vite), Node.js and Express.js focusing on modern UI and real-time features."
              ghLink="https://github.com/Asif-rehman012"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="DSA & Problem Solving"
              description="Solved multiple DSA and problem-solving challenges on platforms like HackerRank and GeeksforGeeks. Improved algorithmic thinking and coding efficiency."
              ghLink="https://github.com/Asif-rehman012"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
