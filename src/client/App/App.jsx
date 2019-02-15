import React from "react";
import { Link } from "react-router-dom";
import Router from "./Router"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faRssSquare } from '@fortawesome/free-solid-svg-icons'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

library.add(faHome, faRssSquare);

class App extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    window.prerenderReady = true;
  }

  render() {
    return (
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="https://github.com/HW-Core/universal-pwa">HW Universal PWA</NavbarBrand>
          <NavbarToggler onClick={this.toggle} aria-label="navbar-toggler"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/" tag={Link}><FontAwesomeIcon icon="home"/> Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/blog/" tag={Link}><FontAwesomeIcon icon="rss-square"/> Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/app/" tag={Link}>Admin</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Router>
    )
  }
};

export default App;