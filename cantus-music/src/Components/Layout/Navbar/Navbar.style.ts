import styled from "styled-components";
import Navbar from "./Navbar";

export const StyledNavbar = styled(Navbar)`
  border-radius: 1rem;
  width: 90%;

  background-color: #485461;
  .nav-ul {
    padding: 1rem 0 0 0;
    display: flex;
    justify-content: space-evenly;
  }

  .nav-link {
    font-size: 2.7rem;
    list-style-type: none;
    color: #ffff;
  }
`;
