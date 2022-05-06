import React from 'react';
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar fixed="top" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand>Staking Dapp React UI</Navbar.Brand>
          <Nav variant="pils">
            <Nav.Item className="btn-outline">
              <Nav.Link eventKey="/" href="/" className="btn-outline">home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/stake/add" href="/stake">stake</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/token" href="/token">token</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
