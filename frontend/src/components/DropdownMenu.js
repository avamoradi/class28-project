import React from "react";
import { Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

const DropdownMenu = () => {
  return (
    <>
      <Navbar expand='lg' collapseOnSelect>
        <Container className='sec-nav-container'>
          <Navbar.Toggle
            fluid
            as={Button}
            aria-controls='basic-navbar-nav'
            className='navbar-toggle'
          >
            <i className='fas fa-chevron-down'></i>
          </Navbar.Toggle>
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-center'
          >
            <LinkContainer to='/paintings'>
              <Button className='sec-nav-btn' variant='secondary' size='md'>
                Paintings
              </Button>
            </LinkContainer>

            <LinkContainer to='/photography'>
              <Button className='sec-nav-btn' variant='secondary' size='md'>
                Photography
              </Button>
            </LinkContainer>

            <LinkContainer to='/drawings'>
              <Button className='sec-nav-btn' variant='secondary' size='md'>
                Drawings
              </Button>
            </LinkContainer>

            <LinkContainer to='/sculpture'>
              <Button className='sec-nav-btn' variant='secondary' size='md'>
                Sculpture
              </Button>
            </LinkContainer>

            <LinkContainer to='/sell'>
              <Button className='sec-nav-btn' variant='success' size='md'>
                Sell Art
              </Button>
            </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default DropdownMenu;
