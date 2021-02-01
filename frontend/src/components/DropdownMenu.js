import React from 'react'
import { Navbar, Container, Button, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { DropdownSubmenu, NavDropdownMenu } from 'react-bootstrap-submenu'

const DropdownMenu = () => {
  return (
    <>
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
            <NavDropdownMenu title='Paintings' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
              <DropdownSubmenu href='#action/3.7' title='Style'>
                <NavDropdown.Item href='#action/8.1'>Fine Art</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Abstract</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Modern</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Street Art
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Pop Art</NavDropdown.Item>
              </DropdownSubmenu>

              <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
              <DropdownSubmenu href='#action/3.7' title='Subject'>
                <NavDropdown.Item href='#action/8.1'>Portrait</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Landscape
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Still Life
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Nature</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Beach</NavDropdown.Item>
              </DropdownSubmenu>

              <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
              <DropdownSubmenu href='#action/3.7' title='Medium'>
                <NavDropdown.Item href='#action/8.1'>Oil</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Watercolor
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Acrylic</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Airbrush</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Digital</NavDropdown.Item>
              </DropdownSubmenu>
            </NavDropdownMenu>

            <NavDropdownMenu title='Photography' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
              <DropdownSubmenu href='#action/3.7' title='Style'>
                <NavDropdown.Item href='#action/8.1'>Fine Art</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Portraiture
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Abstract</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Documentary
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Conceptual
                </NavDropdown.Item>
              </DropdownSubmenu>

              <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
              <DropdownSubmenu href='#action/3.7' title='Subject'>
                <NavDropdown.Item href='#action/8.1'>
                  Landscape
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Portrait</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Nature</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Still Life
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Nude</NavDropdown.Item>
              </DropdownSubmenu>

              <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
              <DropdownSubmenu href='#action/3.7' title='Medium'>
                <NavDropdown.Item href='#action/8.1'>Digital</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Black and White
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Color</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>C-type</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Digital</NavDropdown.Item>
              </DropdownSubmenu>
            </NavDropdownMenu>

            <NavDropdownMenu title='Drawings' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
              <DropdownSubmenu href='#action/3.7' title='Style'>
                <NavDropdown.Item href='#action/8.1'>Graffiti</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Abstract</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Fine Art</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Pop Art</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Surrealism Art
                </NavDropdown.Item>
              </DropdownSubmenu>

              <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
              <DropdownSubmenu href='#action/3.7' title='Subject'>
                <NavDropdown.Item href='#action/8.1'>Nature</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Portrait</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Animal</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Love</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Cartoon</NavDropdown.Item>
              </DropdownSubmenu>

              <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
              <DropdownSubmenu href='#action/3.7' title='Medium'>
                <NavDropdown.Item href='#action/8.1'>Pencil</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Charcoal</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Digital</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Ink</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Pastel</NavDropdown.Item>
              </DropdownSubmenu>
            </NavDropdownMenu>

            <NavDropdownMenu title='Sculpture' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
              <DropdownSubmenu href='#action/3.7' title='Style'>
                <NavDropdown.Item href='#action/8.1'>Pop Art</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Abstract</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Wall</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Figurative
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Modern</NavDropdown.Item>
              </DropdownSubmenu>

              <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
              <DropdownSubmenu href='#action/3.7' title='Subject'>
                <NavDropdown.Item href='#action/8.1'>Body</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Still Life
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Animal</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Architecture
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>
                  Geometric
                </NavDropdown.Item>
              </DropdownSubmenu>

              <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
              <DropdownSubmenu href='#action/3.7' title='Medium'>
                <NavDropdown.Item href='#action/8.1'>Metal</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Bronze</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Clay</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Glass</NavDropdown.Item>
                <NavDropdown.Item href='#action/8.1'>Wood</NavDropdown.Item>
              </DropdownSubmenu>
            </NavDropdownMenu>

            <LinkContainer to='/sell'>
              <Button variant='success'>Sell Art</Button>
            </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default DropdownMenu
