import styled from "styled-components";
import Navbar from "./Navbar";

export const StyledNavbar = styled(Navbar)`
  .nav-ul {
    padding: 0em;
    display: flex;
    justify-content: space-evenly;
  }

  .nav-link {
    font-size: 2.7rem;
    list-style-type: none;
    color: #f9b026;
  }
`;
