import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCES</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src="data:image/png;base64,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" alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Full Stack Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Description:</strong> Bootcamp Full-Stack Web Development
                    {/* <br /> */}
                    {/* <strong>Technology:</strong> DOTNET, C# and MS-SQL */}
                    <br />
                    <strong>Duration:</strong> March 2020 - May 2020
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Consultant SAP Basis</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Project:</strong> PT. Trakindo Utama
                    <br />
                    <strong>Role:</strong> SAP Basis
                    <br />
                    <strong>Description:</strong> Performed Basis support to
functional team and users in solving
problems on site and remote
                    {/* <br /> */}
                    {/* <strong>Technology:</strong> DOTNET, C# and MS-SQL */}
                    <br />
                    <strong>Duration:</strong> April 2018 - November 2019
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
