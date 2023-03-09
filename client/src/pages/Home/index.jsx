import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import logoImage from "../../assets/logoF.svg";
import "./style.css";

const Home = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  console.log({ user });

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser("");
    navigate("/login");
  };

  return (
    <>
      <h2 className="welcome">Welcome</h2>
      <h3>Learn faster with our interactive flashcards!</h3>
      <div className="homeMenu">
        <h4>
          <Link to="/flashcards" className="home-links">
            Start Flipping Flashcards
          </Link>
        </h4>
        <h4>
          <Link to="/add" className="home-links">
            Add a new flashcard
          </Link>
        </h4>
        <h4>
          <Link to="/login" className="home-links" onClick={handleLogout}>
            Log out
          </Link>
        </h4>
        <div className="nav-logo">
          <img src={logoImage} alt="logo" className="logo" />
        </div>
      </div>

      {/* <Link to='/login'>Login</Link> */}
    </>
  );
};

export default Home;
