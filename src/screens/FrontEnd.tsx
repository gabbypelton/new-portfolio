import React, { Component } from "react";
import { connect } from "react-redux";
import { PortfolioItem } from "../components/PortfolioItem";
import projects from "../projects.json";
import { Card } from "reactstrap";

interface Props {}
interface State {}

export class FrontEnd extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        {projects.frontend.map(project => {
          return <PortfolioItem 
            title={project.title}
            description={project.description}
            date={project.date}
            imageSource={project.imageSource}
            link={project.link}
          />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FrontEnd);
