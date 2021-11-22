import React from "react";
import { StyledBox } from "../Components/Layout/Box/Box.style";
import MusicianImg from "../Assets/Images/nathan-nichols-nOFXvnRMMK4-unsplash.jpg";

const Discover: React.FC = () => {
  return (
    <div>
      <StyledBox
        boxArtWorkImg={MusicianImg}
        imgAlt="R&B Music"
        boxDesc="Best R&B right now"
        className="box"
        height="209px"
        width="165px"
      />
    </div>
  );
};

export default Discover;
