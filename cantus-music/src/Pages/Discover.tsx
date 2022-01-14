import React from "react";
import { StyledSlider } from "../Components/Layout/Slider/Slider.style";
import { StyledNavbar } from "../Components/Layout/Navbar/Navbar.style";

const Discover: React.FC = () => {
  return (
    <div>
      <div className="discover">
        <h2>Popular right now</h2>
        <StyledSlider height="230px" width="100%" className="slider" />

        <h2>Best of Hip Hop</h2>
        <StyledSlider height="230px" width="100%" className="slider" />

        <h2>Chill Music</h2>
        <StyledSlider height="230px" width="100%" className="slider" />
        <br />
      </div>
      <div className="navbar-wrapper">
        <StyledNavbar className="navbar"></StyledNavbar>
      </div>
    </div>
  );
};

export default Discover;
