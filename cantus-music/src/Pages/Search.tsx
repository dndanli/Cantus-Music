import StyledHeaderContainer from "../Components/Layout/HeaderContainer/HeaderContainer.style";
import StyledNavbar from "../Components/Layout/Navbar/Navbar.style";
import StyledSearchBar from "../Components/Layout/SearchBar/SearchBar.style";

type SearchProps = {
  className: string;
};
const Search = ({ className }: SearchProps) => {
  return (
    <div>
      <div className="header-wrapper">
        <StyledHeaderContainer className="header-container" />
      </div>
      <div className={className}>
        <div className="searchbar-wrapper">
          <StyledSearchBar className="searchbar" />
        </div>
      </div>
      <div className="navbar-wrapper">
        <StyledNavbar className="navbar" />
      </div>
    </div>
  );
};

export default Search;
