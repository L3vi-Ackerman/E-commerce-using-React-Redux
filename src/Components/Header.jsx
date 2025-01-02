import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Add to Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 20, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
