import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/owlsch.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="title-logo">
        A Novel Idea
        <img src={Logo} />
      </h1>
      <p>We like big books and we cannot lie!</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
