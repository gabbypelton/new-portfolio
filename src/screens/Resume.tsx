import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectItem from "../components/ProjectItem";
import pic from "../assets/resume.jpg";

interface Props {}
interface State {}

export class Resume extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <iframe
          className="resume__iframe"
          src="https://resume.creddle.io/resume/gcvhp338b0x"
          width="100%"
          height="1250"
          scrolling="no"
          frameBorder="none"
        />
        <img className="resume__img" src={pic} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
