import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, goTo, ada }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a style={{ color:"white" }} target={ada ? "_blank":""} href={goTo}><h4>{title}</h4></a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
