import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

interface Props {}
interface State {
  isOpen: boolean;
}

export class NavigationBar extends Component<Props, State> {
  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">
            <NavbarBrand>Gabriella Pelton</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle.bind(this)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/projects">
                  <NavLink>Projects</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact">
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
            </Nav>
            <NavbarText>
              <a href="https://github.com/gabbypelton">github</a>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
