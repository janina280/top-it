import React from 'react';
import "./Header.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header(props) {
  const location = useLocation();  
  const navigate = useNavigate();  

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  let title = capitalize(location.pathname.substring(1, location.pathname.length));
  if (location.pathname === '/') {
    title = 'Welcome';
  }

  function renderLogout() {
    if (location.pathname === '/home') {
      return (
        <div className="ml-auto">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      );
    }
  }

  function handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    navigate('/login');  
  }

  return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: "" }}>
            <FontAwesomeIcon icon={faComputer} />
            TopIt
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0"
              style={{maxHeight:'100px'}}
              navbarScroll>
                  <NavLink className="nav-link" to ="/">
  Home
                  </NavLink>
                  <NavLink className="nav-link" to ="/watchList">
  Watch List
                  </NavLink>
              </Nav>
              <Button className="custom-button me-2">Login</Button>
<Button className="custom-button">Register</Button>

          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;
