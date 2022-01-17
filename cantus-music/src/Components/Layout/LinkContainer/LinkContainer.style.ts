import LinkContainer from "./LinkContainer";
import styled from "styled-components";

export const StyledLinkContainer = styled(LinkContainer)`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  background-color: rgba(58, 29, 92, 0.9);
  border-radius: 0.5rem;
  color: rgb(255, 254, 252);
  margin-bottom: 0.5rem;
  cursor: pointer;
  h3 {
    margin-right: auto;
  }
  h4 {
    color: #c293eb;
  }
`;
