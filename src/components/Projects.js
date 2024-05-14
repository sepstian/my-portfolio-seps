import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/rent-car-app.png";
import projImg2 from "../assets/img/sosmed-app.png";
import projImg3 from "../assets/img/lidia-app.png";
import projImg4 from "../assets/img/fashboat-app.png";
import projImg5 from "../assets/img/project-img2.png";
import projImg6 from "../assets/img/project-img3.png";
import projImg7 from "../assets/img/project-img1.png";
import projImg8 from "../assets/img/ticket-app.png";
import projImg9 from "../assets/img/todo-list-app.png";
import projImg10 from "../assets/img/juallagi-app.png";
import projImg11 from "../assets/img/block-game.png";
import projImg12 from "../assets/img/memorycard-game.png";
import projImg13 from "../assets/img/fingerninja-game.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Rent-Car-App",
      description: "Ready Development",
      imgUrl: projImg1,
      goTo:"https://rent-car-ten-delta.vercel.app/",
      ada: true,
    },
    {
      title: "Sosmed",
      description: "Ready Development",
      imgUrl: projImg2,
      goTo:"#",
      ada: false,
    },
    {
      title: "Lidia Book",
      description: "Design & Development",
      imgUrl: projImg3,
      goTo:"#",
      ada: false,
    },
    {
      title: "Fashboat Booking",
      description: "Ready Development",
      imgUrl: projImg4,
      goTo:"#",
      ada: false,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
      goTo:"#",
      ada: false,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
      goTo:"#",
      ada: false,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg7,
      goTo:"#",
      ada: false,
    },
    {
      title: "Ticket",
      description: "Design & Development",
      imgUrl: projImg8,
      goTo:"#",
      ada: false,
    },
    {
      title: "Todo List Activity",
      description: "Ready Development",
      imgUrl: projImg9,
      goTo:"#",
      ada: false,
    },
    {
      title: "E-Commerce",
      description: "Ready Development",
      imgUrl: projImg10,
      goTo:"#",
      ada: false,
    },
  ];
  const projectsGame = [
    {
      title: "Block Game",
      description: "Ready Development",
      imgUrl: projImg11,
      goTo:"https://block-game-pearl.vercel.app/",
      ada: true,
    },
    {
      title: "Puzzle",
      description: "Ready Development",
      imgUrl: projImg12,
      goTo:"https://memory-card-game-jet.vercel.app/",
      ada: true,
    },
    {
      title: "Finger Ninja",
      description: "Ready Development",
      imgUrl: projImg13,
      goTo:"https://slash-game.vercel.app/",
      ada: true,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" style={{ cursor:"pointer" }}>Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{ cursor:"pointer" }}>Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" style={{ cursor:"pointer" }}>Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsGame.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}