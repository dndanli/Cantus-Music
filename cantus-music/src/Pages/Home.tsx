import React from "react";
import { ReactComponent as MainIllustration } from "../Assets/Images/background.svg";
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
          <p className="home-text-1">
            We're more than an audio streaming platform.
          </p>
          <p className="home-text-2">
            Listen to your favorite songs with Cantus Music
          </p>
        </div>
        <div className="get-started">
          <Link to="/signup">
            <p>Try Cantus free</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
