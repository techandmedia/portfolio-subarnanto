import React from "react";
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
  DropdownItem, Modal, ModalHeader
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false
    };
    // this.state = {
    //   isOpen: false
    // };
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
            navbar
          >
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Modal>
          {/* <Collapse isOpen={this.state.isOpen} navbar /> */}
        </Navbar>
      </div>
    );
  }
}
