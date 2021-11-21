import React from "react";
import { ReactComponent as MainIllustration } from "../Assets/Images/undraw_music_re_a2jk.svg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <main className="hero">
        <div className="hero-illustration">
          <MainIllustration width="250" height="250" />
        </div>
        <div className="heading">
          <h1>Music is Everything</h1>
        </div>
        <div className="info">
          <h4>Listen to your favorite songs with Cantus Music</h4>
        </div>
        <div className="get-started">
          <p>Try Cantus free</p>
          <Link to="/login">Login Page</Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
