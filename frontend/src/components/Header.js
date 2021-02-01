import React from 'react'
import { Route } from 'react-router-dom'
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Dropdown,
  Button,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Galileo</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className='navbar-toggle'
          >
            <i class='fas fa-chevron-down'></i>
          </Navbar.Toggle>
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-center'
          >
            <NavDropdown title='Paintings' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Style</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Subject</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Medium</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Photography' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Style</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Subject</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Medium</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Drawings' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Style</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Subject</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Medium</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Sculpture' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Style</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Subject</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Medium</NavDropdown.Item>
            </NavDropdown>

            <LinkContainer to='/sell'>
              <Button variant='success'>Sell Art</Button>
            </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
