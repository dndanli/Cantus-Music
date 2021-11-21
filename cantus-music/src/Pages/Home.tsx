import React from "react";
import { ReactComponent as MainIllustration } from "../Assets/Images/undraw_music_re_a2jk.svg";

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
          <h3>Listen to your favorite songs with Cantus Music</h3>
        </div>
        <div className="get-started">
          <h3>Try Cantus free</h3>
        </div>
      </main>
    </div>
  );
};

export default Home;
