import React, { Component } from "react";
import { connect } from "react-redux";
import pic from "../assets/resume.jpg";
import { Button } from "reactstrap";
import { rootState } from "../reducers/store";
import { saveState, loadState } from "../actions/global";

interface Props {
  state: rootState
  saveState: any,
  loadState: any
}
interface State {}

export class Resume extends Component<Props, State> {
  state = {};

  componentDidMount() {
    this.props.loadState();
  }

  componentWillUnmount() {
    this.props.saveState();
  }

  render() {
    return (
      <div style={{width: "inherit", maxWidth: "inherit"}}>
        <div
          style={{
            width: "100%",
            height: "3rem",
            backgroundColor: "#f8f9fa",
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center"
          }}
        >
          <a href="./resume.pdf" download="Gabriella Pelton Resume 2020"><Button>Download PDF</Button></a>
        </div>
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

const mapStateToProps = (state: any) => ({
  state
});

const mapDispatchToProps = {
  loadState,
  saveState
};

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
