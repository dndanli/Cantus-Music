import StyledHeaderContainer from "../Components/Layout/HeaderContainer/HeaderContainer.style";
import StyledNavbar from "../Components/Layout/Navbar/Navbar.style";
import { StyledLinkContainer } from "../Components/Layout/LinkContainer/LinkContainer.style";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

type LibraryProps = {
  className: string;
};

const Library = ({ className }: LibraryProps) => {
  return (
    <div className={className}>
      <div className="header-wrapper">
        <StyledHeaderContainer className="header-container" />
      </div>
      <div className="library">
        <div className="user-menu">
          <div className="user-info-wrapper">
            <h2 className="lib-header-2">My Library</h2>

            <div className="user-icon">
              <Link to="/username:1">
                <AiOutlineUser id="user-icon" />
              </Link>
            </div>
          </div>
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
