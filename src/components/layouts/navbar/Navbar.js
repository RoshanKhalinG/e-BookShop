import React, { useContext } from "react";
import "./navbar.styles.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../assets/books-images/ebookshop logo (1).png"

const Navbar = ({ darkTheme, darkText }) => {
  const user = useContext(UserContext);


  const showLoginandSignUp = (
    <nav className="nav-links-container">
      <Link to="/" className={`${darkText ? "nav-links-dark" : "nav-links"}`}>
        Home
      </Link>
      <Link
        to="/books"
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Books
      </Link>
      
      <Link
        to="/login"
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Login
      </Link>
      <Link
        to="/signup"
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Sign up
      </Link>
    </nav>
  );


  return (
    <section
      className={`navbar-container ${
        darkTheme ? "background-dark relative" : "background-transparent"
      } `}
    >
      <div className="container flex justify-between align-center">
        <Link to="/" >
        <img src={logo} alt="My Image" style={{ width: '120px', height: 'auto' }} />
        </Link>

        {user ? showLoginandSignUp : showLoginandSignUp}
      </div>
    </section>
  );
};

export default Navbar;
