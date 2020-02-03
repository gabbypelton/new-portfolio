import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Form, Input, Button } from "reactstrap";
import moment from "moment";
// @ts-ignore
import { Bounce } from "react-activity";
import { sendMessage } from "../actions/contact";
import { message } from "../reducers/contact";

interface Props {
  sendMessage: Function;
  getToken: Function;
  getMessages: Function;
  messages: message[];
  contactIsLoading: boolean;
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
    this.setState({
      message: ""
    })
  }

  handleKey(e: any) {
    console.log(e.which);
    if (e.which === 13) {
      e.preventDefault();
      this.submitMessage();
    }
  }

  render() {
    return (
      <Row style={{ color: "white", minHeight: "100vh" }}>
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
            <Form onKeyDown={(e) => this.handleKey(e)}>
              <Input
                style={{ height: "100%", width: "100%" }}
                type="textarea"
                name="message"
                value={this.state.message}
                placeholder="Hello, have a job."
                onChange={e => this.setMessage(e)}
              />
            </Form>
            <Button onClick={() => this.submitMessage()}>Holler</Button>
          </Row>

          <Row className="contact__detail">
            <Col>
              <Row className="contact__line">
                Please note this is just for fun. For secure communication,
                email me at:
              </Row>
              <Row className="contact__line">
                <a href="mailto:gabriellapelton@gmail.com">
                  gabriellapelton@gmail.com
                </a>
              </Row>
            </Col>
          </Row>
          <Row className="contact__messages-row">
            <Col className="contact__messages-column">
              {this.props.messages.map(message => {
                return (
                  <Row className="contact__message" key={message._id}>
                    {moment(message.createdOn).format("YYYY/MM/DD hh:mm")}{" "}
                    (you): {message.content}
                  </Row>
                );
              })}
              {this.props.contactIsLoading ? (<Row><Bounce/></Row>) : null}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state: any) => ({
  messages: state.contact.messages,
  contactIsLoading: state.contact.isLoading
});

const mapDispatchToProps = {
  sendMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
