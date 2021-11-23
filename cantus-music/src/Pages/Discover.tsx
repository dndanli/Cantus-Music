import React from "react";
import { StyledSlider } from "../Components/Layout/Slider/Slider.style";
const Discover: React.FC = () => {
  return (
    <div className="discover">
      <h2>Trending Genres on Cantus</h2>
      <StyledSlider height="230px" width="100%" className="slider" />
      <StyledSlider height="230px" width="100%" className="slider" />
      <StyledSlider height="230px" width="100%" className="slider" />
    </div>
  );
};

export default Discover;
