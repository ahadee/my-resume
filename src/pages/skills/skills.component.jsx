import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_SASS from "../../assets/img/skills/sass-1.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
// import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
// import L_DJANGO from "../../assets/img/skills/django.svg";
// import L_FLASK from "../../assets/img/skills/flask.svg";
// import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
// import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
// import L_PYTHONANYWHERE from "../../assets/img/skills/pythonanywhere.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
// import L_PYTHON from "../../assets/img/skills/python.svg";
import "./skills.styles.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Frontend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer">
                      <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1" target="_blank" rel="noopener noreferrer">
                      <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_JAVASCRIPT} alt="JavaScript" rounded className="image-style m-1"></Image> JavaScript
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_SASS} alt="Sass" rounded className="image-style m-1"></Image> Sass
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_REACT} alt="React" rounded className="image-style m-1"></Image> React
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_REDUX} alt="Redux" rounded className="image-style m-1"></Image> Redux
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_REACT_ROUTER} alt="React Router" rounded className="image-style m-1"></Image> React-Router
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">
                      <Image src="https://material-ui.com/static/logo.png" alt="Material UI" rounded className="image-style m-1"></Image> Material-UI
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style m-1"></Image> Node.js
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_EXPRESS} alt="Express" rounded className="image-style m-1"></Image> Express
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://sequelize.org/v5/" target="_blank" rel="noopener noreferrer">
                      <Image src="https://miro.medium.com/max/661/1*TkP2EwaX95ItAv_jGS7hSA.png" alt="Sequelize" rounded className="image-style m-1"></Image> Sequelize
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://mongoosejs.com/docs/guide" target="_blank" rel="noopener noreferrer">
                      <Image src="https://cms-assets.tutsplus.com/uploads/users/34/posts/29574/preview_image/mongoose.jpg" alt="MySQL" rounded className="image-style m-1"></Image> Mongoose
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_HEROKU} alt="Heroku" rounded className="image-style m-1"></Image> Heroku
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_DIGITAL_OCEAN} alt="Digital Ocean" rounded className="image-style m-1"></Image> Digital-Ocean
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_GITHUB_PAGES} alt="GitHub Pages" rounded className="image-style m-1"></Image> GitHub-Pages
                    </a>
                  </span>

                  {/* <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_PYTHONANYWHERE} alt="pythonanywhere" rounded className="image-style m-1"></Image> PythonAnywhere
                    </a>
                  </span> */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_JAVASCRIPT} alt="JavaScript" rounded className="image-style m-1"></Image> JavaScript
                    </a>
                  </span>

                  {/* <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_PYTHON} alt="Python" rounded className="image-style m-1"></Image> Python
                    </a>
                  </span> */}

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
                      <Image src="https://img2.pngdownload.id/20180904/xhu/kisspng-logo-image-computer-icons-php-portable-network-gra-william-davies-meng-mongodb-5b8e9698822d99.0636011515360713205332.jpg" alt="PHP" rounded className="image-style m-1"></Image> PHP
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                      <Image src="https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png" alt="MongoDB" rounded className="image-style m-1"></Image> MongoDB
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                      <Image src="https://e7.pngegg.com/pngimages/1018/16/png-clipart-mysql-workbench-database-mysql-cluster-others-text-logo.png" alt="MySQL" rounded className="image-style m-1"></Image> MySQL
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Version Control</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_GIT} alt="GIT" rounded className="image-style m-1"></Image> GIT
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
