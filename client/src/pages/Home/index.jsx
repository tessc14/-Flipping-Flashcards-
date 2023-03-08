import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log({ user });

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <h2>Welcome</h2>
      <h3>Learn faster with our interactive flashcards!</h3>
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
      {/* <Link to='/login'>Login</Link> */}
    </>
  );
};

export default Home;
