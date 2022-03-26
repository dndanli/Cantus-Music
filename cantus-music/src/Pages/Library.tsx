import React from "react";
import StyledHeaderContainer from "../Components/Layout/HeaderContainer/HeaderContainer.style";
import StyledNavbar from "../Components/Layout/Navbar/Navbar.style";
import { StyledLinkContainer } from "../Components/Layout/LinkContainer/LinkContainer.style";

const Library: React.FC = () => {
  return (
    <div>
      <div className="header-wrapper">
        <StyledHeaderContainer className="header-container" />
      </div>
      <div className="library">
        <div className="user-menu">
          <h2 style={{ marginBottom: "1rem" }}>My Library</h2>
          <StyledLinkContainer className="link-container" linkName="Liked" />
          <StyledLinkContainer
            className="link-container"
            linkName="Playlists"
          />
        </div>
      </div>
      <div className="navbar-wrapper">
        <StyledNavbar className="navbar" />
      </div>
    </div>
  );
};

export default Library;
