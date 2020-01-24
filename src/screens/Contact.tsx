import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Form, Input, Button } from "reactstrap";
import moment from "moment";
import { sendMessage, getMessages, getToken } from "../actions/contact";
import { message } from "../reducers/contact";

interface Props {
  sendMessage: Function;
  getToken: Function;
  getMessages: Function;
  messages: message[];
}
interface State {
  message: string;
}

export class Contact extends Component<Props, State> {
  state = {
    message: ""
  };

  componentDidMount() {
    const token = localStorage.getItem("contactToken");
    if (!token) {
      this.props.getToken();
    } else {
      this.props.getMessages();
    }
  }

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
                <a href="mailto:gabriellapelton@gmail.com">gabriellapelton@gmail.com</a>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="contact__messages">
              {this.props.messages.map(message => {
                return (
                  <Row className="contact__message" key={message._id}>
                    {moment(message.createdOn).format("YYYY/MM/DD hh:mm")}{" "}
                    (you): {message.content}
                  </Row>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state: any) => ({
  messages: state.contact.messages
});

const mapDispatchToProps = {
  sendMessage,
  getMessages,
  getToken
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
