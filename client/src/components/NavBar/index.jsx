import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './style.css'
import logoImage from '../../assets/logoF.svg'

const NavBar = () => {
    return (
        <>
            <header className="nav-container">
                <div className="nav-logo"><img src={logoImage} alt='logo'/></div>
                <nav className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/flashcards">Flashcards</NavLink>
                    <NavLink to="/add">Add a Flashcard</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    );
  };

export default NavBar
