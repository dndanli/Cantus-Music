import LinkContainer from "./LinkContainer";
import styled from "styled-components";

export const StyledLinkContainer = styled(LinkContainer)`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  background-color: #2a2c30;
  border-radius: 0.5rem;
  color: rgb(255, 254, 252);
  margin-bottom: 0.5rem;
  cursor: pointer;
  h3 {
    margin-right: auto;
  }
  .link-circle-icon {
    color: rgba(255, 183, 0, 0.9);
  }
`;
