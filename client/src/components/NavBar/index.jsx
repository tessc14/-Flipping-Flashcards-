import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import "./style.css";
import logoImage from "../../assets/logoF.svg";
const styles = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#FFFFFB" : "#5B5F97",
});

const NavBar = () => {
  return (
    <>
      <header className="nav-container">
        <Link to="/">
          <div className="nav-logo">
            <img src={logoImage} alt="logo" />
          </div>
        </Link>
        <nav className="nav-links">
          <NavLink style={styles} to="/">
            Home
          </NavLink>
          <NavLink style={styles} to="/flashcards">
            Flashcards
          </NavLink>
          <NavLink style={styles} to="/add">
            Add a Flashcard
          </NavLink>
          <NavLink style={styles} to="/:username">
            User
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
