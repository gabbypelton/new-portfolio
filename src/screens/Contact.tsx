import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Form, Input, Button } from "reactstrap";
import { sendMessage } from "../actions/contact";

interface Props {
  sendMessage: Function
}
interface State {
  message: string;
}

export class Contact extends Component<Props, State> {
  state = {
    message: ""
  };

  setMessage(event: any) {
    this.setState({
      message: event.target.value
    });
  }

  submitMessage() {
    this.props.sendMessage(this.state.message);
  }

  render() {
    return (
      <Row style={{ color: "white", minHeight: "50vh" }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            height: "inherit",
            justifyContent: "center"
          }}
        >
          <Row
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center"
            }}
          >
            <Form>
              <Input
                style={{ height: "100%", width: "100%" }}
                type="textarea"
                name="message"
                placeholder="Hello, have a job."
                onChange={e => this.setMessage(e)}
              />
            </Form>
            <Button>Holler</Button>
          </Row>

          <Row className="contact__detail">
            <Col>
              <a href="mailto:gabriellapelton@gmail.com">
                gabriellapelton@gmail.com
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  sendMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
