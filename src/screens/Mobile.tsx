import React, { Component } from "react";
import { connect } from "react-redux";

interface Props {}
interface State {}

export class Mobile extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <iframe
          src="https://appetize.io/embed/xhuzwrj2gkegp29vf8my9wh5ym?device=nexus5&scale=75&orientation=portrait&osVersion=8.1"
          width="378px"
          height="800px"
          scrolling="no"
          frameBorder="0"
          title="what"
        ></iframe>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
