import React, { Component } from "react";
import logo from "../logo.svg";
import Contact from "./contact";
import About from "./about";
import Services from "./services";
import Home from "./home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
} from "reactstrap";

class NavBar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand>
              <Link class="link" to="/">
                DANREJ{" "}
              </Link>
            </NavbarBrand>
            <img src={logo} className="App-logo" alt="logo" />
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>
                    <Link class="link" to="/about/">
                      About
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link class="link" to="/contact/">
                      Contact
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link class="link" to="/services/">
                      Services
                    </Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
          <Route path="/services/" component={Services} />
        </div>
      </Router>
    );
  }
}

export default NavBar;
