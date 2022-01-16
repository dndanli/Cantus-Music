import React from "react";
import { StyledSlider } from "../Components/Layout/Slider/Slider.style";
import { StyledNavbar } from "../Components/Layout/Navbar/Navbar.style";
import { StyledHeaderContainer } from "../Components/Layout/HeaderContainer/HeaderContainer.style";

const Discover: React.FC = () => {
  return (
    <div>
      <div className="header-wrapper">
        <StyledHeaderContainer className="header-container" />
      </div>
      <div className="discover">
        <h2 className="discover-heading">Popular right now</h2>
        <h4 className="discover-heading-desc">top tracks from 2022</h4>
        <StyledSlider height="230px" width="100%" className="slider" />

        <h2 className="discover-heading">Best of Hip Hop</h2>
        <h4 className="discover-heading-desc">top tracks from 2022</h4>
        <StyledSlider height="230px" width="100%" className="slider" />

        <h2 className="discover-heading">Chill Music</h2>
        <h4 className="discover-heading-desc">top tracks from 2022</h4>
        <StyledSlider height="230px" width="100%" className="slider" />
        <br />
      </div>
      <div className="navbar-wrapper">
        <StyledNavbar className="navbar" />
      </div>
    </div>
  );
};

export default Discover;
