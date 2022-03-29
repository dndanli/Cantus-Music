import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";

const StyledHeaderContainer = styled(HeaderContainer)`
  display: flex;
  padding-block: 0.5rem;
  align-items: flex-start;

  .logo {
    padding-left: 1rem;
    font-family: Montserrat, sans-serif;
    text-decoration: none;
    color: rgba(255, 183, 0, 0.9);
  }
`;

export default StyledHeaderContainer;
