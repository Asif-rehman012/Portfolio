import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi! I’m <b className="purple">Aasif Rehman</b>, a passionate{" "}
              <b className="purple">Java Developer</b> and{" "}
              <b className="purple">Full Stack Web Developer</b> who loves
              building real-world projects and solving problems using{" "}
              <b className="purple">DSA</b>.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, JavaScript, Data Structures & Algorithms{" "}
                </b>
              </i>
              and I enjoy writing clean and optimized code.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Full Stack Web Applications, Backend Systems{" "}
                </b>
              </i>
              and creating user-friendly interfaces.
              <br />
              <br />
              Whenever possible, I love building projects using{" "}
              <b className="purple">Node.js</b>,{" "}
              <b className="purple">Express.js</b> and modern frontend libraries
              like{" "}
              <i>
                <b className="purple">React.js</b>.
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
