import React, { Component } from "react";
import { connect } from "react-redux";
import { PortfolioItem } from "../components/PortfolioItem";
import pic from "../assets/mozilla.png";

interface Props {}
interface State {}

export class Resume extends Component<Props, State> {
  state = {};

  render() {
    return (
      <img src={pic} />
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
