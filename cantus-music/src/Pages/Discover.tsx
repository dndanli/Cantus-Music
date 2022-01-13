import React from "react";
import { StyledSlider } from "../Components/Layout/Slider/Slider.style";
import { StyledNavbar } from "../Components/Layout/Navbar/Navbar.style";

const Discover: React.FC = () => {
  return (
    <div className="discover">
      <h2>Trending Genres on Cantus</h2>
      <StyledSlider height="230px" width="100%" className="slider" />
      <StyledSlider height="230px" width="100%" className="slider" />
      <StyledSlider height="230px" width="100%" className="slider" />

      <div>
        <StyledNavbar className="navbar"></StyledNavbar>
      </div>
    </div>
  );
};

export default Discover;
