/** @format */

import React, { useContext, useState } from "react";
import "./Header.scss";
import {
  NavDropdown,
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
  Dropdown,
  NavDropdownProps,
  Card,
  Modal,
} from "react-bootstrap";
import Logo from "../../Assets/education.svg";
// import Profile from "../../Assets/person.svg";
import SignUp from "../Signup/Signup";
import Login from "../Login/Login";
// import Cart from "../../Assets/cart.svg";
import Cart from "../Cart/Cart";
// import cartContext from "../Context";
import { Link } from "react-router-dom";

const Header = (props) => {
  console.log("from headers", props);

  const [show, setShow] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(true);
  // const [signupComp, setSignupComp] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSignUpComp = () => setLoginOpen(false);
  const handleLoginComp = () => setLoginOpen(true);



  return (
    <React.Fragment>
      <Navbar className="navbar" variant="light">
        <Navbar.Brand className="navbar-title" href="#home">
          Bookstore
        </Navbar.Brand>
        <Navbar.Brand>
          <img className="header-icon" src={Logo} />
        </Navbar.Brand>
        <Form inline className="searchbar-form">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 searchbar"
          />
        </Form>
        <Nav className="mr-auto navbar-icon-text  icons">
          <li class="nav-item dropdown">
            <a
              class="nav-link text-center d-flex flex-column"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  fill="currentColor"
                  color="white"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </span>

              <h2 className="header-cart-name">Profile</h2>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right shadow-lg"
              aria-labelledby="navbarDropdown"
            >
              <Card>
                <Card.Body>
                  {" "}
                  <h5 class="card-title">Welcome</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    To Access Account and Manage orders
                  </h6>
                  <div className="headerlogin">
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={handleShow}
                    >
                      LOGIN/SIGNUP
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </li>
          {/* <Link to="/cart">Link
            </Link> */}
         
            <Nav.Link className=" text-center cart-nav-header">
              <span>
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  fill="currentColor"
                  color="white"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg></Link>
              </span>
              <span className="badge badge-light cart-badge ">0</span>

              <span><Link to ="/cart">
                <h2 className="header-cart-name">Cart</h2></Link>
              </span>
            </Nav.Link>
         

        </Nav>
      </Navbar>
      {/*  Log in and signup Modal */}
      <Modal show={show} onHide={handleClose} className="login-signup-modal">
        <Modal.Header>
          <Modal.Title className="login-upper-button">
            <button className="btn btn-light" onClick={handleLoginComp}>
              Login
            </button>
          </Modal.Title>
          <Modal.Title className="signup-upper-button">
            <button className="btn btn-light" onClick={handleSignUpComp}>
              SignUp
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-login-body">
          {isLoginOpen ? <Login props={props} /> : <SignUp props={props} />}
          {/* <div className="login-form-modal"><Login /></div> */}
          <div className="login-form-modal">{/* <SignUp /> */}</div>
          {/* <SignUp /> */}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </React.Fragment>
  );
};

export default Header;
