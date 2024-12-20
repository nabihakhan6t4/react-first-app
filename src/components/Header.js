import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSearch, FaShoppingBag, FaPhone } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import rectangleImage from '../images/Rectangle 39.png';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={rectangleImage}
            alt="Logo"
            style={{ width: '40px', height: '40px' }}
          />
          <span className="ms-2 fs-4">FOODI</span>
        </Navbar.Brand>

        {/* Toggle Button for Small Screens */}
        <Navbar.Toggle aria-controls="navbarResponsive" />

        {/* Collapsible Links */}
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto w-100 d-flex justify-content-center">
            <Nav.Link href="#home" className="text-success">Home</Nav.Link>
            <Nav.Link href="#menu" className="text-success">Menu</Nav.Link>
            <Nav.Link href="#services" className="text-success">Services</Nav.Link>
            <Nav.Link href="#offers" className="text-success">Offers</Nav.Link>

            {/* Icons and Buttons inside Menu for Small Screens */}
            <div className="d-lg-none">
              <Nav.Link href="#search" className="text-success">
                <FaSearch /> Search
              </Nav.Link>
              <Nav.Link href="#bag" className="text-success">
                <FaShoppingBag /> Bag
              </Nav.Link>
              {/* Always visible Contact Button */}
              <Nav.Link
                href="#contact"
                className="btn btn-success text-white mt-2"
                style={{ display: 'block', borderRadius: '50px' }}
              >
                <FaPhone className="me-1" style={{ transform: 'rotate(90deg)' }} /> Contact
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>

        {/* Icons for Larger Screens */}
        <div className="d-none d-lg-flex align-items-center">
          <Nav.Link href="#search" className="text-success me-2">
            <FaSearch />
          </Nav.Link>
          <Nav.Link href="#bag" className="text-success me-2">
            <FaShoppingBag />
          </Nav.Link>
          <Button variant="success">
            <FaPhone className="me-1" style={{ transform: 'rotate(90deg)' }} /> Contact
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
