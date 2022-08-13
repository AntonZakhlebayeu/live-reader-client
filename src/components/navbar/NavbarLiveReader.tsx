import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { logout } from "../../reducers/userReducer";

function NavbarLiveReader() {
  const isAuth = useSelector((state: AnyAction) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Live Reader</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {isAuth && (
            <Nav className="me-auto">
              <Nav.Link href="/authors">Authors</Nav.Link>
              <Nav.Link href="/create/author">Create author</Nav.Link>
            </Nav>
          )}
          <Nav>
            {!isAuth && <Nav.Link href="/authors">Authors</Nav.Link>}
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          {!isAuth ? (
            <Nav className="ml-auto">
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLiveReader;
