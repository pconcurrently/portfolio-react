import * as React from 'react';
import Particles from 'react-particles-js';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
const ScrollTo = require('react-scroll-into-view');

interface SidebarProps {
};
interface SidebarState {
  isOpen: boolean;
};

class Sidebar extends React.Component<SidebarProps, SidebarState>{
  constructor(props: SidebarProps) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <NavbarBrand className="js-scroll-trigger" href="#">
          <span className="d-block d-lg-none">My Portfolio</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/images/Profile-square.png" alt="" />
          </span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler >
        <Collapse isOpen={this.state.isOpen} navbar onClick={this.toggle}>
          <Nav navbar>
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="#">
                <ScrollTo selector="#about">About Me</ScrollTo>
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="#">
                <ScrollTo selector="#skills">Skills</ScrollTo>
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="#">
                <ScrollTo selector="#experience">Experience</ScrollTo>
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="#">
                <ScrollTo selector="#education">Education</ScrollTo>
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="#">
                <ScrollTo selector="#interests">Other Interests</ScrollTo>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse >
      </Navbar>
    );
  }
}

export default Sidebar;
