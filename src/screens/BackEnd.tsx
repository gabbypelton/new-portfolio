import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectItem from "../components/ProjectItem";

interface Props {}
interface State {}

export class BackEnd extends Component<Props, State> {
  state = {};

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BackEnd);
