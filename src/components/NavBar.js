import React from 'react'
import { Row, Navbar, Container, Nav, Form } from 'react-bootstrap'
export default function NavBaR() {
  return (
    <Row >
      <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand href="#">
            <div className='brand-color'>
              مطعم
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="ابحت ..."
                className="me-2"
                aria-label="Search"
              />
              <button className='btn-search me-2'>ابحت</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </Row>
  )

}
