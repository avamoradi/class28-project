import React from "react";
import { Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

const DropdownMenu = () => {
  return (
    <Navbar>
      <Container
        sm={2}
        bg={6}
        lg={12}
        className='sec-nav-container d-flex justify-content-center'
      >
        <LinkContainer to='/paintings'>
          <Button className='sec-nav-btn' variant='secondary' size='md'>
            <i className='fa fa-paint-brush' aria-hidden='true'></i>
            Paintings
          </Button>
        </LinkContainer>

        <LinkContainer to='/photography'>
          <Button className='sec-nav-btn' variant='secondary' size='md'>
            <i className='fas fa-camera'></i>Photography
          </Button>
        </LinkContainer>

        <LinkContainer to='/drawings'>
          <Button className='sec-nav-btn' variant='secondary' size='md'>
            <i className='fas fa-pencil-ruler'></i>Drawings
          </Button>
        </LinkContainer>

        <LinkContainer to='/sculpture'>
          <Button className='sec-nav-btn' variant='secondary' size='md'>
            <i className='fas fa-portrait'></i>Sculpture
          </Button>
        </LinkContainer>

        <LinkContainer to='/sell'>
          <Button className='sec-nav-btn' variant='success' size='md'>
            <i className='fas fa-money-check-alt'></i>Sell Art
          </Button>
        </LinkContainer>
      </Container>
    </Navbar>
  );
};

export default DropdownMenu;
