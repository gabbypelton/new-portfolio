import React, { Component } from "react";
import { Container } from "reactstrap";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-activity/dist/react-activity.css";
import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import Contact from "./screens/Contact";
import Resume from "./screens/Resume";
import Projects from "./screens/Projects";
import { getToken, getMessages } from "./actions/contact";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("contactToken");
    if (!token) {
      this.props.getToken();
    } else {
      this.props.getMessages();
    }
  }
  render() {
    return (
      <Container className="App">
        <NavigationBar />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Resume} />
      </Container>
    );
  }
}

export default connect(null, {getToken, getMessages})(App);
