import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from '/logo.png';
import './header.css';
import { useDispatch, useSelector } from "react-redux";
import { clearUserInfo } from "../../Redux/Slice/UserSlice";

function Header() {
  const user = useSelector((state)=>state.User.userInfo)
  const userDone = useSelector((state)=>state.User.userDone)
  const doneStatue = useSelector((state)=>state.User.doneStatue)
  const userClass = doneStatue ? 'userName-active' : 'userName-inactive';
  const signClass = doneStatue? 'signClass-inactive':'signClass-active';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout=()=>{
      dispatch(clearUserInfo())
      alert(`Good Bye ! See you later ${userDone.userName} 💝`)
      navigate('/')}

  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" style={{ height: "80px" }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            src={logo} 
            alt="UK FORMIFY Logo" 
            style={{ maxHeight: "50px",maxWidth:"200px", objectFit: "contain " }}  
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Ourplans">Packages</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/ContactUS">Contact</Nav.Link>
            

            <div className={`signClass ${signClass}`}>
        <Nav.Item>
        <Nav.Link as={Link} className="CTA" to="/signup">Start NOW!</Nav.Link>
        </Nav.Item>
        </div>

        <div className={`userName ${userClass}`}>
        <Nav.Link as={Link} to="/">{user ? ` ${userDone.userName}` : ""}</Nav.Link>

        <i onClick={logout} className="fas fa-sign-out-alt"></i>
      </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
