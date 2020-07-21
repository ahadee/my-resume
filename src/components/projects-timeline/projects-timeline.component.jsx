import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import L_SmartBrain from "../../assets/img/projects/odaiba.png";
import L_RoboFriends from "../../assets/img/projects/searah.png";
import L_ProductHuntClone from "../../assets/img/projects/shoppie.png";
import L_PortfolioUsingDjango from "../../assets/img/projects/fusiontech.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
// import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
// import L_DJANGO from "../../assets/img/skills/django.svg";
// import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";

import "./projects-timeline.styles.css";

export default function TimeLine() {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Smart Brain */}
          <ImageEvent date="21/06/2020" className="text-center" text="Odaiba App" src={L_SmartBrain} alt="Odaiba">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that allows kids to complete assignments in virtual groups, while giving the teacher a real-time overview of the classroom and the ability to join any group to help them with their work.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Still on progress</li>
                          {/* <li>Signin exiting user</li>
                          <li>Keep tracks of entries for each user</li> */}
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_POSTGRESQL} alt="PostgreSQL" rounded className="image-style1 m-1"></Image> PostgreSQL
                            </span>
                          </li>
                        </ul>
                        {/* <hr />
                        <em>
                          <strong>SignUp/ Signin:</strong>
                          <br />
                          <br />
                          You can <strong>register</strong> as new user or <strong>log in</strong> using the demo account below.
                          <br />
                          <br />
                          <strong>Demo Account Details:</strong>
                          <br />
                          email: demo@demo.com
                          <br />
                          password: demo
                        </em> */}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton href="https://smart-face-detect-app.herokuapp.com/" target="_blank">
                  SEE LIVE
                </UrlButton> */}
                <UrlButton href="https://github.com/odaiba-app" target="_blank">
                  SOURCE CODE
                </UrlButton>
                {/* <UrlButton href="https://www.youtube.com/watch?v=ZZYSpi_blL0" target="_blank">
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>

          {/* Project: RoboFriends */}

          <ImageEvent date="26/05/2020" className="text-center" text="Searah" src={L_RoboFriends} alt="Robo Friends">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Searah is an application that helps people who want to find friend for travelling around.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register as new user</li>
                          <li>Signin as existing user</li>
                          <li>Edit profile user</li>
                          <li>Create new trip</li>
                          <li>Search by city</li>
                          <li>Join to someone's trip</li>
                          <li>Usage of Redux store</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_REDUX} alt="Redux" rounded className="image-style m-1"></Image> Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src="https://miro.medium.com/max/661/1*TkP2EwaX95ItAv_jGS7hSA.png" alt="Sequelize" rounded className="image-style1 m-1"></Image> Sequelize
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HEROKU} alt="Sequelize" rounded className="image-style1 m-1"></Image> Heroku
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src="https://e7.pngegg.com/pngimages/1018/16/png-clipart-mysql-workbench-database-mysql-cluster-others-text-logo.png" alt="Sequelize" rounded className="image-style1 m-1"></Image> MySQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/searah-impactbyte-mizuchi" target="_blank">
                  SOURCE CODE
                </UrlButton>
                <UrlButton href="https://searahcorp.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Product_Hunt_Clone */}

          <ImageEvent date="24/04/2020" className="text-center" text="Shoppie" src={L_ProductHuntClone} alt="Product Hunt Clone">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This website is a shooping list using react and material-ui.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register as new user</li>
                          <li>Signin as existing user</li>
                          <li>Edit profile user</li>
                          <li>Add shopping list</li>
                          <li>Delete a product</li>
                          <li>Edit a product</li>
                          <li>Search by name of product</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          {/* <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li> */}
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src="https://material-ui.com/static/logo.png" alt="Material-UI" rounded className="image-style m-1"></Image> Material-UI
                            </span>
                          </li>
                          {/* <li>
                            <span className="p-2">
                              <Image src={L_DJANGO} alt="Django" rounded className="image-style m-1"></Image> Django
                            </span>
                          </li>*/}
                          <li>
                            <span className="p-2">
                              <Image src={L_HEROKU} alt="HEROKU" rounded className="image-style1 m-1"></Image> HEROKU
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/ahadee/shoppinglist" target="_blank">
                  SOURCE CODE
                </UrlButton>
                <UrlButton href="https://shoppie-group4.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Portfolio using Django */}
          <ImageEvent date="23/03/2020" className="text-center" text="Ecommerce using HTML and CSS" src={L_PortfolioUsingDjango} alt="Portfolio using Django">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my first static ecommerce using HTML and CSS.
                        <hr />
                        {/* <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Send emails</li>
                          <li>View my projects</li>
                          <li>Write a blog</li>
                          <li>Hosted using Digital ocean under www.akjfun.com</li>
                          <li>Fully funtional Administration panel</li>
                        </ul>
                        <hr /> */}
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          {/* <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_DJANGO} alt="Django" rounded className="image-style m-1"></Image> Django
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_POSTGRESQL} alt="PostgreSQL" rounded className="image-style1 m-1"></Image> PostgreSQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_DIGITAL_OCEAN} alt="Digital Ocean" rounded className="image-style m-1"></Image> Digital-Ocean
                            </span>
                          </li> */}
                        </ul>
                        <hr />
                        {/* <em>
                          <strong>View Demo Video:</strong>
                          <br />
                          <br />
                          If you are reading this, that means I have updated my Portfolio website to recent one.
                          <br />
                          You can still see a video of my old portfolio by clicking on the button below.
                          <br />
                          <br />
                        </em> */}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/Website-group-IB1/website-group-project" target="_blank">
                  SOURCE CODE
                </UrlButton>
                <UrlButton href="https://group-1-website.netlify.com/index.html" target="_blank">
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
}
