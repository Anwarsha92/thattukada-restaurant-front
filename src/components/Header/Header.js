import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://t4.ftcdn.net/jpg/02/05/62/17/360_F_205621761_vLJ1POOyFOAB5wYlYd7Fo0NzaJXqAu3w.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span style={{color:'green'}}><strong>തട്ടുകട.com</strong></span>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header