import React, { useState, useEffect } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import "./style.css";
import logoImage from "../../assets/logoF.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

const styles = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#FFFFFB" : "#5B5F97",
});

const NavBar = () => {
  //   const { user } = useAuth();

  //   const [userName, setUserName] = useState("");

  //   async function loadUserName() {
  //     const response = await fetch(`http://localhost:3000/user/${user}`);
  //     const data = await response.json();
  //     console.log(data);
  //     setUserName(data);
  //   }

  //   if (user) {
  //     useEffect(() => {
  //       loadUserName();
  //     }, []);
  //   }

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
            New Flashcard
          </NavLink>
          {/* <NavLink style={styles} to="/:username">
            User
          </NavLink> */}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
