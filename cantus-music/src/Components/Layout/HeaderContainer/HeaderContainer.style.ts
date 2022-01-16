import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";

export const StyledHeaderContainer = styled(HeaderContainer)`
  background-color: rgb(255, 254, 252);
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.5rem;
  align-items: center;

  .logo {
    margin-left: -6.2rem;
    /* TODO: change font */
    font-family: Montserrat, sans-serif;
    text-decoration: none;
    color: #c293eb;
  }

  .listen-in-app-btn {
    background-color: #3a1d5c;
    border-radius: 0.5rem;
    color: rgb(255, 254, 252);
    padding: 0.8rem;
    margin-right: -5rem;
    font-size: 10px;
    font-family: Montserrat, sans-serif;
  }
`;
