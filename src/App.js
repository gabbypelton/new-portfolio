import React from "react";
import { Container, Column, Row } from "reactstrap";
import { Route } from "react-router-dom";
import Mobile from "./screens/Mobile";
import FrontEnd from "./screens/FrontEnd";
import BackEnd from "./screens/BackEnd";
import FullStack from "./screens/FullStack";
import Contact from "./screens/Contact";
import Resume from "./screens/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <Container className="App">
      <NavigationBar />
      <Route path="/frontend" component={FrontEnd} />
      <Route path="/backend" component={BackEnd} />
      <Route path="/fullstack" component={FullStack} />
      <Route path="/mobile" component={Mobile} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
    </Container>
  );
}

export default App;
