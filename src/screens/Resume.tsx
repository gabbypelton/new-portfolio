import React, { Component } from "react";
import { connect } from "react-redux";
import pic from "../assets/resume.jpg";
import { Button } from "reactstrap";

interface Props {}
interface State {}

export class Resume extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div style={{ width: "inherit", maxWidth: "inherit" }}>
        <div
          style={{
            width: "100%",
            height: "3rem",
            backgroundColor: "#f8f9fa",
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center",
          }}
        >
          <a
            href="./Gabriella Pelton Resume 2020.pdf"
            download="Gabriella Pelton Resume 2020"
          >
            <Button>Download PDF</Button>
          </a>
        </div>
        <iframe
          className="resume__iframe"
          src="https://resume.creddle.io/resume/gcvhp338b0x"
          width="100%"
          height="1250"
          scrolling="no"
          frameBorder="none"
          title="resume"
        />
        <img
          className="resume__img"
          src={pic}
          alt="Gabriella Pelton Resume 2020"
        />
      </div>
    );
  }
}

export default connect()(Resume);
