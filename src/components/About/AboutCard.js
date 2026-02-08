import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Aasif Rehman</span> from{" "}
            <span className="purple">Jammu & Kashmir, India</span>.
            <br />
            I’m currently pursuing{" "}
            <span className="purple">B.Tech in Computer Science Engineering</span>{" "}
            from <span className="purple">IK Gujral Punjab Technical University</span>.
            <br />
            <br />
            I am passionate about{" "}
            <span className="purple">Java Development</span>,{" "}
            <span className="purple">Data Structures & Algorithms</span>, and{" "}
            <span className="purple">Full Stack Web Development</span>.
            <br />
            <br />
            I enjoy building real-world projects using{" "}
            <span className="purple">React.js</span>,{" "}
            <span className="purple">Node.js</span>, and{" "}
            <span className="purple">Express.js</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me active
            and motivated:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music 🎵
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess ♟️
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding & Problem Solving 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching News 📰
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Aasif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
