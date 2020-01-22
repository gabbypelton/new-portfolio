import React, { Component } from "react";
import { connect } from "react-redux";
import { PortfolioItem } from "../components/PortfolioItem";

interface Props {}
interface State {}

export class FullStack extends Component<Props, State> {
  state = {};

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FullStack);
