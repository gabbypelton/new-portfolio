import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectItem from "../components/ProjectItem";
import projects from "../assets/projects.json";
import { Row } from "reactstrap";

interface Props {}
interface State {}

export class FrontEnd extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Row className="projects__container">
        {projects.map((project) => {
          return <ProjectItem project={project} />;
        })}
      </Row>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FrontEnd);
